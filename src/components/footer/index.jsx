import { clsx } from "clsx";
import { Icons } from "../icon";

import styles from "./index.module.css";

export const Footer = () => {
  return (
    <footer className={clsx("container", styles.footer)}>
      <div className={clsx(styles.footer__inner, "component")}>
        <a href="/" className={clsx(styles.header__logo, "logo")}>
          <Icons icon="logo" />
        </a>
        <p className={styles.footer__dev}>
          Developed by{" "}
          <span className={styles["footer__dev-name"]}>BongiBongCreate</span>
        </p>
        <div className="footer__socials">
          <ul className={styles["footer__socials-list"]}>
            <li className="footer__socials-list__item">
              <a href="/" className={styles["footer__socials-list__link"]}>
                <Icons icon="youtube" />
              </a>
            </li>
            <li className="footer__socials-list__item">
              <a href="/" className={styles["footer__socials-list__link"]}>
                <Icons icon="facebook" />
              </a>
            </li>
            <li className="footer__socials-list__item">
              <a href="/" className={styles["footer__socials-list__link"]}>
                <Icons icon="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
