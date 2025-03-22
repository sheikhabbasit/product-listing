import React from "react";
import { Route, Routes as ReactRouter } from "react-router";
import ProductList from "../ProductList/ProductList";
import Product from "../Product/Product";

function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:productId" element={<Product />} />
    </ReactRouter>
  );
}

export default Routes;
