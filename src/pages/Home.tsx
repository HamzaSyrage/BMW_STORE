import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Removed CarouselNext and CarouselPrevious
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import Layout from "@/components/Layout"; // Assuming Layout is a component

interface Car {
  id: number;
  name: string;
  image: string;
  price: string;
}

const cars: Car[] = [
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
];

const featuredCars: Car[] = [
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

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cars.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-bold text-center mb-6">
        Welcome to BMW STORE
      </h2>
      <p className="text-center mb-4">Your destination for the best cars.</p>
      {/* Auto Sliding Carousel */}
      <div className="relative w-full max-w-3xl mx-auto">
        <Carousel>
          <CarouselContent
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cars.map((car) => (
              <CarouselItem
                key={car.id}
                className="flex-none w-full h-80 md:h-96 relative group"
              >
                <Card className="relative p-0 overflow-hidden rounded-lg shadow-lg w-full h-full">
                  <CardContent className="p-0 w-full h-full">
                    {/* Car Image */}
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Overlay with name and price (visible on hover) */}
                    <div className="absolute inset-0 bg-[#000000aa] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-3xl font-semibold">{car.name}</h3>
                        <p className="text-xl font-semibold text-blue-600">
                          {car.price}
                        </p>
                        <NavLink to={`/products/${car.id}`}>
                          <Button className="mt-4 px-6 py-2 cursor-pointer">
                            View Details
                          </Button>
                        </NavLink>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Top Models Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Top Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              className="relative p-0 overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <CardContent className="p-0 relative w-full h-full">
                <div className="w-full h-full relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <div className="text-center text-white p-4">
                    <h3 className="text-2xl font-semibold">{car.name}</h3>
                    <p className="text-xl font-medium mt-2">{car.price}</p>
                    <Link to={`/products/${car.id}`}>
                      <Button className="cursor-pointer mt-4 px-6 py-2 bg-white text-black hover:text-white">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Find Your Perfect Car</h2>
        <p className="mb-6">
          Explore our collection of high-quality vehicles or get in touch with
          us for inquiries.
        </p>
        <div className="flex justify-center gap-4">
          <NavLink to="/products">
            <Button className="px-6 py-2 text-lg cursor-pointer">
              View Products
            </Button>
          </NavLink>
          <NavLink to="/contact">
            <Button
              className="px-6 py-2 text-lg cursor-pointer"
              variant="outline"
            >
              Contact Us
            </Button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
