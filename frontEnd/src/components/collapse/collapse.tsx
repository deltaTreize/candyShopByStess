import { useState } from "react";
import React from "react";
import "./collapse.scss";

interface CollapseProps {
  title: string;
  value: Array<{
    text?: string,
    icon: JSX.Element}>;
}

export function Collapse(props: CollapseProps) {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    <div className="collapse">
      <div className="collapse_title" onClick={handleToggle}>
        {props.title}
        <i
          className={`fa-solid fa-chevron-up ${isToggled ? "" : "rotated"}`}
        ></i>
      </div>
      <div className={`collapse_content ${isToggled ? "show" : "hidden"}`}>
        <ul>
          {props.value.map((value, index) => (
            <li key={index} onClick={handleToggle} >{value.text} {value.icon}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
