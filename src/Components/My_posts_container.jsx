// import React from "react";
// import "../App.css";
// import { addPostActionCreator } from "../Redux/ProfileReducer";
// import { updateNewPostActionCreator } from "../Redux/ProfileReducer";

// const MyPostsContainer = (props) => {
//   const Post = (props) => {
//     return (
//       <div className="item">
//         {props.message}
//         <div>
//           <span>like {props.likeCount}</span>
//         </div>
//       </div>
//     );
//   };

//   let postselements = props.posts.map((p) => (
//     <Post message={p.message} likeCount={p.likeCount} />
//   ));

//   let newPostElement = React.createRef();

//   let addPost = () => {
//     // let text = newPostElement.current.value;
//     props.dispatch(addPostActionCreator);
//   };

//   let onPostChange = () => {
//     let text = newPostElement.current.value;
//     // let action = {
//     //   type: "UPDATE-NEW-POST-TEXT",
//     //   newText: text,
//     // };
//     let action = updateNewPostActionCreator(text);
//     props.dispatch(action);
//   };

//   return <MyPosts updateNewPost={onPostChange} />;
// };

// export default MyPostsContainer ;
