import BlogPost from "../BlogPost";
import Sidebar from "../Sidebar";
import React from "react";
import "./style.css";
const Post = (props) => {
  return (
    <section className="container">
      <BlogPost {...props} />
      <Sidebar />
    </section>
  );
};

export default Post;
