import React from "react";
import "../App.css";
import { addPostActionCreator } from "../Redux/ProfileReducer";
import { updateNewPostActionCreator } from "../Redux/ProfileReducer";

const MyPosts = (props) => {
  const Post = (props) => {
    return (
      <div className="item">
        {props.message}
        <div>
          <span>like {props.likeCount}</span>
        </div>
      </div>
    );
  };

  let postselements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
    console.log("click");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = {
    //   type: "UPDATE-NEW-POST-TEXT",
    //   newText: text,
    // };
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <h3> My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      {postselements}
    </div>
  );
};

export { MyPosts };
