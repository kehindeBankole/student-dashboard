import React from "react";
import "./Research.scss";
import { ReactComponent as Time } from "../assets/time.svg";
function Research() {
  return (
    <div className="research-container">
      <div className="research-container_inner-card">
        <div className="week-card">
          <div className="week-card_first-line">
            <div>
              <p id="research-text">UX Research - Week 3</p>
              <p id="cert-text">CERTIFICATE UX/UI design</p>
            </div>
            <div>
              <p id="date">08</p>
              <p id="month">april</p>
            </div>
          </div>
          <div className="week-card_second-line">
            <div style={{display:"flex"}}>
            <Time style={{alignSelf:"center"}}/>
              <p id="progress">In Progress</p>
            </div>
            <div>
              <p id="join">join now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
