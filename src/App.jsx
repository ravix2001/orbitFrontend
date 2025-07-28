import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import ProductDetails from "./pages/ProductDetails";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/category" element={<Category />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
