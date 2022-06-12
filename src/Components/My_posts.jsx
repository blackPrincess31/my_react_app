import React from "react";
import "../App.css";

const MyPosts = (props) => {
  debugger;
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
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPost("");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
  };

  return (
    <div>
      <h3> My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <button
          onClick={addPost}
          onChange={onPostChange}
          value={props.newPostText}
        >
          Add post
        </button>
      </div>
      {postselements}
    </div>
  );
};

export { MyPosts };
