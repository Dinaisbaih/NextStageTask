import React from "react";
import {
  BreedTitle,
  CardImage,
  CardStyle,
  DescriptionTitle,
  NameTitle,
  Wrapper,
} from "./styles";

const CatCard = ({ cat }) => {
  return (
    <CardStyle activeOpacity={1}>
      <CardImage
        source={{
          uri: cat?.image,
        }}
      />
      <Wrapper>
        <NameTitle> {cat?.name}</NameTitle>
        <BreedTitle> {cat?.breed}</BreedTitle>
        <DescriptionTitle> {cat?.description}</DescriptionTitle>
      </Wrapper>
    </CardStyle>
  );
};

export default CatCard;
