import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const {isOpen,setIsOpne} = useContext(SidebarContext);
  return <div>
    <div>Header</div>
    <div onClick={()=>setIsOpne(!isOpen)}>
      Open/close side bar
    </div>
  </div>;
};

export default Header;
