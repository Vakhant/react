import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsList = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

  let newPost = React.createRef();

  let addPost = () => {
    if (newPost.current.value !== "") {
      props.addPost();
    }
  }
  let onPostChange = () => {
    let text = newPost.current.value;
    props.onPostChange(text);
  }

  return (
    <div className={cls.my_posts}>
      <h3>My posts</h3>
      <div>
        <textarea name="" ref={newPost} value={props.newPostText} onChange={onPostChange}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {postsList}
      </div>
    </div>
  );
};

export default MyPosts;
