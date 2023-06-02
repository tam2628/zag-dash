import { Err, Ok, Result } from "@sniptt/monads";

const host = "http://localhost:3000";

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

export async function getOrders(): Promise<Result<Order[], string>> {
  try {
    const response = await fetch(`${host}/orders/`);
    if (response.ok) {
      const orders = (await response.json()) as Order[];
      return Ok(orders);
    }

    if (response.status === 404) {
      return Err("Orders not found");
    }
  } catch (err) {
    return Err("Something went wrong, failed to fetch orders");
  }

  return {} as any;
}
