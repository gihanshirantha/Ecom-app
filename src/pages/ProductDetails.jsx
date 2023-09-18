import React,{useContext} from 'react';
import  {useParams} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';
import {ProductContext} from '../contexts/ProductContext'


const ProductDetails = () => {

    const {id}=useParams();
    const{products} = useContext(ProductContext);
    const {addToCart}= useContext(CartContext);

     const Products=products.find((item)=>{
      return item.id===parseInt(id);
     });

     if(!Products){
      return <section className='h-screen flex items-center'>Loading...</section>
     }


  return <div>Product Details Page</div>;
};

export default ProductDetails;
