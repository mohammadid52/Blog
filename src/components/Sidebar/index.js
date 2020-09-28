import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./style.css";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";
const Sidebar = ({ width }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPost.data);
  }, [posts]);

  return (
    <div className="sidebar__container" style={{ width: width }}>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebar__header">About Us</div>
        <div className="profileimg__container">
          <img
            src={require("../../images/myPhoto.jpg")}
            alt="May be I don't exist"
          />
        </div>
        <div className="sidebar__body">
          <p className="personalBio">
            My name is Mohammad Dehgamwala and I'm a web developer
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebar__header">Social Network</div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebar__header">Recent Posts</div>
        <div className="recentPosts">
          {posts.map((post) => (
            <NavLink to={`/post/${post.id}`} key={post.id}>
              <div className="recentPost">
                <h3>{post.blogTitle}</h3>
                <span>{post.postedOn}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
