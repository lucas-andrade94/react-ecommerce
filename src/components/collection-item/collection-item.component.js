import React from "react";
import { connect } from "react-redux";

import {
  CollectionItemContainer,
  CollectionImage,
  CollectionFooter,
  Name,
  Price,
  Button,
} from "./collection-item.styles";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionImage imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price.toFixed(2)}</Price>
      </CollectionFooter>
      <Button inverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
