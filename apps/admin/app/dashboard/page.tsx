import { AdminLayout } from "@/components/admin-layout";
import { AdminPageLayout } from "@/components/admin-page-layout";
import { UserGrowthChart } from "@/components/user-growth-chart";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <AdminPageLayout>
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="mb-8">Welcome to the admin dashboard!</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UserGrowthChart />
        </div>
      </AdminPageLayout>
    </AdminLayout>
  );
}
