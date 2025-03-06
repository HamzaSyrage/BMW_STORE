import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sedan X1",
    description: "A comfortable and efficient sedan.",
    images: ["/images/sedan-x1-1.jpg", "/images/sedan-x1-2.jpg"],
    price: "$25,000",
  },
  {
    id: 2,
    name: "SUV Pro",
    description: "A spacious and powerful SUV.",
    images: ["/images/suv-pro-1.jpg", "/images/suv-pro-2.jpg"],
    price: "$40,000",
  },
  {
    id: 3,
    name: "Coupe Z4",
    description: "A stylish and sporty coupe.",
    images: ["/images/coupe-z4-1.jpg", "/images/coupe-z4-2.jpg"],
    price: "$35,000",
  },
  {
    id: 4,
    name: "Truck Titan",
    description: "A durable and powerful truck.",
    images: ["/images/truck-titan-1.jpg", "/images/truck-titan-2.jpg"],
    price: "$50,000",
  },
  {
    id: 5,
    name: "Convertible Breeze",
    description: "A sleek convertible for sunny days.",
    images: [
      "/images/convertible-breeze-1.jpg",
      "/images/convertible-breeze-2.jpg",
    ],
    price: "$45,000",
  },
  {
    id: 6,
    name: "Electric Volt",
    description: "A modern and eco-friendly electric car.",
    images: ["/images/electric-volt-1.jpg", "/images/electric-volt-2.jpg"],
    price: "$55,000",
  },
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) {
    return (
      <Layout>
        <p className="text-center text-red-500">Product not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Carousel with indicators */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {product.images.map((image, index) => (
                  <CarouselItem key={index} className="w-full flex-none">
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600">
              {product.price}
            </p>
            <Button className="mt-4 w-full text-lg">Buy Now</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
