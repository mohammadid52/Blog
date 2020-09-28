import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Post from "./components/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/post/:postid" component={Post} />
          <Route path="/add-blog" component={AddBlog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
