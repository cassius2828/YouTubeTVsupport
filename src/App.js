import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import data from "./data";
import help from "./help";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const toggleNav = () => {
    const hamburger = document.getElementById("hamburger");
    const slideMenu = document.getElementById("slide-menu");
    hamburger.classList.toggle("active");
    slideMenu.classList.toggle("active");
  };

  return (
    <div className="App">
      <div id="top"></div>
      <div id="slide-menu">
        <ul>
          {help.map((i, index) => {
            return (
              <>
                {" "}
                <a target="_blank" rel="noreferrer" href={i.url}>
                  <li onClick={toggleNav} key={index} id={i.topic}>
                    {i.topic}
                  </li>
                </a>
                <hr></hr>
              </>
            );
          })}
        </ul>
      </div>
      <nav id="navbar">
        <div
          onClick={toggleNav}
          className="hamburger-container"
          id="hamburger"
        ></div>
        <div id="header">
          <h1>
            {"YouTube TV Guide "}
            <FontAwesomeIcon icon={faYoutube} />
          </h1>
        </div>
        <div className="desktop-nav">
          {help.map((i, index) => {
            return (
              <>
                {" "}
                <a target="_blank" rel="noreferrer" href={i.url}>
                  <li onClick={toggleNav} key={index} id={i.topic}>
                    {i.topic}
                  </li>
                </a>
              </>
            );
          })}
        </div>
      </nav>

      <div className="card-container">
        {/* {steps.section ? (
          steps.map((i) => {
            return (
              <>
                <span className="section mb2">{i.section}</span>
                <span className="description mb2">
                  {i.description && i.description}
                </span>
                <div className="mb4">
                  <span className="topic fw6">
                    {i.details[0] && i.details[0]}
                  </span>{" "}
                  {i.details[1] && i.details[1]}{" "}
                </div>
              </>
            );
          })
        ) : (
          <ol className="stepsOnly">
            {steps?.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
        )} */}
        {data.map((item) => {
          return (
            <Card
              title={item.title}
              heroStep={item?.heroStep}
              steps={item.steps}
              section={item.section}
              description={item.description}
              details={item.details}
            />
          );
        })}
      </div>
      <footer className="mb4">
        <p>
          Developed By{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/cassius2828"
          >
            Cassius Reynolds
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

// make id of index for card so I can use nav to get to the main part

/*



 {steps.section ? 
        steps.map(i => {
            return <>
            <span className="section mb2">{i.section}</span>
             <span className="description mb2">
        {i.description && i.description}
          </span>
          <div className="mb4">
         
            <span className="topic fw6">{i.details[0] && i.details[0]}</span> {i.details[1] && i.details[1]} {" "}
          </div>
            </>
        }) : 
          <ol className="stepsOnly">
           {steps?.map(item => {
            return <li>{item}</li>
           })}
          </ol>}
*/
