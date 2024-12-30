import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface QuotationResultsProps {
  weight: number;
  price: number;
}

export const QuotationResults = ({ weight, price }: QuotationResultsProps) => {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(price);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculation Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-muted-foreground">Weight:</span>
            <span className="font-medium">{weight.toFixed(2)} kg</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-muted-foreground">Price:</span>
            <span className="font-medium">{formattedPrice}</span>
          </div>
        </div>
        <Button className="w-full" variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Generate Quotation PDF
        </Button>
      </CardContent>
    </Card>
  );
};