import styled from "styled-components/native";

export const CardStyle = styled.TouchableOpacity`
  width: 90%;
  background-color: white;
  border-width: 0.3px;
  flex-direction: row;
  padding: 10px;
  border-radius: 5px;
  align-self: center;
  border-color: gray;
  margin-top: 10px;
`;

export const Wrapper = styled.View`
  margin-left: 10px;
`;
export const CardImage = styled.Image`
  width: 25%;
  height: 95%;
  border-radius: 10px;
  align-self: center;
`;
export const NameTitle = styled.Text`
  color: black;
  font-size: 19px;
  margin-top: 5px;
  font-weight: bold;
`;

export const DescriptionTitle = styled.Text`
  color: black;
  font-size: 14px;
  margin-top: 5px;
`;

export const BreedTitle = styled.Text`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
