import React from "react";
import { useDispatch } from "react-redux";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImage,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.js";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItemHandler = (item) => dispatch(clearItemFromCart(item));
  const addItemHandler = (item) => dispatch(addItem(item));
  const removeItemHandler = (item) => dispatch(removeItem(item));

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt="item" />
      </CheckoutImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeItemHandler(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemHandler(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price.toFixed(2)}</Price>
      <RemoveButton onClick={() => clearItemHandler(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
