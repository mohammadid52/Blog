import React, { useState } from "react";
import { addBlog } from "../../Firestore/blogAction";
import { useDispatch } from "react-redux";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    id: "",
    blogTitle: "",
    blogText: "",
    blogCategory: "",
    author: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setBlog({ ...blog, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog(blog));
  };
  const { id, blogCategory, blogTitle, blogText, author } = blog;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={handleChange}
          name="id"
        />
        <input
          type="text"
          placeholder="title"
          value={blogTitle}
          onChange={handleChange}
          name="blogTitle"
        />
        <input
          type="text"
          placeholder="category"
          value={blogCategory}
          onChange={handleChange}
          name="blogCategory"
        />
        <input
          type="text"
          placeholder="Text"
          value={blogText}
          onChange={handleChange}
          name="blogText"
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={handleChange}
          name="author"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddBlog;
