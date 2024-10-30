import { StaticImageData } from "next/image";


export interface Categories {
  img: string;
  name: string;
  link: string;
}

export interface ProductDesc {
  img: string;
  name: string;
  desc: string;
  link: string;
}

export interface SubProductDesc {
  goBackLink: string;
  img: string;
  name: string;
  desc: string;
  price: number;
  features1: string;
  features2: string;
  inTheBox: InTheBox[];
  gal1: string;
  gal2: string;
  gal3: string;
  ad1: string;
  ad1Name: string;
  ad1Link: string;
  ad2: string;
  ad2Name: string;
  ad2Link: string;
  ad3: string;
  ad3Name: string;
  ad3Link: string;
}

export interface InTheBox {
  amount: string;
  item: string;
}

export interface AudiofileState {
  customerName?: string;
  mobileMenu: boolean;
  cartIsVisible: boolean;
  cart: CartItem[];
  totalQuantity: number;
  checkoutCompleteIsVisible: boolean;
  authModalIsVsible: boolean;
}

export interface CartItem {
  id: string | number;
  img: string | StaticImageData;
  name: string;
  price: number;
  quantity: number;
}

export interface FormValues {
  name: string;
  email: string;
  phone: number;
  address: string;
  zipcode: number;
  city: string;
  country: string;
  enumber: number | null | undefined;
  epin: number | null | undefined;
}
