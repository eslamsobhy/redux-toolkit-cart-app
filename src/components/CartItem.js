import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseAmount,
  decreaseAmount,
} from "../features/cart/cartSlice";

const CartItem = ({ image, id, price, amount, title }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseAmount(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return; //to exit the function here!
            }
            dispatch(decreaseAmount(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
