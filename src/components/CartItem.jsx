import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({item}) => {
  const {id, title,image,price,amount}=item;
  return (<div className='flex'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      <div>
        <Link to={`/products/${id}`}>
        <img className='max-w-[80px]' src={image} alt="" />
        </Link>
        <div></div>
      </div>
    </div>

  </div>);
};

export default CartItem;
