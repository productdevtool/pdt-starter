'use client'

import { AdminLayout } from "@/components/admin-layout";
import { AdminPageLayout } from "@/components/admin-page-layout";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function UsersPage() {
  const users = useQuery(api.users.getAdminUsers);

  if (!users) {
    return (
      <AdminLayout>
        <AdminPageLayout>
          <p>Loading users...</p>
        </AdminPageLayout>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <AdminPageLayout>
        <h1 className="text-2xl font-bold mb-4">Users Management</h1>
        <Table className="border border-gray-200">
          <TableCaption>A list of registered users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-right">Admin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium w-[100px]">{user.clerkId}</TableCell>
                <TableCell className="text-center">{user.email}</TableCell>
                <TableCell className="text-right">{user.isAdmin ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AdminPageLayout>
    </AdminLayout>
  );
}