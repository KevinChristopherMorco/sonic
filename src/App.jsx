import { BrowserRouter, Route, Routes } from "react-router-dom";
import "typeface-poppins";

import Home from "./pages/home/Home";
import Layout from "./pages/layout";
import ProductCategory from "./pages/Product/ProductCategory";
import ProductView from "./pages/Product/ProductView";

import useManageCart from "./hooks/cart/useManageCart";
import CartProvider from "./hooks/cart/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/:productCategory" element={<ProductCategory />} />
              <Route
                path="/:productCategory/:productID"
                element={<ProductView />}
              />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
