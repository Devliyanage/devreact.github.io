import React from "react";

function Quali() {
  return (
    <div id="qualifications ">
      <div className="container-fluid is-medium nobg element mt-4">
        <div className="hero is-small">
          <div className="hero-body">
            <h1
              className="has-text-weight-bold has-text-centered mb-6 mt-6 "
              style={{ color: "black", fontSize: "4rem" }}
            >
              Educational &amp; Professional Background.
            </h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <h1
              className="has-text-weight-semibold has-text-centered mb-4 "
              style={{ color: "black", fontSize: "2rem" }}
            >
              Udemy Academy
            </h1>
            <h1
              className="has-text-weight-normal has-text-centered "
              style={{ color: "black", fontSize: "1.5rem" }}
            >
              Video Editing in DaVinci Resolve Beginner to Advance
            </h1>
            <figure className="image is-256x256 has-image-centered">
              <img src="udemy.png" />
            </figure>
          </div>
          <div className="column is-4">
            <h1
              className="has-text-weight-semibold has-text-centered mb-4 "
              style={{ color: "black", fontSize: "2rem" }}
            >
              Professional Video Editor | 2019 - 2021
            </h1>
            <h1
              className="has-text-weight-normal has-text-centered "
              style={{ color: "black", fontSize: "1.5rem" }}
            >
              Asia Broadcasting Coporation (pvt) Ltd
            </h1>
            <figure className="image is-256x256 has-image-centered mt-4">
              <img src="hiru.png" />
            </figure>
          </div>
          <div className="column is-4">
            <h1
              className="has-text-weight-semibold has-text-centered mb-4 "
              style={{ color: "black", fontSize: "2rem" }}
            >
              BSc. in IS | 2019
            </h1>
            <h1
              className="has-text-weight-normal has-text-centered "
              style={{ color: "black", fontSize: "1.5rem" }}
            >
              University of Colombo School of Computing
            </h1>
            <figure className="image is-256x256 has-image-centered mt-4">
              <img src="ucsc.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quali;
