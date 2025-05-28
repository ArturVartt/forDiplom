import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/header/header";
import MainContent from "./components/main-content/main-content";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Cart />
      </>
    </CartProvider>
  );
}

export default App;
