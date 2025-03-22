import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/activeProductSlice";

export const useProductModel = () => {
  const dispatch = useDispatch();
  const getProductDetails = async (id) => {
    try {
      const productDetailResponse = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const productDetail = await productDetailResponse.json();
      return dispatch(addProduct(productDetail));
    } catch (err) {
      console.log(err);
    }
  };

  return { getProductDetails };
};
