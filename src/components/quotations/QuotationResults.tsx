interface QuotationResultsProps {
  weight: number;
  price: number;
}

export const QuotationResults = ({ weight, price }: QuotationResultsProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Calculation Results</h2>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Weight:</span>
          <span className="font-medium">{weight} kg</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Price:</span>
          <span className="font-medium">₹{price}</span>
        </div>
      </div>
      <button className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
        Generate Quotation PDF
      </button>
    </div>
  );
};