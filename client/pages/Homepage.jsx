import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../components/Footer";
import MenusCarousel from "../components/MenusCarousel";
import PromoCarousel from "../components/PromoCarousel";
import { useEffect } from "react";
import { fetchDataMenusMiddleware } from "../actions/actionsCreators";

function HomePage() {
  const { menus } = useSelector((state) => state.menus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataMenusMiddleware());
  }, []);

  return (
    <>
      <h1 className="text-center mt-5 fw-bold">Promo Menarik</h1>
      <PromoCarousel />
      <h1 className="my-3 mx-3 text-center fw-bold my-5">Menu</h1>
      <MenusCarousel menus={menus} />
      <FooterComponent />
    </>
  );
}

export default HomePage;
