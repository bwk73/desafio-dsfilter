/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";
import { ProductCounter } from "../../utils/context-product";

type FilterValues = {
    min: number;
    max: number;
}

export default function ListingBody() {

    const [product, setProduct] = useState<ProductDTO[]>([]);

    const {setProductCounter} = useContext(ProductCounter);

    const [filterValues, setFilterValues] = useState<FilterValues>({
        min: 0,
        max: Number.MAX_VALUE
    });

    useEffect(() => {

      setProduct(productService.findByPrice(filterValues.min, filterValues.max));
      setProductCounter(
        productService.findByPrice(filterValues.min, filterValues.max).length);
    }, [filterValues]);

    function handleFilter(min: number, max: number) {
      setFilterValues({...filterValues, min: min, max: max});
    }

  return (
    <>
      <section>
        <FilterCard onFilter={handleFilter} />
      </section>
      <section className="dsf-lc-container dsf-mb20">
      {
          product.map((product) => (
          <ListingCard  key={product.id} 
          product={product} />))
        }
      </section>
    </>
  );
}
