import { ReduxState, Record, Identifier } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
  theme: ThemeName;
}

export interface Category extends Record {
  name: string;
}

export interface Product extends Record {
  category_id: Identifier;
  description: string;
  height: number;
  image: string;
  price: number;
  reference: string;
  stock: number;
  thumbnail: string;
  width: number;
}

export interface Location extends Record {
  _id:string;
  name:string;
  tel:string;
  address_line1:string;
  address_line2:string;
  city:string;
  pos_lon:number;
  pos_lat:number;
  type:string
}

export interface Customer extends Record {
  first_name: string;
  last_name: string;
  address: string;
  stateAbbr: string;
  city: string;
  zipcode: string;
  avatar: string;
  birthday: string;
  first_seen: string;
  last_seen: string;
  has_ordered: boolean;
  latest_purchase: string;
  has_newsletter: boolean;
  groups: string[];
  nb_commands: number;
  total_spent: number;
}

export type OrderStatus = 'ordered' | 'delivered' | 'cancelled';

export interface Order extends Record {
  status: OrderStatus;
  basket: BasketItem[];
  date: Date;
  total: number;
}

export interface BasketItem {
  product_id: Identifier;
  quantity: number;
}

export interface Invoice extends Record { }

export type ReviewStatus = 'accepted' | 'pending' | 'rejected';

export interface Review extends Record {
  date: Date;
  status: ReviewStatus;
  customer_id: Identifier;
  product_id: Identifier;
}

declare global {
  interface Window {
    restServer: any;
  }
}

export interface Happening extends Record {
  title: string;
  short_desciption: string;
  long_description: string;
  images: {
    corver: string;
    thumb: string;
  };
  featured: boolean;
  gallery: [
    {
      caption: string;
      url: string;
    },
  ];
  category: string[];
  tags: string[];
  order: number;
  locations: string[];
  slug: string;
  price: {
    membership: {
      value: number;
      stripe: string;
    };
    non_membership: {
      value: number;
      stripe: string;
    };
  };
  start_time: Date;
  repeat: {
    recurrance: string;
    separation_count: number;
    day_of_week: number[];
    day_of_month: number[];
    end_date: boolean;
    occurences: [
      {
        date: Date;
        title: string;
        desciption: string;
      },
    ];
  };
}
