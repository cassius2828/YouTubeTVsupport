import React, { useState } from "react";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

//   title={}
//         heroStep={}
//         steps={}
//         section={}
//         description={}
// details={}

export const Card = ({ title, heroStep, steps }) => {
  const [cardDrop, setCardDrop] = useState(false);
  const toggleCardDrop = () => {
    // const content = document.getElementById('content');
    setCardDrop(!cardDrop);
  };
  return (
    <>
      {" "}
      <div className="card mt5 mb5">
        <div id={title} className="title">
          {title}
          <FontAwesomeIcon
            onClick={toggleCardDrop}
            className="dropdown"
            icon={!cardDrop ? faAngleDown : faAngleUp}
          />
        </div>
        {cardDrop ? (
          <div className="content">
            <span className="heroStep mb2">{heroStep}</span>

            {typeof steps[2] === "string" ? (
              <ol className="stepsOnly">
                {steps?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
            ) : true ? (
              //  <h1>hi</h1>
              steps.map((i) => {
                return (
                  <>
                    <hr className="mt1 mb4 hr-main"></hr>
                    <span className="section mb2">
                      {i.section && i.section}
                    </span>

                    <span className="description mb2">
                      {i.description && i.description}
                    </span>

                    {/*  console.log(data[4].steps[0].details[0][0]); */}
                    {i?.details?.map((item) => {
                      return (
                        <>
                          {" "}
                          <span className="fw5 pl3 pr3 mb2 topic">
                            <em>{item[0]}</em>
                          </span>
                          <span className="mb4 pl3 pr3">{item[1]}</span>
                        </>
                      );
                    })}
                  </>
                );
              })
            ) : typeof steps[2] === "string" ? (
              <ol className="stepsOnly">
                {steps?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
            ) : null}
            <div id="circle-arrow-container">
                <a href="#top">
                    <FontAwesomeIcon size="2x" icon={faArrowCircleUp} id="back-to-top" />
                </a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

//   {/* 2 */}
//   <div className="card mt4">
//     <div className="title">Sample Title</div>
//     <div className="content">
//       <span className="section mb2">Section</span>
//       <span className="description mb2">
//         Lorem ipsus officiis obcaecati modi incidunt consequatur?
//       </span>

//       <div className="mb4">

//         <span className="topic fw6">Topic Sample 1:</span> f dsaf ds afds g
//         fg reg fsa v gfsafvsavsda gfsd g{" "}
//       </div>
//     </div>
//   </div>
