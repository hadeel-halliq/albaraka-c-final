import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTop from "./ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop/>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
