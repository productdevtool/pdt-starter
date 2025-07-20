import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const payloadString = await request.text();
    const svixHeaders = {
      "svixId": request.headers.get("svix-id")!,
      "svixTimestamp": request.headers.get("svix-timestamp")!,
      "svixSignature": request.headers.get("svix-signature")!,
    };

    try {
      const event = await ctx.runAction("clerk", {
        payload: payloadString,
        headers: svixHeaders,
      });

      switch (event.type) {
        case "user.created":
        case "user.updated":
          await ctx.runMutation(internal.users.createOrUpdateUser, {
            clerkUser: event.data,
          });
          break;
        case "user.deleted":
          await ctx.runMutation(internal.users.deleteUser, {
            id: event.data.id,
          });
          break;
      }

      return new Response(null, { status: 200 });
    } catch (err) {
      console.error(err);
      return new Response("Webhook Error", { status: 400 });
    }
  }),
});

export default http;
