import img from "../../assets/img.jpg";

import styles from "./index.module.css";

export const ProductItem = ({ images, price, title }) => {
  return (
    <li className={styles.item}>
      <img
        width={230}
        className={styles.img}
        src={images[1] ? images[1] : img}
        alt="product"
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{title}</h3>
        <h4 className={styles.category}>Sneakers</h4>
        <div className={styles.price}>
          <div className={styles.money}>{price}$</div>
          <div className={styles.people}>19 people purchased</div>
        </div>
      </div>
    </li>
  );
};
