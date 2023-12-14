import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {viewCart ? <Cart /> : <ProductList />}
      <Footer viewCart={viewCart} />
    </>
  );
}

export default App;
