import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Location from "./Pages/Location/Location";
import Products from "./Pages/Proudcts/Products";
import Contact from "./Pages/Contact/Contact";
import MainLayout from "./MainLayout/MainLayout";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
