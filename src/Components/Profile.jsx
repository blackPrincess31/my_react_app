import React from "react";
import "../App.css";
import { MyPosts } from "./My_posts";
import { ProfileInfo } from "./ProfileInfo";

const Profile = (props) => {
  
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts
        posts={props.postData}
        addPost={props.addPost}
        newPostText={props.newPostText}
      />
    </div>
  );
};

export { Profile };
