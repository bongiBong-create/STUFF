import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/reducers/productsSlice";
import { getCategories } from "../../store/reducers/categoriesSlice";

export const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(5));
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Header />
      <main className="main container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
