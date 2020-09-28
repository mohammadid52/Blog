import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";

const BlogPost = (props) => {
  const [post, setPost] = useState({});

  const { postid } = props.match.params;
  useEffect(() => {
    const data = blogPost.data.find((post) => post.id == postid);
    setPost(data);
  }, [props.match.params.postid]);

  if (!post.blogImage) {
    return "Loading";
  }

  return (
    <div className="blogpost_container">
      <Card>
        <div className="post__header">
          <span className="postCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            Posted on {post.postedon} By {post.author}
          </span>
        </div>
        <div className="post__imageContainer">
          <img src={require(`../../${post.blogImage}`)} alt="blogImage" />
        </div>

        <div className="post__content">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
