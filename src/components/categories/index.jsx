import clsx from "clsx";
import { Button } from "../ui/button";

import styles from "./index.module.css";

export const Categories = () => {
  const btns = [
    { id: Date.now(), category: "Computers" },
    { id: Date.now(), category: "Clothes" },
    { id: Date.now(), category: "Shoes" },
    { id: Date.now(), category: "Furniture" },
    { id: Date.now(), category: "Cosmetics" },
    { id: Date.now(), category: "Travel" },
    { id: Date.now(), category: "Automotive" },
  ];

  return (
    <aside className={clsx(styles.categories, "component")}>
      <h2
        className={clsx(
          "title-medium categories__title",
          styles.categories__title
        )}
      >
        CATEGORIES
      </h2>
      <nav className={styles.categories__menu}>
        <ul className={styles.categories__list}>
          {btns.map((btn) => (
            <li className={styles.categories__item} key={btn.id}>
              <Button category={btn.category} />
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.categories__extra}>
        <div className="categories__extra-help">Help</div>
        <div className="categories__extra-terms">Terms & Conditions</div>
      </div>
    </aside>
  );
};
