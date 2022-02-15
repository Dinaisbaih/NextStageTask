import {
  EDIT_CAT_ACTION,
  DELETE_CAT_ACTION,
  ADD_CAT_ACTION,
} from "./ActionTypes";
export const EditCatAction = (cat) => (dispatch) => {
  dispatch({
    type: EDIT_CAT_ACTION,
    payload: cat,
  });
};

export const DeleteCatAction = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CAT_ACTION,
    payload: id,
  });
};

export const AddCatAction = (cat, setModalVisible, setCat) => (dispatch) => {
  dispatch({
    type: ADD_CAT_ACTION,
    payload: cat,
  });
  setModalVisible(false);
  setCat({});
};
