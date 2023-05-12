import { useState, Fragment } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import ProductsFilter from "./ProductsFilter";

const Products = (props) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  
  const filterByCategory = (category) => {
    setFilteredProducts(props.products.filter((item) => item.category === category))
  }
  
  let products

  if(filteredProducts.length > 0) {
    products = filteredProducts
  }

  if(filteredProducts.length === 0) {
    products = props.products
  }

  const loadedProducts = products.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      onAdd={props.onAdd}
    />
  ));
  
  return (
    <Fragment>
      <ProductsFilter filterByCategory={filterByCategory}/>
      <section className={classes.products}>
        <ul>{loadedProducts}</ul>
      </section>
    </Fragment>  
  );
};

export default Products;
