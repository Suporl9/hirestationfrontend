import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  serviceDetailsReducer,
  serviceReducer,
} from "./redux/service/serviceReducer";
const rootReducer = combineReducers({
  services: serviceReducer,
  serviceDetails: serviceDetailsReducer,
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
