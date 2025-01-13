import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export const Sidebar = ({ list = [] }) => {
  const sliceList = list.slice(0, 5);

  return (
    <aside className={clsx(styles.sidebar, "component")}>
      <h2 className={clsx("title-medium", styles.categories__title)}>
        CATEGORIES
      </h2>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {sliceList.map((list) => (
            <li className={styles.item} key={list.id}>
              <Link to={`/categories/${list.id}`} className="link">
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.extra}>
        <div className="categories__extra-help">Help</div>
        <div className={styles.terms}>Terms & Conditions</div>
      </div>
    </aside>
  );
};
