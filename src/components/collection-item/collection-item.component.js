import React from "react";
import { useDispatch } from "react-redux";

import {
  CollectionItemContainer,
  CollectionImage,
  CollectionFooter,
  Name,
  Price,
  Button,
} from "./collection-item.styles";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItemHandler = (item) => dispatch(addItem(item));

  return (
    <CollectionItemContainer>
      <CollectionImage imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price.toFixed(2)}</Price>
      </CollectionFooter>
      <Button inverted onClick={() => addItemHandler(item)}>
        Add to cart
      </Button>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
