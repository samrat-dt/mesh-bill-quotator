export interface CalculationInput {
  length: number;
  breadth: number;
  wireDiameter: string;
  opening: string;
  hasClamp: boolean;
}

// Simulated density values based on wire diameter (kg/m²)
const getDensity = (diameter: string): number => {
  const densityMap: { [key: string]: number } = {
    "4": 2.5,
    "6": 3.2,
    "8": 4.0,
    "10": 4.8,
    "12": 5.5,
  };
  return densityMap[diameter] || 3.0;
};

// Simulated rate per kg based on wire diameter (INR)
const getRatePerKg = (diameter: string): number => {
  const rateMap: { [key: string]: number } = {
    "4": 85,
    "6": 90,
    "8": 95,
    "10": 100,
    "12": 105,
  };
  return rateMap[diameter] || 90;
};

export const calculateQuotation = (input: CalculationInput) => {
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