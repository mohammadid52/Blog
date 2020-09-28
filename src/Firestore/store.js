import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer.js";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);
export default store;
