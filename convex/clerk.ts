import { action } from "./_generated/server";
import { Webhook } from "svix";
import { v } from "convex/values";

import { createClerkClient } from "@clerk/backend";
import { internal } from "./_generated/api";

export const clerk = action({
  args: {
    payload: v.string(),
    headers: v.object({
      svixId: v.string(),
      svixTimestamp: v.string(),
      svixSignature: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("CLERK_WEBHOOK_SECRET is not set");
    }

    const wh = new Webhook(webhookSecret);
    const event = wh.verify(args.payload, args.headers);
    return event;
  },
});

export const syncUsers = action({
  handler: async (ctx) => {
    const clerkSecretKey = process.env.CLERK_SECRET_KEY;
    if (!clerkSecretKey) {
      throw new Error("CLERK_SECRET_KEY is not set");
    }

    const clerk = createClerkClient({ secretKey: clerkSecretKey });
    const users = await clerk.users.getUserList();

    for (const user of users.data) {
      const clerkId = user.id;
      const email = user.emailAddresses[0]?.emailAddress || "";
      const isAdmin = user.privateMetadata.isAdmin || false;

      await ctx.runMutation(internal.users.createOrUpdateUser, {
        clerkId,
        email,
        isAdmin,
      });
    }
    return { success: true, syncedUsers: users.length };
  },
});
