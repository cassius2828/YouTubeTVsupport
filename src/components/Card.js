import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";

export const Card = ({
  title,
  heroStep,
  steps,
  handleAccordianToggle,
  index,
  accordian,
}) => {

  return (
    <>
      {" "}
      <div className="card mt5 mb5">
        <div id={title} className="title">
          {title}
          <FontAwesomeIcon
            onClick={handleAccordianToggle}
            className="dropdown"
            icon={accordian !== index ? faAngleDown : faAngleUp}
          />
        </div>
        {accordian === index ? (
          <div className="content">
            <span className="heroStep mb2">{heroStep}</span>

            {typeof steps[2] === "string" ? (
              <ol className="stepsOnly">
                {steps?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
            ) : true ? (
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
            ) : typeof steps[1] === "string" ? (
              <ol className="stepsOnly">
                {steps?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
            ) : null}
            <div id="circle-arrow-container">
              <a href="#top">
                <FontAwesomeIcon
                  size="2x"
                  icon={faArrowCircleUp}
                  id="back-to-top"
                />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
