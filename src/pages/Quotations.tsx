import { Button } from "@/components/ui/button";
import { Link, Routes, Route } from "react-router-dom";
import NewQuotation from "./NewQuotation";

const QuotationsList = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Quotations</h1>
        <p className="text-muted-foreground">Manage your quotations here</p>
      </div>
      <Link to="new">
        <Button>Create New Quotation</Button>
      </Link>
    </div>
  </div>
);

const Quotations = () => {
  return (
    <Routes>
      <Route path="/" element={<QuotationsList />} />
      <Route path="new" element={<NewQuotation />} />
    </Routes>
  );
};

export default Quotations;