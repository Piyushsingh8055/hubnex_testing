import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './AdminNavbar.css';
import SidebarData from './SidebarData';
import { IconContext } from 'react-icons';

function AdminNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                {/* <AiIcons.AiOutlineClose /> */}
              </Link>
                <Link  className=' flex gap-2 items-center'>
            <img src={logo} alt='Logo' width={20} height={20}/>
            <span className=' text-white font-bold text-xl'>hubnex </span>
          </Link>
          
            </li><br />
            <SidebarData/>
              
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminNavbar;
