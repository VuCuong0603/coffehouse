import { combineReducers } from "redux";
import cartReducer from "../reducers/productReducer";

// ket noi cac reducer lai voi nhau
const rootReducer = combineReducers({
  cartReducer
  // authReducer
});

export default rootReducer;
