import React from "react";

function Projects() {
  return (
    <div id="myprojects">
      <div className="section is-medium bg4 ml-4 mt-4">
        <div className="columns">
          <div className="column is-6">
            <div className="container-fluid">
              <div className="containerwork">
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ&t=2s">
                  <img src="work.png" className="img1work work1" />
                </a>
                <a href="https://www.youtube.com/watch?v=DZ8zcV_vc3c">
                  <img src="work2.PNG" className="img2work work2" />
                </a>
                <a href="https://www.youtube.com/watch?v=n7MpzosGw8Q">
                  <img src="work3.PNG" className="img3work work3" />
                </a>
              </div>
            </div>
            <div className="mt-6 ml-6">
              <i
                className="fa fa-youtube-play"
                style={{ fontSize: "75px", color: "red" }}
              />
              <h1
                className="has-text-weight-semibold has-text-left is-underlined "
                style={{ color: "rgb(0, 0, 0)", fontSize: "1.5rem" }}
              >
                liyanagearts
              </h1>
            </div>
          </div>
          <div className="column is-6">
            <h1
              className="has-text-weight-normal has-text-centered "
              style={{ color: "black", fontSize: "3rem" }}
            >
              N O T A B L E
            </h1>
            <h1
              className="has-text-weight-normal has-text-centered "
              style={{ color: "black", fontSize: "3rem" }}
            >
              P R O J E C T S
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

