import clsx from "clsx";

import styles from "./index.module.css";

export const Button = ({ classname, children }) => {
  const style = classname === "shop" ? clsx(styles.shop, "button") : "button";

  return <button className={style}>{children}</button>;
};
