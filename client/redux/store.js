import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export const makeStore = (context) => store;

export default store;
