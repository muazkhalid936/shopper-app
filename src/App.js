import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCatergory from "./pages/ShopCatergory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Men" element={<ShopCatergory banner={men_banner} category="men" />} />
          <Route path="/Women" element={<ShopCatergory banner={women_banner} category="women" />} />
          <Route path="/Kids" element={<ShopCatergory  banner={kid_banner} category="kid" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/Cart" element={<Cart />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
