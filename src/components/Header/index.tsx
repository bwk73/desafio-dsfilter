import { useContext } from "react";
import "./styles.css";
import { ProductCounter } from "../../utils/context-product";


export default function Header() {
   
  const {productCounter} = useContext(ProductCounter);

  return (
    <nav>
        <h1>DSFilter</h1>
        <h4>{productCounter} produto(s)</h4>
    </nav>
  );
}
