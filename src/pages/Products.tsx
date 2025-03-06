import React from "react";
import Layout from "@/components/Layout";
import { Car } from "@/types";
import ProductItem from "@/components/ProductItem";

// Sample products data
const products: Car[] = [
  {
    id: 1,
    name: "Sedan X1",
    image: "/images/sedan-x1-1.jpg",
    price: "$25,000",
  },
  { id: 2, name: "SUV Pro", image: "/images/suv-pro-1.jpg", price: "$40,000" },
  {
    id: 3,
    name: "Coupe Z4",
    image: "/images/coupe-z4-1.jpg",
    price: "$35,000",
  },
  {
    id: 4,
    name: "Sedan X1",
    image: "/images/sedan-x1-1.jpg",
    price: "$25,000",
  },
  { id: 5, name: "SUV Pro", image: "/images/suv-pro-1.jpg", price: "$40,000" },
  {
    id: 6,
    name: "Coupe Z4",
    image: "/images/coupe-z4-1.jpg",
    price: "$35,000",
  },
];

const Product: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-center mb-6">Our Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((car) => (
          <ProductItem key={car.id} car={car} />
        ))}
      </div>
    </Layout>
  );
};

export default Product;
