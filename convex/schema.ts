import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    isAdmin: v.boolean(),
  }).index("by_clerk_id", ["clerkId"]),
});
