import React from 'react'
import './Header.scss'
import { ReactComponent as SearchIcon } from '../assets/headersearch.svg';
import { ReactComponent as MessageIcon } from '../assets/messageicon.svg';
import { ReactComponent as AlertIcon } from '../assets/alerticon.svg';
import { ReactComponent as MenuIcon } from '../assets/menuicon.svg';
import { ReactComponent as DesktopMenuIcon } from '../assets/desktopmenuicon.svg';
import { ReactComponent as TabLogo } from '../assets/tablogo.svg';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import usericon from '../assets/userimage.png'
import lo from '../assets/Group.png'
function Header() {
    return (
        <>
        <div className="header">
            <SearchIcon className="search-icon" />
            <p className="header_instruction">Search course, student or instructor</p>
            <div className="user-actions">
                <div className="divider"></div>
                <MessageIcon className="message-icon" />
                <AlertIcon className="alert-icon" />
                <img src={usericon} alt="user icon" style={{marginLeft:30,marginTop:-4,width: '36.21px', height: '36.31px'}}/>
                <div className="username" style={{marginLeft:11}}>
                   <p className="name"><b>Mia V</b>
                   <br/>
                  <span> student</span>
                   </p> 
                   {/* <p className="student">Student</p> */}
                </div>
                <MenuIcon className="menu-icon"/>
                <DesktopMenuIcon className="desktopmenu-icon"/>
            </div>
        </div>
        <div className="mobile-header">
            <div className="mobile-header_logo-container">
            <img src={lo} style={{width:22,height:30}}/>
            </div>
            <input type="text" className="mobile-header_search"/>
            <MessageIcon className="message-icon" style={{margin:0}} />
        <div className="mobile-header_image">
        <img src={usericon} alt="user icon" style={{alignSelf:'center',width:'29.52px', height: '29.52px'}}/>
        <div className="mobile-header_online"></div>
        </div>
        </div>
        </>
    )
}

export default Header
