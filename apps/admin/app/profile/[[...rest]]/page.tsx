'use client'

import { AdminLayout } from "@/components/admin-layout";
import { AdminPageLayout } from "@/components/admin-page-layout";
import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <AdminLayout>
      <AdminPageLayout>
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <UserProfile />
      </AdminPageLayout>
    </AdminLayout>
  );
}
