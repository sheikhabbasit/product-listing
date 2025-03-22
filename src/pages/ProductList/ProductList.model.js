import { useDispatch } from "react-redux";
import { addProducts } from "../../store/slices/productsSlice";

export const useProductListModel = () => {
  const dispatch = useDispatch();
  const getProductList = async () => {
    try {
      const productsResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/products?limit=20`
      );
      const products = await productsResponse.json();
      return dispatch(addProducts(products));
    } catch (error) {
      console.log(error);
    }
  };
  return { getProductList };
};
