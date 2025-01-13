import { Link } from "react-router-dom";

import styles from "./index.module.css";

export const Logo = () => {
  return (
    <Link to="/">
      <h2 className={styles.logo}>
        <span>$</span>STUFF
      </h2>
    </Link>
  );
};
