import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { useParams } from "react-router-dom";
import Skill from "./SkillContent/Skill";
import Projects from "./ProjectContent/Project";
import AboutMe from "./AboutContent/About";
import Experience from "./ExperienceContent/Experience";
import ContactForm from "./ContactForm/Contact";
function Body() {
  const { data, setData } = useContext(PortfolioContext);
  const [isSkillLoading, setSkillIsloading] = useState(true);
  const [isProjectLoading, setProjectIsloading] = useState(true);
  const [isAboutLoading, setAboutIsloading] = useState(true);
  const [isExpLoading, setExpIsloading] = useState(true);
  const { page } = useParams();
  useEffect(() => {
    const targetSection = document.getElementById(page);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);
  // check if the data were fetched completely
  useEffect(() => {
    console.log(data);
    if (data.skills) {
      setSkillIsloading(false);
    }
    if (data.projects) {
      setProjectIsloading(false);
    }
    if (data.about) {
      setAboutIsloading(false);
    }
    if (data.experiences) {
      setExpIsloading(false);
    }
  }, [data]);
  return (
    <>
      <section id="Skill">
        <div className="container mt-5">
          {isSkillLoading ? (
            <div>Loading...</div>
          ) : (
            data.skills.map((skill) => <Skill key={skill.id} data={skill} />)
          )}
        </div>
      </section>
      <section id="Project">
        <div className="row mt-5 mb-4">
          <div className="fs-1 fw-bolder text-center">
            Web development Highlight
          </div>
          <div className="fs-4 fw-semibold text-center">
            Functional | Responsive | Content-Manage
          </div>
        </div>

        {isProjectLoading ? (
          <div>Loading...</div>
        ) : (
          data.projects.map((project, index) => (
            <Projects key={project.id} data={project} index={index} />
          ))
        )}
      </section>
      <section id="AboutMe">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#" className="fw-bolder fs-5 text-black">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="fw-bolder fs-5 text-black">
                      User
                    </a>
                  </li>
                  <li className="breadcrumb-item active fw-bolder fs-5 text-primary text-decoration-underline">
                    User Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {isAboutLoading ? (
            <div>Loading...</div>
          ) : (
            <AboutMe data={data.about} />
          )}
        </div>
      </section>
      <section id="Experience">
        <div className="container mt-5">
          <div className="row mb-5">
            <div className="col-12 text-center fs-2 fw-bolder">Time Line</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {isExpLoading ? (
                  <div>Loading...</div>
                ) : (
                  data.experiences.map((exp) => (
                    <Experience key={exp.id} data={exp} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        <ContactForm />
      </section>
    </>
  );
}

export default Body;
