import clsx from "clsx";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import { ProductItem } from "../productItem";

import styles from "./index.module.css";

export const Products = ({ title, products = [] }) => {
  return (
    <section className="trending component container">
      <div className={styles.market}>
        {title && (
          <h2 className={clsx(styles["market-title"], "title-medium centered")}>
            {title}
          </h2>
        )}

        <ul className={styles.list}>
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductItem {...product} />
            </Link>
          ))}
        </ul>
        <div className="btn centered">
          <Button classname="shop">See More</Button>
        </div>
      </div>
    </section>
  );
};
