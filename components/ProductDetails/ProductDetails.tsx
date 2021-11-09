import React from "react";

export interface TProduct {
  articul: string;
  id: number;
  image: {
    url: string;
  };
  price: number;
  slug: string;
  specialPrice: number;
  title: string;
}

interface TProps extends TProduct {}

const ProductDetails: React.FC<TProps> = () => <div>ProductDetails</div>;

export { ProductDetails };
