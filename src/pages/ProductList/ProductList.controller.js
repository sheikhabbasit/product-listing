import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useProductListModel } from "./ProductList.model";
import { useNavigate } from "react-router";

export const useProductListController = () => {
  const navigate = useNavigate();
  const { getProductList } = useProductListModel();
  const productsList = useSelector((app) => app.products.list);

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredProducts = productsList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    getProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(productsList);

  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);

  const navigateToRoute = (id) => {
    navigate(`/product/${id}`);
  };
  return { products, navigateToRoute, searchTerm, setSearchTerm, handleSearch };
};
