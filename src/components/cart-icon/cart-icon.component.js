import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from "./cart-icon.styles";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartHiddenHandler = () => dispatch(toggleCartHidden());

  return (
    <CartIconContainer onClick={toggleCartHiddenHandler}>
      <ShoppingIconStyle />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
