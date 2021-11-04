import React from "react";

import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from "./collection-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title as="a" href={`shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
