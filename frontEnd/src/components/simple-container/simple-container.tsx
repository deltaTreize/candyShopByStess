import React from "react";
import "./simple-container.scss";

export function SimpleContainer() {
	return (
    <div className="simple-container">
    <p>Base Simple</p>
    <div className="simple-wrapper">
      <div className="simple-20cm">
        <img
          src="./assets/circle.png"
          alt=""
          className="taille-20cm"
        />
        <p>20cm</p>
      </div>
      <div className="simple-30cm">
        <img
          src="./assets/circle.png"
          alt=""
          className="taille-30cm"
        />
        <p>30cm</p>
      </div>
      <div className="simple-40cm">
        <img
          src="./assets/circle.png"
          alt=""
          className="taille-40cm"
        />
        <p>40cm</p>
      </div>
      <div className="simple-50cm">
        <img
          src="./assets/circle.png"
          alt=""
          className="taille-50cm"
        />
        <p>50cm</p>
      </div>
      <div className="simple-60cm">
        <img
          src="./assets/circle.png"
          alt=""
          className="taille-60cm"
        />
        <p>60cm</p>
      </div>
    </div>
  </div>
	);
}
