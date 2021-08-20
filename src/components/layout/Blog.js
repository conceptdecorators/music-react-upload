import React, { useEffect, useState } from "react";

import { client } from "../../client";
import Posts from "../../components/blog/Posts";

import "./Blog.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log("yooo===>>", response);
        setArticles(response.items);
      })
      .catch((err) => {
        console.error("errr==>>>", err);
      });
  }, []);

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
              <Posts posts={articles} />
            </div>
          </div>
        </div>
      </main>
      {/* </div> */}
    </div>
  );
};

export default Blog;
