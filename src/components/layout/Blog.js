import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { client } from "../../client";
import Posts from "../../components/blog/Posts";

import "./Blog.css";

class Blog extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        {/* <div className="container"> */}
        <header>
          <div className="wrapper-blog">
            <h1 className="blog__page__header">ZILAH MUSIC PUBLISHING NEWS</h1>
          </div>
        </header>
        <main>
          <div className="blog__page">
            <div className="blogs">
              <div className="wrapper-blog">
                <Posts posts={this.state.articles} />
              </div>
            </div>
          </div>
        </main>
        {/* </div> */}
      </div>
    );
  }
}

export default Blog;
