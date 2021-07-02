import { SET_VIDEOS } from "./VideoActions";

const initialState = {
  video: null,
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return {
        video: action.payload,
      };
    default:
      return state;
  }
};
