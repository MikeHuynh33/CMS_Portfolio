import React from "react";
import Description from "./description";
import Icons from "./Icon";

function Skill({ data }) {
  return (
    <>
      <h1 className="display-1 fw-semibold">{data.title}</h1>
      {data.description.map((des) => (
        <Description key={des.id} description={des} />
      ))}
      <div className="ms-xl-auto w-45 d-block mt-5">
        <ul className="d-flex flex-row gap-4">
          {data.listIcon.map((icon) => (
            <Icons key={icon.id} icon={icon} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Skill;
