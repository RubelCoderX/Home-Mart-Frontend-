import { TUser } from "./user";

export type TProduct = {
  _id?: string;
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  rating: number;
  images: string;
  delay: number;
  size?: string;
};
export type CategoryType = {
  id: string;
  category: string;
  images: string;
};

export type ProductListProps = {
  products: TProduct[];
};

export type TOrder = {
  _id?: string;
  name: string;
  user: TUser;
  totalAmount: string;

  email: string;
  phone: string;
  address: string;
  paymentMethod: "cashOnDelivery" | "online-payment";
  items: TCartItems[];
};
type TCartItems = {
  _id?: string;
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  rating: number;
  images: string;
  quantity: number;
};
