import { internalMutation, mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrUpdateUser = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    isAdmin: v.boolean(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (user) {
      await ctx.db.patch(user._id, {
        email: args.email,
        isAdmin: args.isAdmin,
      });
      return user._id;
    } else {
      return await ctx.db.insert("users", {
        clerkId: args.clerkId,
        email: args.email,
        isAdmin: args.isAdmin,
      });
    }
  },
});

export const deleteUser = internalMutation({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (user) {
      await ctx.db.delete(user._id);
    }
  },
});

export const getUser = query({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();
  },
});

export const getAdminUsers = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("isAdmin"), true))
      .collect();
  },
});

// Helper to get the start of the week (Monday) from a timestamp
function getStartOfWeek(timestamp: number): number {
  const date = new Date(timestamp);
  const day = date.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Monday start
  const startOfWeek = new Date(date.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0);
  return startOfWeek.getTime();
}

export const getUsersByWeek = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    const weeklyCounts: { [key: number]: number } = {};

    for (const user of users) {
      const weekStartTimestamp = getStartOfWeek(user._creationTime);
      weeklyCounts[weekStartTimestamp] = (weeklyCounts[weekStartTimestamp] || 0) + 1;
    }

    // Convert to an array of objects for charting
    const chartData = Object.keys(weeklyCounts)
      .map((timestamp) => ({
        week: new Date(parseInt(timestamp)).toISOString().split('T')[0], // Format as YYYY-MM-DD
        count: weeklyCounts[parseInt(timestamp)],
      }))
      .sort((a, b) => new Date(a.week).getTime() - new Date(b.week).getTime()); // Sort by week

    return chartData;
  },
});
