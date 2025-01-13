import clsx from "clsx";
import styles from "./index.module.css";

import img from "../../assets/back-sale.jpg";

import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <section className="banner">
      <div className={clsx(styles.body, "component")}>
        <div className={styles.info}>
          <h2 className={styles.name}>NEW YEAR</h2>
          <h3 className={styles.action}>SALE</h3>
          <Button classname="shop">See more</Button>
        </div>
        <div className={styles.img__box}>
          <p className={styles.text}>
            save up to <span className="accent">50%</span> off
          </p>
          <img
            width={637}
            height={570}
            className={styles.img}
            src={img}
            alt="sale"
          />
        </div>
      </div>
    </section>
  );
};
