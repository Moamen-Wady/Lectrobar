import { memo, useEffect, useState, useRef, useCallback } from "react";
import Projbanner from "./components/Projbanner";
import { Link } from "react-router-dom";
import "./styles/projects.css";

const Search = memo(function Search({
  setHash,
  ProjectsData,
  hideSearchPanel,
}) {
  const [allResArr, setAllResArr] = useState([]);
  const [searchBy, setSearchBy] = useState("projectName");
  const [searchIn, setSearchIn] = useState("all");
  const [placeHolder, setPlaceHolder] = useState("Search By Project Name");
  let inputText = useRef();

  const setSBY = useCallback((e) => {
    document.getElementById("sby").reset();
    setSearchBy(e.target.value);
    e.target.checked = true;
    if (e.target.value == "projectName") {
      setPlaceHolder("Search By Project Name");
    } else {
      setPlaceHolder("Search By Country");
    }
  }, []);
  const setSIN = useCallback((e) => {
    setSearchIn(e.target.value);
  }, []);
  const searchProjects = useCallback(() => {
    let tempRes;
    if (searchIn !== "all") {
      tempRes = ProjectsData[searchIn].filter((x) =>
        x[searchBy]
          .toString()
          .toLowerCase()
          .includes(inputText.current.value.toString().toLowerCase(), 0)
      );
      setAllResArr([[searchIn, tempRes]]);
    } else {
      let results = [];
      let i;
      for (i = 0; i < Object.keys(ProjectsData).length; i++) {
        tempRes = Object.entries(ProjectsData)[i][1].filter((x) =>
          x[searchBy]
            .toString()
            .toLowerCase()
            .includes(inputText.current.value.toString().toLowerCase(), 0)
        );
        let categorize = [Object.entries(ProjectsData)[i][0], tempRes];
        results = [...results, categorize];
      }
      setAllResArr(results);
    }
  }, []);
  useEffect(() => {
    document.getElementById("pn").checked = true;
    searchProjects();
  }, [searchBy, searchIn]);
  return (
    <div className="projectssearchwindow" id="searchWindow">
      <img
        src="/close.png"
        alt=""
        className="projectssearchclosebutton"
        onClick={hideSearchPanel}
      />
      <div className="projctscenteredsearch" id="centeredWindow">
        <div className="projectssearchresults">
          <h4>Click On A Project To Visit Its Page!</h4>
          {allResArr.map((x) => {
            return (
              <div key={x[0]}>
                <h1>
                  <i>{x[0]}</i>
                </h1>
                {x[1].map((c) => {
                  return (
                    <Link
                      to={"/Projects/" + c.category + "#" + c.projectName}
                      onClick={() => setHash(c.projectName)}
                      className="projectssingleresult"
                      key={c.projectName}
                      style={{
                        backgroundImage: `url(${c.mainImg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <h2>{c.projectName}</h2>
                      <h3>{c.country}</h3>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="projectssearchaction">
          <form id="sby">
            <p>Search By:</p>
            <span>
              <input
                type="radio"
                id="pn"
                value="projectName"
                onClick={setSBY}
              />
              <label htmlFor="pn">Project Name</label>
            </span>
            <span>
              <input type="radio" id="cn" value="country" onClick={setSBY} />
              <label htmlFor="cn">Country</label>
            </span>
          </form>
          <span>
            <p>Search In Category:</p>
            <select id="searchin" onChange={setSIN}>
              <option value="all">All</option>
              {Object.keys(ProjectsData).map((key) => {
                return (
                  <option value={key} key={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          </span>

          <input
            type="textarea"
            id="searchinput"
            className="projectssearchinput"
            onChange={searchProjects}
            ref={inputText}
            placeholder={placeHolder}
          />
        </div>
      </div>
    </div>
  );
});

export default memo(function Projects({ setHash, ProjectsData }) {
  const [isShowSearch, setIsShowSearch] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const showSearchPanel = useCallback(() => {
    setIsShowSearch(true);
  }, []);
  const hideSearchPanel = useCallback(() => {
    setIsShowSearch(false);
  }, []);
  return (
    <div>
      <Projbanner />
      <div className="projectssearch">
        <div className="projectssearchstartcont">
          <button className="projectssearchstart" onClick={showSearchPanel}>
            Search In Projects
          </button>
        </div>
        {isShowSearch ? (
          <Search
            setHash={setHash}
            ProjectsData={ProjectsData}
            hideSearchPanel={hideSearchPanel}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="projectscategorycont">
        <div>
          <Link to="/Projects/Banks">
            <img src="/proj9.jpg" alt="" />
            <p>Banks</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Education">
            <img src="/proj1.jpg" alt="" />
            <p>education</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Etc">
            <img src="/proj12.jpg" alt="" />
            <p>etc</p>
          </Link>
        </div>
        <div>
          <Link to="">
            <img src="/proj10.jpg" alt="" />
            <p>Exhibitions</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Factories">
            <img src="/proj2.jpg" alt="" />
            <p>factories</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Gov">
            <img src="/proj4.jpg" alt="" />
            <p>governmental org.</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Hospitals">
            <img src="/proj6.jpg" alt="" />
            <p>Hospitals</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Hotels">
            <img src="/proj5.jpg" alt="" />
            <p>Hotels</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Malls">
            <img src="/proj11.jpg" alt="" />
            <p>Malls</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/TechCenters">
            <img src="/proj3.jpg" alt="" />
            <p>Tech Centers</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Towers">
            <img src="/proj8.jpg" alt="" />
            <p>Towers</p>
          </Link>
        </div>
        <div>
          <Link to="/Projects/Villages">
            <img src="/proj7.jpg" alt="" />
            <p>Villages</p>
          </Link>
        </div>
      </div>
    </div>
  );
});
