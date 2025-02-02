import { useEffect } from "react";
import "./styles/project1.css";
import { useParams } from "react-router";

export default function Project({ scrollToProject, add, all }) {
  useEffect(() => {
    scrollToProject();
    add(document.getElementById("project1container"));
  }, []);
  const { project } = useParams();
  let Arr = all[project];
  return (
    <>
      <div className="project1container" id="project1container">
        <h1>{project}</h1>
        {Arr.map((item) => {
          return (
            <div className="project1project" id={item.projectName} key={item.projectName}>
              <div className="project1imgcont">
                <img className="project1mainimg" src={item.mainImg} alt="" />
              </div>
              <div className="project1datacont">
                <h2> {item.projectName}</h2>
                <ul>
                  <li>
                    -{item.consultantName}
                    <img src={item.consultantImg} alt="" />
                  </li>
                  <li>
                    -{item.constructorName}
                    <img src={item.constructorImg} alt="" />
                  </li>
                  <li>-{item.meters} Meters</li>
                  <li>-{item.type + `( ${item.country} )`}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
