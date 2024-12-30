export type QuotationStatus = 'pending' | 'approved' | 'rejected' | 'accepted';

export interface Quotation {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  status: QuotationStatus;
  length: number;
  breadth: number;
  wireDiameter: number;
  opening: number;
  hasClamp: boolean;
  weight: number;
  pricePerKg: number;
  totalPrice: number;
}

export interface Customer {
  id: string;
  name: string;
  contact: string;
  totalQuotations: number;
  lastPurchaseDate: string;
}

export interface SalesMetrics {
  totalRevenue: number;
  averageOrderValue: number;
  conversionRate: number;
}