import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProductModel } from "./Product.model";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/slices/activeProductSlice";

export const useProductController = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getProductDetails } = useProductModel();
  const product = useSelector((app) => app.productDetail.product);

  useEffect(() => {
    getProductDetails(productId);
  });

  const navigateToRoute = () => {
    dispatch(removeProduct());
    navigate(-1);
  };

  return {
    ...product,
    rate: product?.rating?.rate,
    count: product?.rating?.count,
    navigateToRoute,
  };
};
