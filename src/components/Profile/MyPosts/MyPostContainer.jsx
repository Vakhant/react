import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = () => {

//   return <StoreContext.Consumer>
//     {
//       (store) => {
//         let state = store.getState().profilePage;

//         let addPost = (text) => {
//           store.dispatch(addPostActionCreator(text));
//         }
//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostActionCreator(text));
//         }

//         return <MyPosts onPostChange={onPostChange} addPost={addPost}
//           newPostText={state.newPostText}
//           postsData={state.postsData}
//         />
//       }
//     }
//   </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
    onPostChange: (text) => {
      dispatch(updateNewPostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
