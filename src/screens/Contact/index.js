import React from "react";

function Contact() {
  return (
    <div id="contact">
      <section className="container-fluid is-small bg5 ml-4 mt-4">
        <h1
          className="has-text-weight-bold has-text-centered mb-4"
          style={{ color: "black", fontSize: "5rem" }}
        >
          Contact Me
        </h1>
        <div className="mb-6 ml-6 mr-6">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                style={{ backgroundColor: "#555b57" }}
                type="text"
                placeholder="Ex: Madasha Liyanage"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control ">
              <input
                className="input"
                style={{ backgroundColor: "#555b57" }}
                type="email"
                placeholder="Ex: dewminiliyanage@liyanagearts.com"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea textarea"
                placeholder="Textarea"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button" style={{ backgroundColor: "#555b57" }}>
                <p style={{ color: "#ffffff" }}>Submit</p>
              </button>
            </div>
            <div className="control">
              <button className="button">
                <p style={{ color: "#555b57" }}>Cancel</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
