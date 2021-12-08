import React from "react";
import useVisibility from "utils/useVisibility";

import timelineStyles from "../../styles/timeline.module.css";

const Repo = (props) => {
  const [isVisible, currentElement] = useVisibility(100);

  return (
    <li
      ref={currentElement}
      className={isVisible ? timelineStyles["in-view"] : ""}
    >
      <div>
        <time>{props.time}</time>
        {props.text}
      </div>
    </li>
  );
};

export default Repo;
