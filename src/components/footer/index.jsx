import { clsx } from "clsx";
import { Logo } from "../ui/logo";
import { Icon } from "../ui/icon";

import styles from "./index.module.css";

export const Footer = () => {
  return (
    <footer className={clsx("container", styles.footer)}>
      <div className={clsx(styles.footer__inner, "component")}>
        <Logo />
        <p className={styles.footer__dev}>
          Developed by <span className="accent">BongiBongCreate</span>
        </p>
        <div className="footer__socials">
          <ul className={styles["footer__socials-list"]}>
            <li className="footer__socials-list__item">
              <a href="/" className={styles["footer__socials-list__link"]}>
                <Icon icon="youtube" />
              </a>
            </li>
            <li className="footer__socials-list__item">
              <a href="/" className={styles["footer__socials-list__link"]}>
                <Icon icon="facebook" />
              </a>
            </li>
            <li className="footer__socials-list__item">
              <a href="/" className={styles["footer__socials-list__link"]}>
                <Icon icon="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
