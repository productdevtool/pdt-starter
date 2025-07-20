import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    isAdmin: v.boolean(),
  }).index("by_clerk_id", ["clerkId"]),
  organizations: defineTable({
    name: v.string(),
  }),
  subscriptions: defineTable({
    userId: v.id("users"),
    organizationId: v.id("organizations"),
    status: v.string(),
  }),
  events: defineTable({
    name: v.string(),
    timestamp: v.number(),
  }),
  groceries: defineTable({
    name: v.string(),
    quantity: v.number(),
  }),
});
