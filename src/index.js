// import React from "react";

// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { addPost } from "./Redux/State";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost} />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import state, { addPost, subscriber, updateNewPost } from "./Redux/State";

let rerenderTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
    </React.StrictMode>
  );
};

rerenderTree(state);

subscriber(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
