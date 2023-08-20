import React from "react";
import Content from "./Content";
import Hightlight from "./Highligh";
function Projects({ data, index }) {
  const isEvenIndex = index % 2 === 0;
  return (
    <>
      {isEvenIndex ? (
        <div className="row mt-5 mx-3 justify-content-center">
          <div className="col-lg-8 col-xl-6 col-xxl-5 mb-3">
            <div className="mac_frame">
              <div className="mac_frame_bar"></div>
              <div className="mac_frame_btn"></div>
              <div className="mac_frame_url">
                /Projects/{data.project_name}.com
              </div>
              <div className="mac-frame_image">
                <img src={data.image_url} alt={data.project_name} />
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-xxl-6">
            <div className="d-flex align-self-start ms-5 mt-1 flex-column">
              <div className="fs-2 fw-bolder">{data.project_name}</div>
              {data.description.map((content) => (
                <Content key={content.id} content={content} />
              ))}
            </div>
            <div className="d-flex flex-row flex-wrap ms-5 mt-2 gap-4 mb-4">
              {data.skills.map((highlight) => (
                <Hightlight key={highlight} highlight={highlight} />
              ))}
            </div>
            <div className="view_container mt-5">
              <div>
                <a className="view_btn " href={data.project_view_url}>
                  &lt;/&gt; View Code
                </a>
              </div>
              <div>
                <a
                  className={`view_btn ${
                    data.project_live_url !== "#" ? "" : "disabled"
                  } `}
                  href={data.project_live_url}
                >
                  &lt;/&gt; View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-5 mx-3 justify-content-center">
          <div className="col-xl-6 col-xxl-6">
            <div className="d-flex align-self-start ms-5 mt-1 flex-column">
              <div className="fs-2 fw-bolder">{data.project_name}</div>
              {data.description.map((content) => (
                <Content key={content.id} content={content} />
              ))}
            </div>
            <div className="d-flex flex-row flex-wrap ms-5 mt-2 gap-4 mb-4">
              {data.skills.map((highlight) => (
                <Hightlight key={highlight} highlight={highlight} />
              ))}
            </div>
            <div className="view_container my-5">
              <div>
                <a className="view_btn " href={data.project_view_url}>
                  &lt;/&gt; View Code
                </a>
              </div>
              <div>
                <a
                  className={`view_btn ${
                    data.project_live_url !== "#" ? "" : "disabled"
                  } `}
                  href={data.project_live_url}
                >
                  &lt;/&gt; View Live
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-6 col-xxl-5">
            <div className="mac_frame">
              <div className="mac_frame_bar"></div>
              <div className="mac_frame_btn"></div>
              <div className="mac_frame_url">
                /Projects/{data.project_name}.com
              </div>
              <div className="mac-frame_image">
                <img src={data.image_url} alt={data.project_name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
