import React from 'react';
import HeaderItem from './HeaderItems';

// eslint-disable-next-line react/prop-types
const Item = ({ title, link, active, ...props }) => {
  return (
    <>
      <HeaderItem title={title} link={link} active={active} {...props} />
    </>
  );
};

export default Item;
