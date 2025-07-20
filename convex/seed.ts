import { internalMutation } from "./_generated/server";

export default internalMutation({
  handler: async ({ db }) => {
    await db.insert("groceries", { name: "Apples", quantity: 5 });
    await db.insert("groceries", { name: "Milk", quantity: 1 });
    await db.insert("groceries", { name: "Bread", quantity: 1 });
  },
});