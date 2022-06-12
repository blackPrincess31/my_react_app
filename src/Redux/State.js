import { rerenderTree } from "../render";

let state = {
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
  },
};

export default state;

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderTree(state);
};

export let updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};
