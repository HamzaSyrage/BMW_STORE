import React from "react";
import { Car } from "@/types";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface ProductItemProps {
  car: Car;
}

const ProductItem: React.FC<ProductItemProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{car.name}</h3>
        <p className="text-xl font-semibold text-blue-600">{car.price}</p>
        <NavLink to={`/products/${car.id}`}>
          <Button className="mt-4 w-full cursor-pointer">View Details</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductItem;
