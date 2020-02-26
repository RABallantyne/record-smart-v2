import React, { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNav = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className='nav'>
        <span onClick={toggleNav}>{openMenu ? 'CLOSE' : 'MENU'}</span>
        <div
          className='nav-bar'
          style={openMenu ? { width: '200px' } : { width: '0' }}
        >
          {/* <a href='javascript:void(0)' onClick={toggleNav}>
            X
          </a> */}
          <div className='nav-bar-links'>
            <h1> RecordSmart </h1>
            <div className='nav-bar-menu'>
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
