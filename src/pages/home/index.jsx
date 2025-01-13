import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredByPrice } from "../../store/reducers/productsSlice";

import { Banner } from "../../components/banner";
import { Categories } from "../../components/categories";
import { Hero } from "../../components/hero";
import { Products } from "../../components/products";
import { Sidebar } from "../../components/sidebar";

import styles from "./index.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector((state) => state.products);
  const { list } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!products.length) return;

    dispatch(filteredByPrice(100));
  }, [dispatch, products.length]);

  return (
    <>
      <section className={styles.home}>
        <Sidebar list={list} />
        <Hero />
      </section>
      <Products products={products} title="Trending" />
      <Categories list={list} />
      <Banner />
      <Products products={filteredProducts} title="Less than 100$" />
    </>
  );
};
