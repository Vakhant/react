import React from "react";
import cls from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cls.post}>
      <img className={cls.avatar} src="https://sun9-8.userapi.com/c855136/v855136606/2251c4/8wx3mFlFggg.jpg" alt="" />
      <div className="post_name">Post 1</div>
      <div className="post_message" dangerouslySetInnerHTML={{ __html: props.message }}></div>
      <button className="post_like">Like {props.likesCount}</button>
    </div>
  );
};

export default Post;
