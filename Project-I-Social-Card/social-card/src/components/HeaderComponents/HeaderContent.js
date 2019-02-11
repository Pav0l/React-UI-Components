import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderText from './HeaderText';

const HeaderContent = () => {
  return (
    <div className='header-content'>
      <HeaderTitle />
      <HeaderText />
    </div>
  );
}

export default HeaderContent;