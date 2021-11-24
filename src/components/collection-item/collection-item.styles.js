import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    width: 40vw;
  }
`;

export const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 800px) {
    &:hover {
      opacity: unset;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 65%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 35%;
`;

export const Button = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;

    &:hover {
      opacity: unset;
    }
  }
`;
