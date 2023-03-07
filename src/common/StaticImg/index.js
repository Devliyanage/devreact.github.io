import React from "react";

function StaticImg() {
  return (
    <div>
      <img src="me.png" className="madasha" />
      <a href="https://web.whatsapp.com/">
        <div className="whatsapp">
          <img src="whatsapp.png" alt="My Image" width={100} />
        </div>
      </a>
    </div>
  );
}

export default StaticImg;
