import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import { AiFillEye } from "react-icons/ai";

const Product = ({products}) => {

  const {id,image,category,title,price}=products;
  
  return (
    <div>
      <div className='border border-[e4e4e4] h-[300px] mb-4 relative
       overflow-hidden group transition rounded-md'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200] mx-auto flex justify-center items-center'>
            <img src={image} alt="" className='max-h-[160px] group-hover:scale-110 transition duration-300' />
          </div>
          <div>
            <div className='absolute top-6 -right-11 group-hover:right-5 bg-red-500 rounded-md p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500'  >
              <button>
                <div className='flex justify-center items-center text-white w-12 h-12'>
                  <FaPlus className='text-3xl  ' />
                </div>
              </button>
              <Link to={`/products/${id}`} className='flex justify-center items-center text-primary bg-white rounded-md w-12 h-12 '>
                <AiFillEye className='text-3xl '/>
              </Link>
            </div>
          </div>
        </div>
       </div>
       <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>{category }</div>
      <Link to={`/products/${id}`}>
      <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>$ {price}</div>
       </div>
    </div>
  );
};

export default Product;
