import Card from "../../components/Card/Card";
import { useProductListController } from "./ProductList.controller";
import styles from "./ProductList.module.css";

function ProductList() {
  const { products, navigateToRoute, searchTerm, setSearchTerm, handleSearch } =
    useProductListController();

  return (
    <div className={styles.container}>
      <h1>Products List</h1>
      <form className={styles.searchForm}>
        <label htmlFor="search">Search:</label>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search by title..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </form>
      <div className={styles.ProductList}>
        {products?.map((product) => {
          return (
            <Card onClick={() => navigateToRoute(product?.id)}>
              <img
                src={product?.image}
                alt={product?.title}
                className={styles["card-img-top"]}
              />
              <div className={styles["card-body"]}>
                <h5 className={styles["card-title"]}>{product?.title}</h5>
                <p className={styles["card-text"]}>
                  {product?.description?.slice(0, 100) + "..."}
                </p>
                <p className={styles["card-text"]}>
                  <strong>Category:</strong> {product?.category}
                </p>
                <p className={styles["card-text"]}>
                  <strong>Price:</strong> ${product?.price}
                </p>
                <p className={styles["card-text"]}>
                  <strong>Rating:</strong> {product?.rating?.rate} (
                  {product?.rating?.count})
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
