import React from 'react';

export default function Navbar() {
  const openNav = () => {
    document.querySelector('.navBar').style.width = '250px';
  };
  const closeNav = () => {
    document.querySelector('.navBar').style.width = '0';
  };
  return (
    <>
      <span onClick={openNav}>open</span>
      <div className='navBar'>
        <div className='navLinks'>
          <a href='javascript:void(0)' className='closeBtn' onClick={closeNav}>
            close
          </a>
          <h1> RecordSmart </h1>
          <div className='nav-menu'>
            <a href='#'>projects</a>
            <a href='#'>friends</a>
            <a href='#'>community</a>
          </div>
        </div>
      </div>
    </>
  );
}
