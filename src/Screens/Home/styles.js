import styled from "styled-components/native";

export const MainContainer = styled.View`
  flex: 1;
  background-color: white;
`;
export const ListHeaderWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 5px 20px;
  align-items: center;
`;
export const IconView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardView = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
  margin: 35px 20px 0px;
`;
export const EditText = styled.Text`
  color: blue;
`;
export const DeleteText = styled.Text`
  color: red;
`;

export const ModalContainer = styled.View`
  background-color: white;
  width: 100%;
  border-radius: 15px;
  padding: 15px;
`;

export const TextInputStyle = styled.TextInput`
  border-width: 1px;
  padding: 12px;
  border-radius: 5px;
  border-color: gray;
  margin-top: 15px;
`;

export const TextInputWrapper = styled.View`
  margin-top: 20px;
`;

export const CardImage = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 25px;
  align-self: center;
  margin-top: 10px;
`;

export const SaveButtonStyle = styled.Button`
  border-width: 1px;
`;

export const ButtonWrapper = styled.View`
  width: 85px;
  height: 40px;
  border-width: 1px;
  border-radius: 10px;
  background-color: white;
  margin-top: 30px;
  align-self: center;
`;
