/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";

type FilterValues = {
    min: number;
    max: number;
}

export default function ListingBody() {

    const [product, setProduct] = useState<ProductDTO[]>([]);

    const [filterValues, setFilterValues] = useState<FilterValues>({
        min: 0,
        max: Number.MAX_VALUE
    });

    useEffect(() => {

      setProduct(productService.findByPrice(filterValues.min, filterValues.max));
    }, [filterValues]);

  return (
    <>
      <section>
        <FilterCard onFilter={undefined} />
      </section>
      <section>
      {
          product.map((product) => (
          <ListingCard key={product.id} 
          product={product} />))
        }
      </section>
    </>
  );
}
