import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ButtonWrapper,
  CardImage,
  CardView,
  DeleteText,
  IconView,
  MainContainer,
  ModalContainer,
  EditText,
  SaveButtonStyle,
  TextInputStyle,
  TextInputWrapper,
} from "./styles";
import CatCard from "../../Components/CatCard/index";
import EditIcon from "react-native-vector-icons/Feather";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import { SwipeListView } from "react-native-swipe-list-view";
import AddIcon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCatAction,
  EditCatAction,
  AddCatAction,
} from "../../Store/Actions/CatsActions";
import * as ImagePicker from "expo-image-picker";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const { cats } = useSelector((state) => state.CatsReducer);
  const dispatch = useDispatch();
  const [cat, setCat] = useState({
    image: "",
    name: "",
    description: "",
    breed: "",
  });

  const renderItem = ({ item }) => {
    return <CatCard cat={item} />;
  };
  const renderHiddenItem = ({ item }) => {
    return (
      <IconView>
        <CardView onPress={() => hanldeOpenEditModal(item)}>
          <EditIcon size={20} name="edit" color="blue" />
          <EditText>Edit</EditText>
        </CardView>
        <CardView onPress={() => handleDelete(item.id)}>
          <DeleteIcon size={20} name="delete" color="red" />
          <DeleteText>Delete</DeleteText>
        </CardView>
      </IconView>
    );
  };

  const hanldeOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  const hanldeOnSave = () => {
    if (cat?.name && cat?.breed && cat?.description && cat?.image) {
      cat.id = Math.floor(Math.random() * 1000);
      dispatch(AddCatAction(cat, setModalVisible, setCat));
    } else {
      alert("Please fill all fields");
    }
  };
  const hanldeOnEditSave = (id) => {
    dispatch(EditCatAction(cat));
    setEditModalVisible(!editModalVisible);
  };
  const handleDelete = (id) => {
    dispatch(DeleteCatAction(id));
  };
  const hanldeOpenEditModal = (item) => {
    setCat(item);
    setEditModalVisible(!editModalVisible);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCat({ ...cat, image: result.uri });
    }
  };
  return (
    <MainContainer>
      <SafeAreaView />
      <SwipeListView
        data={cats}
        leftOpenValue={50}
        rightOpenValue={-50}
        renderHiddenItem={renderHiddenItem}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <TouchableOpacity onPress={hanldeOpenModal}>
            <AddIcon name="pluscircle" color="black" size={30} />
          </TouchableOpacity>
        )}
        ListHeaderComponentStyle={{
          marginRight: 20,
          justifyContent: "flex-end",
          flexDirection: "row",
          marginBottom: 10,
        }}
      />
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <ModalContainer>
          <TouchableOpacity onPress={pickImage}>
            {cat && (
              <CardImage
                source={{
                  uri: cat.image
                    ? cat.image
                    : "https://www.iconsdb.com/icons/preview/gray/add-xxl.png",
                }}
              />
            )}
          </TouchableOpacity>
          <TextInputWrapper>
            <TextInputStyle
              placeholder="Cat Name"
              onChangeText={(name) => setCat({ ...cat, name })}
            />
            <TextInputStyle
              placeholder="Cat Breed"
              onChangeText={(breed) => setCat({ ...cat, breed })}
            />
            <TextInputStyle
              placeholder="Cat Description"
              onChangeText={(description) => setCat({ ...cat, description })}
            />
          </TextInputWrapper>
          <ButtonWrapper>
            <SaveButtonStyle
              title={"save"}
              color="blue"
              onPress={hanldeOnSave}
            />
          </ButtonWrapper>
        </ModalContainer>
      </Modal>
      <Modal
        isVisible={editModalVisible}
        onBackdropPress={() => setEditModalVisible(!editModalVisible)}
      >
        <ModalContainer>
          <TouchableOpacity onPress={pickImage}>
            <CardImage
              source={{
                uri: cat?.image,
              }}
            />
          </TouchableOpacity>
          <TextInputWrapper>
            <TextInputStyle
              placeholder={cat?.name}
              onChangeText={(name) => setCat({ ...cat, name })}
            />
            <TextInputStyle
              placeholder={cat?.breed}
              onChangeText={(breed) => setCat({ ...cat, breed })}
            />
            <TextInputStyle
              placeholder={cat?.description}
              onChangeText={(description) => setCat({ ...cat, description })}
            />
          </TextInputWrapper>
          <ButtonWrapper>
            <SaveButtonStyle
              title={"save"}
              color="blue"
              onPress={() => hanldeOnEditSave(cat.id)}
            />
          </ButtonWrapper>
        </ModalContainer>
      </Modal>
    </MainContainer>
  );
};

export default Home;
