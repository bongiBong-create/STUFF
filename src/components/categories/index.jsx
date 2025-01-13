import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./index.module.css";

export const Categories = () => {
  const list = useSelector((state) => state.categories.list);
  const categories = list.slice(0, 5);

  return (
    <section className={clsx(styles.categories)}>
      <div className={clsx(styles.inner, "component container")}>
        <h2
          className={clsx(styles["categories-title"], "title-medium centered")}
        >
          Worth Seeing
        </h2>

        <ul className={styles.list}>
          {categories.map(({ id, name, image }) => (
            <li className={styles.item} key={id}>
              <Link to={`/categories/${id}`} key={id}>
                <img className={styles.img} src={image} alt={name} />
                <h3
                  style={{ marginBottom: 0 }}
                  className="title-medium centered"
                >
                  {name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
