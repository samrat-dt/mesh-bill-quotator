import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, DollarSign, Plus, FileUp } from "lucide-react";
import { mockQuotations, mockCustomers, mockSalesMetrics, getQuotationStats } from '@/lib/mock-data';

const Dashboard = () => {
  const quotationStats = getQuotationStats();
  const recentQuotations = mockQuotations.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your WireMesh Pro dashboard
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/quotations/new">
              <Plus className="mr-2" />
              Create Quotation
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/billing">
              <FileUp className="mr-2" />
              View Bills
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quotations</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockQuotations.length}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {quotationStats.pending} Pending • {quotationStats.approved} Approved • {quotationStats.accepted} Accepted
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockCustomers.length}</div>
            <div className="text-xs text-muted-foreground mt-1">
              Active accounts
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${mockSalesMetrics.totalRevenue.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Avg. order ${mockSalesMetrics.averageOrderValue.toFixed(2)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockSalesMetrics.conversionRate}%
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Quotes to sales
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Quotations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Customer
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Date
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Amount
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentQuotations.map((quote) => (
                    <tr key={quote.id} className="border-b">
                      <td className="p-4 align-middle">{quote.customerName}</td>
                      <td className="p-4 align-middle">{quote.date}</td>
                      <td className="p-4 align-middle">
                        ${quote.totalPrice.toFixed(2)}
                      </td>
                      <td className="p-4 align-middle">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${quote.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          quote.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                          quote.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'}`}>
                          {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;