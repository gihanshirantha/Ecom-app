import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {BsForwardFill} from 'react-icons/bs'
import {BsFillTrash3Fill} from 'react-icons/bs'

import CartItem from './CartItem'
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const {isOpen,handleClose}=useContext(SidebarContext);
  return (<div className='w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]'>
    Sidebar</div>);
};

export default Sidebar;
