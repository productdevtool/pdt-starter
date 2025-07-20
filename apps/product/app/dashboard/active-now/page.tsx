import { ProductLayout } from "@/components/product-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";

export default function ActiveNowPage() {
  const activeUsers = [
    { id: 1, name: "Alice", avatar: "/avatars/avatar-1.png" },
    { id: 2, name: "Bob", avatar: "/avatars/avatar-2.png" },
    { id: 3, name: "Charlie", avatar: "/avatars/avatar-3.png" },
    { id: 4, name: "David", avatar: "/avatars/avatar-4.png" },
    { id: 5, name: "Eve", avatar: "/avatars/avatar-5.png" },
  ];

  return (
    <ProductLayout title="Active Now">
      <h2 className="text-3xl font-bold mb-6">Users Currently Active</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {activeUsers.map((user) => (
          <div key={user.id} className="flex flex-col items-center space-y-2">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium">{user.name}</p>
          </div>
        ))}
      </div>
    </ProductLayout>
  );
}