import React from "react";

function Home() {
  return (
    <div id="home ">
      <div className="section is-medium element1 mt-5">
        <div className="columns">
          <div className="column is-8">
            <h1
              className="has-text-weight-bold has-text-right "
              style={{ color: "black", fontSize: "5rem" }}
            >
              Madasha Liyanage
            </h1>
            <h1
              className="has-text-weight-semibold has-text-right "
              style={{ color: "black", fontSize: "2rem" }}
            >
              Video Editor
            </h1>
            <h1 className="has-text-right ">
              <a href="#introduction" className="seemore work2">
                See More...
              </a>
            </h1>
          </div>
          <div className="column is-4" />
        </div>
      </div>
    </div>
  );
}

export default Home;
