export interface CalculationInput {
  length: number;
  breadth: number;
  wireDiameter: string;
  opening: string;
  hasClamp: boolean;
}

export interface CalculationResult {
  weight: number;
  price: number;
}

// Simulated density values based on wire diameter (kg/m²)
const getDensity = (diameter: string): number => {
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
const getRatePerKg = (diameter: string): number => {
  const rateMap: { [key: string]: number } = {
    "4": 80,
    "6": 85,
    "8": 90,
    "10": 95,
    "12": 100,
  };
  return rateMap[diameter] || 85;
};

export const calculateQuotation = (input: CalculationInput): CalculationResult => {
  const density = getDensity(input.wireDiameter);
  const weight = input.length * input.breadth * density;
  const ratePerKg = getRatePerKg(input.wireDiameter);
  const basePrice = weight * ratePerKg;
  const clampPrice = input.hasClamp ? basePrice * 0.1 : 0; // 10% extra for clamp
  
  return {
    weight: Number(weight.toFixed(2)),
    price: Number((basePrice + clampPrice).toFixed(2)),
  };
};