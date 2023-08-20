import { PortfolioContext } from "../context/PortfolioContext";
import React, { Children } from "react";
import { useState, useEffect } from "react";
export function PortfolioProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const responseExperience = await fetch(
          "http://laravelreactapi.mikehuynhportfolio.com/public/api/experience"
        );
        const dataExp = await responseExperience.json();

        const responseAbout = await fetch(
          "http://laravelreactapi.mikehuynhportfolio.com/public/api/about"
        );
        const dataAbout = await responseAbout.json();

        const responseSkill = await fetch(
          "http://laravelreactapi.mikehuynhportfolio.com/public/api/skills"
        );
        const dataSkill = await responseSkill.json();

        const responseProject = await fetch(
          "http://laravelreactapi.mikehuynhportfolio.com/public/api/projects"
        );
        const dataProject = await responseProject.json();

        setData({
          projects: dataProject,
          skills: dataSkill,
          about: dataAbout,
          experiences: dataExp,
        });
        setLoading(false);
      } catch (err) {}
    }
    fetchData();
  }, []);
  return (
    <PortfolioContext.Provider value={{ data, setData }}>
      {children}
    </PortfolioContext.Provider>
  );
}
