import { Categories } from "../../components/categories";
import { Hero } from "../../components/hero";

import styles from "./index.module.css";

export const Home = () => {
  return (
    <section className={styles.home}>
      <Categories />
      <Hero />
    </section>
  );
};
