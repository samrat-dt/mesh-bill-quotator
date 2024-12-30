import { useState } from "react";
import { QuotationForm } from "@/components/quotations/QuotationForm";
import { QuotationResults } from "@/components/quotations/QuotationResults";

const NewQuotation = () => {
  const [calculatedValues, setCalculatedValues] = useState({
    weight: 0,
    price: 0,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">New Quotation</h1>
        <p className="text-muted-foreground">Calculate and create a new quotation</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <QuotationForm onCalculate={setCalculatedValues} />
        <QuotationResults {...calculatedValues} />
      </div>
    </div>
  );
};

export default NewQuotation;