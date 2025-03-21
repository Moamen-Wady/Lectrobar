import { useEffect } from "react";
import "./styles/project.css";
import { useParams } from "react-router";

export default function Project({ scrollToProject, ProjectsData }) {
  const { project } = useParams();
  let Arr = ProjectsData[project];
  useEffect(() => {
    scrollToProject();
  }, [project]);
  return (
    <div className="project1container">
      <h1>
        {project == "TechCenters" ? (
          <>Tech Centers</>
        ) : project == "Gov" ? (
          <>Governmental Orgs.</>
        ) : (
          <>{project}</>
        )}
      </h1>
      {Arr.map((item) => {
        return (
          <div
            className="project1project"
            id={item.projectName}
            key={item.projectName}
          >
            <div className="project1imgcont">
              <img loading="lazy" className="project1mainimg" src={item.mainImg} alt="" />
            </div>
            <div className="project1datacont">
              <h2> {item.projectName}</h2>
              <ul>
                <li>
                  -{item.consultantName}
                  <img loading="lazy" src={item.consultantImg} alt="" />
                </li>
                <li>
                  -{item.constructorName}
                  <img loading="lazy" src={item.constructorImg} alt="" />
                </li>
                <li>-{item.meters} Meters</li>
                <li>-{item.type + `( ${item.country} )`}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
