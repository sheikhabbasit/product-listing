import React from "react";
import { useProductController } from "./Product.controller";
import styles from "./Product.module.css";

function Product() {
  const {
    rate,
    count,
    image,
    title,
    description,
    price,
    category,
    navigateToRoute,
  } = useProductController();

  return (
    <div className={styles.container}>
      <h1>
        <span onClick={navigateToRoute} className={styles.back}>
          ←
        </span>
        Product Details
      </h1>
      <div className={styles.product}>
        <div className={styles["product-image"]}>
          <img src={image} className="img" alt={title} />
        </div>
        <div className={styles["product-info"]}>
          <h2 className={styles["product-title"]}>{title}</h2>
          <p className={styles["product-description"]}>{description}</p>

          <p className={styles["product-price"]}>
            <strong>Price:</strong> ${price}
          </p>
          <p className={styles["product-category"]}>
            <strong>Category:</strong> {category}
          </p>
          <p className={styles["product-rating"]}>
            <strong>Rating:</strong> {rate} ({count})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
