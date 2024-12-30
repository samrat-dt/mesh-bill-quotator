import { Customer, Quotation, SalesMetrics } from './types';

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Tata Steel',
    contact: '+91 98765 43210',
    totalQuotations: 12,
    lastPurchaseDate: '2024-02-15',
  },
  {
    id: '2',
    name: 'JSW Steel Ltd',
    contact: '+91 98765 43211',
    totalQuotations: 8,
    lastPurchaseDate: '2024-02-10',
  },
  {
    id: '3',
    name: 'Jindal Steel',
    contact: '+91 98765 43212',
    totalQuotations: 15,
    lastPurchaseDate: '2024-02-18',
  },
];

export const mockQuotations: Quotation[] = [
  {
    id: '1',
    customerId: '1',
    customerName: 'Tata Steel',
    date: '2024-02-18',
    status: 'pending',
    length: 10,
    breadth: 5,
    wireDiameter: 6,
    opening: 50,
    hasClamp: true,
    weight: 125.5,
    pricePerKg: 85,
    totalPrice: 10667.50,
  },
  {
    id: '2',
    customerId: '2',
    customerName: 'JSW Steel Ltd',
    date: '2024-02-17',
    status: 'approved',
    length: 8,
    breadth: 4,
    wireDiameter: 8,
    opening: 75,
    hasClamp: false,
    weight: 89.6,
    pricePerKg: 90,
    totalPrice: 8064.00,
  },
  {
    id: '3',
    customerId: '3',
    customerName: 'Jindal Steel',
    date: '2024-02-16',
    status: 'accepted',
    length: 15,
    breadth: 7,
    wireDiameter: 10,
    opening: 100,
    hasClamp: true,
    weight: 245.8,
    pricePerKg: 95,
    totalPrice: 23351.00,
  },
];

export const mockSalesMetrics: SalesMetrics = {
  totalRevenue: 1575000.00,
  averageOrderValue: 52500.00,
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