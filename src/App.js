import React from "react";
import "./App.css";
import { Dialogs } from "./Components/Dialogs";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Profile } from "./Components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/profile"
            activeClassName="active"
            element={
              <Profile
                postData={props.state.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.state.profilePage.newPostText}
                updateNewPost={props.updateNewPost}
              />
            }
          />
          <Route
            exact
            path="/dialogs"
            activeClassName="active"
            element={
              <Dialogs
                dialogsData={props.state.messagesPage.dialogs}
                messagesData={props.state.messagesPage.messages}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
