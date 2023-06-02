export type OrderStatus =
  | "Confirmed"
  | "Delivered"
  | "Refund Completed"
  | "Pending"
  | "";

export type Order = {
  [index: string]: any;
  id: number;
  logo: string;
  brand_name: string;
  status: OrderStatus;
  item: string;
  quantity: number;
  amount: number;
  placed_on: string;
};
