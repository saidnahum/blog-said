import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import menu from '../assets/img/menu-sharp.svg';
import closeMenu from '../assets/img/closeMenu.svg';


const Navbar = () => {

   const [showMenu, setShowMenu] = useState(false);

   const showHideMenu = () => {
      setShowMenu(!showMenu);
   }

   return (
      <nav>
         Navbar
      </nav>
   )
}

export default Navbar;
