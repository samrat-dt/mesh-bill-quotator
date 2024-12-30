import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";

interface QuotationFormData {
  length: number;
  breadth: number;
  wireDiameter: string;
  opening: string;
  hasClamp: boolean;
}

const WIRE_DIAMETERS = ["4", "6", "8", "10", "12"];
const OPENINGS = ["25", "50", "75", "100"];

// Simulated density values based on wire diameter (kg/m²)
const getDensity = (diameter: string) => {
  const densityMap: { [key: string]: number } = {
    "4": 0.8,
    "6": 1.2,
    "8": 1.6,
    "10": 2.0,
    "12": 2.4,
  };
  return densityMap[diameter] || 1.0;
};

// Simulated rate per kg based on wire diameter
const getRatePerKg = (diameter: string) => {
  const rateMap: { [key: string]: number } = {
    "4": 80,
    "6": 85,
    "8": 90,
    "10": 95,
    "12": 100,
  };
  return rateMap[diameter] || 85;
};

const NewQuotation = () => {
  const form = useForm<QuotationFormData>({
    defaultValues: {
      length: 0,
      breadth: 0,
      wireDiameter: "4",
      opening: "50",
      hasClamp: false,
    },
  });

  const [calculatedValues, setCalculatedValues] = useState({
    weight: 0,
    price: 0,
  });

  const calculateQuotation = (data: QuotationFormData) => {
    const density = getDensity(data.wireDiameter);
    const weight = data.length * data.breadth * density;
    const ratePerKg = getRatePerKg(data.wireDiameter);
    const basePrice = weight * ratePerKg;
    const clampPrice = data.hasClamp ? basePrice * 0.1 : 0; // 10% extra for clamp
    
    setCalculatedValues({
      weight: Number(weight.toFixed(2)),
      price: Number((basePrice + clampPrice).toFixed(2)),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">New Quotation</h1>
        <p className="text-muted-foreground">Calculate and create a new quotation</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(calculateQuotation)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="length"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Length (meters)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="breadth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Breadth (meters)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="wireDiameter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wire Diameter (mm)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select wire diameter" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {WIRE_DIAMETERS.map((diameter) => (
                        <SelectItem key={diameter} value={diameter}>
                          {diameter}mm
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="opening"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opening (mm)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select opening size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {OPENINGS.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}mm
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hasClamp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Clamp</FormLabel>
                  <FormControl>
                    <Toggle
                      pressed={field.value}
                      onPressedChange={field.onChange}
                    >
                      {field.value ? "With Clamp" : "Without Clamp"}
                    </Toggle>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Calculate
            </Button>
          </form>
        </Form>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Calculation Results</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Weight:</span>
              <span className="font-medium">{calculatedValues.weight} kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Price:</span>
              <span className="font-medium">₹{calculatedValues.price}</span>
            </div>
          </div>
          <Button className="w-full" variant="outline">
            Generate Quotation PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewQuotation;