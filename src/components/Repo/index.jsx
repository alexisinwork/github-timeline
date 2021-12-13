import React from "react";
import useVisibility from "../../utils/useVisibility";

import timelineStyles from "../../styles/timeline.module.css";

const Repo = (props) => {
  const [isVisible, currentElement] = useVisibility(100);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li
      ref={currentElement}
      className={isVisible ? timelineStyles["in-view"] : ""}
    >
      <div>
        <time>{dateTimeFormat.format(props.created_at)}</time>
        <a href={props.html_url} target="_blank" rel="noreferrer">
          {props.name}
        </a>
      </div>
    </li>
  );
};

export default Repo;
