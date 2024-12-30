import { Card } from "@/components/ui/card";
import { FileText, Users, DollarSign, ShoppingCart } from "lucide-react";

const stats = [
  {
    name: "Total Quotations",
    value: "156",
    icon: FileText,
    change: "+12.5%",
    changeType: "positive",
  },
  {
    name: "Active Customers",
    value: "42",
    icon: Users,
    change: "+5.2%",
    changeType: "positive",
  },
  {
    name: "Monthly Revenue",
    value: "$24,500",
    icon: DollarSign,
    change: "+18.2%",
    changeType: "positive",
  },
  {
    name: "Pending Orders",
    value: "8",
    icon: ShoppingCart,
    change: "-2",
    changeType: "neutral",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your WireMesh Pro dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.name}
                  </p>
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                </div>
                <div className="rounded-full bg-primary/10 p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground"> vs last month</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;