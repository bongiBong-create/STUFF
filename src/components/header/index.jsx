import clsx from "clsx";
import { Link } from "react-router-dom";

import { Icons } from "../icon";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={clsx(styles.header, "container")}>
      <div className={styles.header__logo}>
        <a href="/" className={clsx("logo")}>
          <Icons icon="logo" />
        </a>
      </div>
      <div className={styles.header__content}>
        <div className={styles.user}>
          <div className={styles.user__avatar}>
            <Icons icon="avatar" />
          </div>
          <p className={styles.user__name}>Bongi Bong</p>
        </div>
        <div className={styles.search}>
          <input
            className={clsx(styles.search__input, "input")}
            type="text"
            placeholder="Search for anything..."
          />
        </div>
        <nav className={styles.nav}>
          <Link className={clsx("link")}>
            <Icons icon="favorite" />
          </Link>
          <Link className={clsx("link")} to="/cart">
            <Icons icon="cart" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
