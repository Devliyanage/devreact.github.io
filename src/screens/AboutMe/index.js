import React from "react";

function AboutMe() {
  return (
    <div id="introduction">
      <div className="section is-medium nobg element">
        <div className="columns">
          <div className="column is-6">
            <h1
              className="has-text-weight-semibold has-text-left mr-6 "
              style={{ color: "black", fontSize: "2rem" }}
            >
              Hi! My name is Madasha Liyanage. I am a self-taught video editor
              and I have been editing different types of videos for more than 2
              years now. I will be happy to help you on your projects
            </h1>
            <h1 className="has-text-left mt-6 ">
              <a className="seemore work1">Read More...</a>
            </h1>
          </div>
          <div className="columns is-6">
            <figure className="image is-256x256 ">
              <img src="bg2.jpg" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
