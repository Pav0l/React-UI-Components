import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div>
      <span className="title-primary">Lambda School</span>
      <span className="title-secondary"> @LambdaSchool</span>
      <span className="title-secondary"> · 26 jan</span>
    </div>
  );
}

export default HeaderTitle;