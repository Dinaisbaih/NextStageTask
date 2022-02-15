import {
  ADD_CAT_ACTION,
  DELETE_CAT_ACTION,
  EDIT_CAT_ACTION,
} from "../Actions/ActionTypes";
const initialState = {
  cats: [
    {
      id: 1,
      image:
        "https://ae01.alicdn.com/kf/HTB1xNmFJFXXXXaCXpXXq6xXFXXXx/simulation-cat-furry-fur-20x-16cm-white-cat-miaow-sound-cat-hard-model-decoration-gift-h1216.jpg_Q90.jpg_.webp",
      name: "Fluffy",
      description: "Cute cat",
      breed: "Female",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1619682488107-c0791e9be98d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      name: "Blue",
      description: "Grey cat",
      breed: "Male",
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CAT_ACTION:
      return {
        ...state,
        cats: [...state.cats, payload],
      };
    case EDIT_CAT_ACTION:
      const wantedCat = state.cats.find((cat) => cat.id === payload.id);
      wantedCat.name = payload.name;
      wantedCat.breed = payload.breed;
      wantedCat.description = payload.description;
      wantedCat.image = payload.image;
      return { ...state, cats: [...state.cats] };

    case DELETE_CAT_ACTION:
      return {
        ...state,
        cats: state.cats?.filter((cat) => cat.id !== payload),
      };

    default:
      return state;
  }
};
