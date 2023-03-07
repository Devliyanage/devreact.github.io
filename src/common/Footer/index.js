import React from "react";

function Footer() {
  return (
    <footer className="footer element">
      <div className="columns ">
        <div className="column is-6">
          <div className="columns">
            <div className="column is-4">
              <h1
                className="is-family-sans-serif has-text-weight-semibold has-text-centered mb-4	"
                style={{ fontSize: "20px", color: "rgb(0, 0, 0)" }}
              >
                F I V E R R
              </h1>
              <h1
                className="is-family-sans-serif has-text-centered 	"
                style={{ fontSize: "15px", color: "rgb(0, 0, 0)" }}
              >
                @liyanagearts
              </h1>
              <figure className="image is-128x128 has-image-centered">
                <img src="fiverr.png" />
              </figure>
            </div>
            <div className="column is-4">
              <h1
                className="is-family-sans-serif has-text-weight-semibold has-text-centered mb-4	"
                style={{ fontSize: "20px", color: "rgb(0, 0, 0)" }}
              >
                P H O N E
              </h1>
              <h1
                className="is-family-sans-serif has-text-centered 	"
                style={{ fontSize: "15px", color: "rgb(0, 0, 0)" }}
              >
                +94-71234567
              </h1>
              <figure className="image is-128x128 has-image-centered mt-3">
                <img src="call.png" />
              </figure>
            </div>
            <div className="column is-4">
              <h1
                className="is-family-sans-serif has-text-weight-semibold has-text-centered mb-4	"
                style={{ fontSize: "20px", color: "rgb(0, 0, 0)" }}
              >
                E M A I L
              </h1>
              <h1
                className="is-family-sans-serif has-text-centered 	"
                style={{ fontSize: "15px", color: "rgb(0, 0, 0)" }}
              >
                contact@liyanagearts.com
              </h1>
              <figure className="image is-128x128 has-image-centered mt-3">
                <img src="email.png" />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="columns">
            <div className="column">
              <figure className="image is-128x128 has-image-centered mt-6">
                <img src="sm.png" />
              </figure>
            </div>
            <div className="column" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
