import { ProductLayout } from "@/components/product-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";

export default function SalesPage() {
  const salesData = [
    { id: 1, item: "Premium Plan", amount: "$49.00", date: "2025-07-19" },
    { id: 2, item: "Basic Plan", amount: "$19.00", date: "2025-07-18" },
    { id: 3, item: "Enterprise Add-on", amount: "$299.00", date: "2025-07-17" },
    { id: 4, item: "Premium Plan", amount: "$49.00", date: "2025-07-16" },
  ];

  return (
    <ProductLayout title="Sales">
      <h2 className="text-3xl font-bold mb-6">Recent Sales Activity</h2>
      <div className="grid gap-4">
        {salesData.map((sale) => (
          <Card key={sale.id}>
            <CardHeader>
              <CardTitle>{sale.item}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-2xl font-bold">{sale.amount}</p>
              <p className="text-sm text-muted-foreground">{sale.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ProductLayout>
  );
}