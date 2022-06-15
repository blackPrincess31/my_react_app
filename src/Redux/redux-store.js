import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";

import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./Sidebarreducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
});

export const store = createStore(redusers);
