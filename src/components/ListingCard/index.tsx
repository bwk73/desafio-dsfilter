/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  product: ProductDTO;
}

export default function ListingCard({product}: Props) {
  return (
    <>
      <div className="dsf-lc-container">
        <div className="dsf-lc-content dsf-mt20">
            <p>{product.name}</p>
            <h6>R$ {product.price.toFixed(2)}</h6>
        </div>
      </div>
    </>
  );
}
