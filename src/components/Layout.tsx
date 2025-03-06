import React, { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-neutral-900">
      <nav className="p-4 bg-neutral-800 text-white shadow-md">
        <div className="container mx-auto flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">BMW STORE</h1>
          </Link>
          <div className="flex gap-8 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition hover:text-neutral-400 px-2 py-1 rounded-lg ${
                  isActive
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `transition hover:text-neutral-400 px-2 py-1 rounded-lg ${
                  isActive
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-300"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition hover:text-neutral-400 px-2 py-1 rounded-lg ${
                  isActive
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-300"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="p-6 flex-grow container mx-auto">{children}</main>

      <footer className="p-4 bg-neutral-800 text-white text-center text-lg">
        &copy; 2025 BMW STORE - All Rights Reserved
      </footer>
    </div>
  );
};

export default Layout;
