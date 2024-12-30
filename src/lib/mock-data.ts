import { Customer, Quotation, SalesMetrics } from './types';

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Acme Industries',
    contact: '+1 (555) 123-4567',
    totalQuotations: 12,
    lastPurchaseDate: '2024-02-15',
  },
  {
    id: '2',
    name: 'BuildCorp Ltd',
    contact: '+1 (555) 234-5678',
    totalQuotations: 8,
    lastPurchaseDate: '2024-02-10',
  },
  {
    id: '3',
    name: 'Steel Solutions',
    contact: '+1 (555) 345-6789',
    totalQuotations: 15,
    lastPurchaseDate: '2024-02-18',
  },
];

export const mockQuotations: Quotation[] = [
  {
    id: '1',
    customerId: '1',
    customerName: 'Acme Industries',
    date: '2024-02-18',
    status: 'pending',
    length: 10,
    breadth: 5,
    wireDiameter: 6,
    opening: 50,
    hasClamp: true,
    weight: 125.5,
    pricePerKg: 2.5,
    totalPrice: 313.75,
  },
  {
    id: '2',
    customerId: '2',
    customerName: 'BuildCorp Ltd',
    date: '2024-02-17',
    status: 'approved',
    length: 8,
    breadth: 4,
    wireDiameter: 8,
    opening: 75,
    hasClamp: false,
    weight: 89.6,
    pricePerKg: 2.75,
    totalPrice: 246.40,
  },
  {
    id: '3',
    customerId: '3',
    customerName: 'Steel Solutions',
    date: '2024-02-16',
    status: 'accepted',
    length: 15,
    breadth: 7,
    wireDiameter: 10,
    opening: 100,
    hasClamp: true,
    weight: 245.8,
    pricePerKg: 3.0,
    totalPrice: 737.40,
  },
];

export const mockSalesMetrics: SalesMetrics = {
  totalRevenue: 25750.00,
  averageOrderValue: 858.33,
  conversionRate: 65.4,
};

export const getQuotationStats = () => {
  const stats = {
    pending: 0,
    approved: 0,
    rejected: 0,
    accepted: 0,
  };

  mockQuotations.forEach((quote) => {
    stats[quote.status]++;
  });

  return stats;
};