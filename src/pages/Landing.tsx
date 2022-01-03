import React, { ReactElement } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Landing.scss";
import { ReactComponent as CustomizeIcon } from "../assets/customise.svg";
import ActiveProgram from "../components/ActiveProgram";
function Landing():ReactElement {
  return (
    <div>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <Header />
        <div className="main-container">
          <div className="main-container_left">
            <div className="name-bar">
              <h3>Hello, Mia!</h3>
              <p>
                {" "}
                <CustomizeIcon className="customize" />
                Customize
              </p>
            </div>
            <ActiveProgram/>
          </div>
          <div className="main-container_right"></div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
