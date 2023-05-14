export interface PaymentMethod {
  id: string;
  cvv: string;
  holderName: string;
  isActive: boolean;
  cardNumber: string;
}
