import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ProductCounter } from "./utils/context-product";

export default function App() {
  
  const [productCounter, setProductCounter] = useState<number>(0);

  return (
    <ProductCounter.Provider value={{ productCounter, setProductCounter }}>
      <header>
        <Header />
      </header>
      <main>
        <ListingBody />
      </main>
    </ProductCounter.Provider>
  );
}
