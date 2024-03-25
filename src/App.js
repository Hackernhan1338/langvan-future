import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import BrandsProducts from "./Components/Brands/BrandsProducts";
import Feedback from "./Components/Feedback/Feedback";
import Customer from "./Components/Customer/Customer";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "react-bootstrap";
import ShowProduct from "./Components/Products/ShowProduct";
import MainProduct from "./Components/Products/MainProduct";
import FilterProduct from "./Components/Categories/FilterProduct";
import MainMenu from "./Components/MainMenu/MainMenu";
import MainGallery from "./Components/Gallery/MainGallery";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Components/Context/CartContext";

function App() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [ProQuantity, setProQuantity] = useState(1);

  const HandleCart = (Data, quantity) => {
    setCart([
      ...cart,
      {
        Data,
        quantity,
      },
    ]);
  };
  const HandleQuantity = (icon, id) => {
    const updateCart = [...cart];
    const ProIndex = updateCart.findIndex((x) => x.Data.ID === id);
    if (icon === "Minus") {
      if (updateCart[ProIndex].quantity >= 1) {
        updateCart[ProIndex].quantity -= 1;
        setCart(updateCart);
      } else {
        updateCart[ProIndex].quantity = 0;
        setCart(updateCart);
      }
    } else if (icon === "Plus") {
      updateCart[ProIndex].quantity += 1;
      setCart(updateCart);
    }
  };

  return (
    <div className="App">
      <div className="sec1">
        <Header CartCount={cart.length} />
      </div>
      <div>
        <MainMenu />
      </div>
      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage Add={HandleCart} />} />
            <Route
              path="/products"
              element={<MainProduct Add={HandleCart} />}
            />
            <Route
              path="/Category/:id"
              element={<FilterProduct Add={HandleCart} />}
            />

            <Route
              path="/brands/:id"
              element={<BrandsProducts Add={HandleCart} />}
            />
            <Route path="/gallery" element={<MainGallery />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>

          <CartContext.Provider
            value={{
              cart,
              HandleCart,
              HandleQuantity,
              ProQuantity,
              setProQuantity,
            }}
          >
            <Routes>
              <Route path="/ShowProduct/:id" element={<ShowProduct />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </CartContext.Provider>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
