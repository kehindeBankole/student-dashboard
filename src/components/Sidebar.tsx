import React from 'react';
import './Sidebar.scss';
import { ReactComponent as BackIcon } from '../assets/arrowback.svg';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as TabLogo } from '../assets/tablogo.svg';
import { ReactComponent as DashboardIcon } from '../assets/dashboardicon.svg';
import { ReactComponent as CourseIcon } from '../assets/coursesicon.svg';
import { ReactComponent as MaterialsIcon } from '../assets/materialsicon.svg';
import { ReactComponent as CalendarIcon } from '../assets/calendaricon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settingsicon.svg';
import { ReactComponent as AttendanceIcon } from '../assets/attendanceicon.svg';
import { ReactComponent as GradeIcon } from '../assets/gradesicon.svg';
import { ReactComponent as TransIcon } from '../assets/transicon.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <BackIcon className="back_icon"/>
      <Logo className="logo" />
      <TabLogo className="tab" />
      <div className="sidebar_links">
        <div className="sidebar_links_item">
          <DashboardIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Dashboard</p>
        </div>
        <div className="sidebar_links_item">
          <CourseIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Courses</p>
        </div>
        <div className="sidebar_links_item">
          <MaterialsIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Materials</p>
        </div>
        <div className="sidebar_links_item">
          <CalendarIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Calendar</p>
        </div>
        <div className="sidebar_links_item">
          <TransIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Transcripts</p>
        </div>
        <div className="sidebar_links_item">
          <GradeIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Grades</p>
        </div>
        <div className="sidebar_links_item">
          <AttendanceIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Attendance</p>
        </div>
        <div className="sidebar_links_item">
          <SettingsIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Settings</p>
        </div>
        <div className="sidebar_links_item" id="sidebar_box">
          <SettingsIcon className="sidebar_links_item_icon" />
          {' '}
          <p>Level up your skills, 
Software Engineering MasterTrack® Certificate</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
