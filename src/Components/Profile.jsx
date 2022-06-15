import React from "react";
import "../App.css";
import { MyPosts } from "./My_posts";
import { ProfileInfo } from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export { Profile };
