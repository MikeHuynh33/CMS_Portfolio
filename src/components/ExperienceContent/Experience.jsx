import React from "react";
import "./timeline.css";
function Experience({ data }) {
  return (
    <div className="timeline">
      <a href="#" className="timeline-content">
        <div className="timeline-year">{data.Timeline}</div>
        <h3 className="title">{data.title}</h3>
        <h5 className="fs-5 fw-bold">{data.duration}</h5>
        <p className="description">{data.description}</p>
      </a>
    </div>
  );
}

export default Experience;
