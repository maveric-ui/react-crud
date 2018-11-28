import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './SidebarComponent.less';

class SidebarComponent extends Component {
  renderImgOne = () => {
    return (
        <svg className="img__one" xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19">
          <g fill="#DFE5DD" fillRule="evenodd">
            <rect width="15" height="3" rx="1.5"/>
            <rect width="15" height="3" y="8" rx="1.5"/>
            <rect width="15" height="3" y="16" rx="1.5"/>
            <rect width="3" height="19" x="18" rx="1.5"/>
          </g>
        </svg>
    )
  };

  renderImgTwo = () => {
    return (
        <svg className="img__two" xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25">
          <g fill="none" fillRule="evenodd">
            <path stroke="#DFE5DD" strokeWidth="3"
                  d="M1.5 13.5V22A1.5 1.5 0 0 0 3 23.5h17a1.5 1.5 0 0 0 1.5-1.5v-8.5h-20z"/>
            <rect width="19" height="3" x="2" y="6" fill="#DFE5DD" rx="1.5"/>
            <rect width="15" height="3" x="4" fill="#DFE5DD" rx="1.5"/>
            <rect width="5" height="2" x="9" y="17" fill="#DFE5DD" rx="1"/>
          </g>
        </svg>
    )
  };

  renderImgTree = () => {
    return (
        <svg className="img__tree" xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19">
          <g fill="none" fillRule="evenodd">
            <rect width="22" height="16" x="1.5" y="1.5" stroke="#DFE5DD" strokeWidth="3" rx="3"/>
            <rect width="13" height="2" x="1" y="5" fill="#DFE5DD" rx="1" transform="rotate(30 7.5 6)"
                  aria-label="arrow"/>
            <rect width="13" height="2" x="11" y="5" fill="#DFE5DD" rx="1" transform="rotate(-30 17.5 6)"
                  aria-label="arrow"/>
          </g>
        </svg>
    )
  };

  renderImgFour = () => {
    return (
        <svg className="img__four" xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19">
          <g fill="#DFE5DD" fillRule="evenodd">
            <rect width="3" height="19" rx="1.5"/>
            <rect width="3" height="15" x="6" y="4" rx="1.5"/>
            <rect width="3" height="11" x="12" y="8" rx="1.5"/>
          </g>
        </svg>
    )
  };

  render() {
    return (
          <div className="sidebar-container">
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <NavLink  to="/employees/" activeClassName="active">{this.renderImgOne()}</NavLink>
                </li>
                <li className="sidebar__item">
                  <NavLink  to="/archive/" activeClassName="active">{this.renderImgTwo()}</NavLink>
                </li>
                <li className="sidebar__item">
                  <NavLink  to="/email/" activeClassName="active">{this.renderImgTree()}</NavLink>
                </li>
                <li className="sidebar__item">
                  <NavLink  to="/statistic/" activeClassName="active">{this.renderImgFour()}</NavLink>
                </li>
              </ul>
          </div>
    )
  }
}

export default SidebarComponent