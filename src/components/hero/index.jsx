import clsx from "clsx";

import { Button } from "../ui/button";

import styles from "./index.module.css";

export const Hero = () => {
  return (
    <div className={clsx(styles.home, "component")}>
      <h2 className={styles.hero__title}>BIG SALE 20%</h2>
      <div className={styles.hero__extra}>
        <h3 className={clsx(styles.hero__best)}>
          the bestseller of 2022
        </h3>

        <h2 className={clsx(styles.hero__text, "title-xl")}>
          LENNON r2d2 <br /> with NVIDIA 5090 TI
        </h2>

        <Button classname="shop">Shop Now</Button>
      </div>
    </div>
  );
};
