import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/activeProductSlice";

export const useProductModel = () => {
  const dispatch = useDispatch();
  const getProductDetails = async (id) => {
    try {
      const productDetailResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${id}`
      );
      const productDetail = await productDetailResponse.json();
      return dispatch(addProduct(productDetail));
    } catch (err) {
      console.log(err);
    }
  };

  return { getProductDetails };
};
