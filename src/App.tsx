import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    {
      path: "/products/:id",
      element: <ProductDetails />,
    },
    { path: "/contact", element: <Contact /> },
  ]);

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
