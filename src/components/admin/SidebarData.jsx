import React, { useState } from 'react';

 const SidebarData = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    
 
     <div  className='text-white text-center'>
  
  
  <div class="dropdown">
    <button class=" dropdown btn btn-outline-light" type="link" data-toggle="dropdown">CMS
    <span class="caret"></span></button>
    <ul class="dropdown-menu dropdown-menu-right">
      <li><a href="#">Terms and Conditions</a></li>
      <li><a href="#">Privacy Policies</a></li>
      <li><a href="#">Data Protection</a></li>
    </ul>
    <br />
    <br />
    
  </div>
  
  </div>

      
    
  )
 }
export default SidebarData;