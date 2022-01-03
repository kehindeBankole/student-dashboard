import { ReactElement } from "react";
import "./ActiveProgram.scss";
import { ReactComponent as More } from "../assets/horimore.svg";
import { ReactComponent as Ulogo } from "../assets/ulogo.svg";
import { ReactComponent as Chart } from "../assets/chart.svg";
function ActiveProgram():ReactElement {
  return (
    <div className="card-container">
      <div className="card-container_title">
        <p>Active Programs</p>
        <More className="horimore" />
      </div>
      <div className="card-container_unidetailspart">
          <div className="main">
        <div className="box">
          <div className="logobox">
            <Ulogo />
          </div>
          <div className="namebox">
            <div className="degree">
              <p> Master of Computer Science </p>
            </div>
            <div className="name">University of Upstate at Brookstone</div>
          </div>
        </div>

        <div className="grades box">
          {/* {
        Array.from({length: 3}, (v, i) => i).map((d)=>(
            <div><p>1</p></div>
        ))
    } */}
          <div>
            <b>1</b>
            <small>Overdue Assignments</small>
          </div>
          <div>
            <b>5</b>
            <small>Remaining Absenses</small>
          </div>
          <div>
            <b>A-</b>
            <small>AcademicAverage</small>
          </div>
        </div>
        <div className="box chart"><Chart/></div>
        </div>
      <hr style={{border:'1px solid #EEEEEE' , width:'100%'}}/>
      <div className="main">
      <div className="box">
          <div className="logobox">
            <Ulogo />
          </div>
          <div className="namebox">
            <div className="degree">
              <p> Master of Computer Science </p>
            </div>
            <div className="name">University of Upstate at Brookstone</div>
          </div>
        </div>

        <div className="grades box">
          {/* {
        Array.from({length: 3}, (v, i) => i).map((d)=>(
            <div><p>1</p></div>
        ))
    } */}
          <div>
            <b>1</b>
            <small>Overdue Assignments</small>
          </div>
          <div>
            <b>5</b>
            <small>Remaining Absenses</small>
          </div>
          <div>
            <b>A-</b>
            <small>AcademicAverage</small>
          </div>
        </div>
        <div className="box chart"><Chart/></div>
</div>      </div>
    </div>
  );
}

export default ActiveProgram;
