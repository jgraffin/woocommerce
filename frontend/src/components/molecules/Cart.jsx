import React from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../../images/icon-cart.svg';

const Cart = (props) => {
  return (
    <>
      <div className="m-cart">
        <Link to="/" className="m-cart__count">
          <img src={iconCart} alt="Cart" />
          <span>{props.count}</span>
        </Link>
      </div>
    </>
  );
};

export default Cart;
