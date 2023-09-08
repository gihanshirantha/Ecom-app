import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext);

  //get only 'mens' products
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filterProducts);

  return (
  <div>
    <section>
      <div className="container mx-auto">
        <div>
          {
            filterProducts.map((products)=>{
              return<div>{products.title}</div>
            })
          }
        </div>
      </div>
    </section>
  </div>);
};

export default Home;
