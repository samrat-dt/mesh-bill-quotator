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
import { CalculationInput, calculateQuotation } from "@/utils/quotationCalculator";

const WIRE_DIAMETERS = ["4", "6", "8", "10", "12"];
const OPENINGS = ["25", "50", "75", "100"];

interface QuotationFormProps {
  onCalculate: (result: { weight: number; price: number }) => void;
}

export const QuotationForm = ({ onCalculate }: QuotationFormProps) => {
  const form = useForm<CalculationInput>({
    defaultValues: {
      length: 0,
      breadth: 0,
      wireDiameter: "4",
      opening: "50",
      hasClamp: false,
    },
  });

  const handleCalculate = (data: CalculationInput) => {
    const result = calculateQuotation(data);
    onCalculate(result);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCalculate)} className="space-y-4">
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                <Toggle pressed={field.value} onPressedChange={field.onChange}>
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
  );
};