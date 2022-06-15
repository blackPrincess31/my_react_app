import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./Sidebarreducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi,post11224", likeCount: 12 },
        { id: 2, message: "hello,hghj53", likeCount: 14 },
      ],
      newPostText: "it",
    },

    messagesPage: {
      dialogs: [
        { id: 1, name: "user1" },
        { id: 2, name: "user2" },
      ],
      messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "hello" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callsubsr() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callsubsr = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callsubsr(this._state);
  },
};

window.store = store;

export { store };
