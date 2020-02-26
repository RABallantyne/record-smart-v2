import React, { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNav = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <span onClick={toggleNav}>MENU</span>

      <div>
        <div
          className='navBar'
          style={openMenu ? { width: '200px' } : { width: '0' }}
        >
          <a href='javascript:void(0)' onClick={toggleNav}>
            X
          </a>
          <div className='navLinks'>
            <h1> RecordSmart </h1>
            <div className='nav-menu'>
              <a href='#'>projects</a>
              <a href='#'>friends</a>
              <a href='#'>community</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
