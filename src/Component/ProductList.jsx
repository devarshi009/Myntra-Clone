import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/action";
import ProductCard from "./ProductCard";
import styles from "../Styles/ProductList.module.css"
import { useLocation } from "react-router-dom";
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  
  console.log(products);
  useEffect(() => {
    dispatch(getProducts);
  }, []);
  return (
    <div className={styles.container}>
      {products.length > 0 &&
        products.map((el)=> {
            return <ProductCard key={el.id} product={el} id={el.id} />;
          
        })}
    </div>
  );
};

export default ProductList;
