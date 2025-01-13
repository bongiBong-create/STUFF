import clsx from "clsx";
import { Link } from "react-router-dom";

import { Logo } from "../ui/logo";
import { Icon } from "../ui/icon";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={clsx(styles.header, "container")}>
      <div className={styles.header__logo}>
        <Logo />
      </div>

      <div className={styles.header__content}>
        <div className={styles.user}>
          <div className={styles.user__avatar}>
            <Icon icon="avatar" />
          </div>
          <p className={styles.user__name}>Bongi Bong</p>
        </div>

        <div className={styles.search}>
          <input
            className={clsx(styles.search__input, "input")}
            type="search"
            placeholder="Search for anything..."
          />
        </div>

        <nav className={styles.nav}>
          <Link to="/" className={clsx("link")}>
            <Icon icon="favorite" />
          </Link>
          <Link className={clsx("link")} to="/cart">
            <Icon icon="cart" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
