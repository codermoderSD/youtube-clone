import { createStore, combineReducers } from "redux";
import { videoReducer } from "./videos/VideoReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  Video: videoReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
