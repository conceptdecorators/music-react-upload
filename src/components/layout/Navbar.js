import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

import * as FaIcons from "react-icons/fa";
import ImageOne from "../../img/zilah-log-small.png";

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    // <nav className="navbar bg-dark">
    //   <h1>
    //     <Link to="/">
    //       {/* <i className="fas fa-code"></i> DevConnector */}
    //       <img src={ImageOne} className="logo-dark" alt="logo" />
    //     </Link>
    //   </h1>
    //   <ul className="navbar_menu">
    //     <li className="navbar_item">
    //       <a href="/" className="navbar_links">
    //         {" "}
    //         Home{" "}
    //       </a>
    //     </li>
    //     <li className="navbar_item">
    //       <a href="/services" className="navbar_links">
    //         {" "}
    //         Services{" "}
    //       </a>
    //     </li>
    //     <li className="navbar_item">
    //       <a href="/sync" className="navbar_links">
    //         {" "}
    //         Sync{" "}
    //       </a>
    //     </li>
    //     <li className="navbar_item">
    //       <a href="/about" className="navbar_links">
    //         {" "}
    //         About{" "}
    //       </a>
    //     </li>
    //     <li className="navbar_item">
    //       <a href="/tech" className="navbar_links">
    //         {" "}
    //         Artist{" "}
    //       </a>
    //     </li>
    //     <li className="navbar_item">
    //       <a href="/feedback" className="navbar_links">
    //         {" "}
    //         Feedback{" "}
    //       </a>
    //     </li>
    //     <li className="navbar_btn">
    //       <a href="/blog" className="button">
    //         Blog
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
    <div className="header__middle">
      <div className="container-nav">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img src={ImageOne} alt="logo" />
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/About`}
                  >
                    {" "}
                    About{" "}
                  </NavLink>{" "}
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="/Services">
                    {" "}
                    Services <FiChevronDown />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Sync`}
                      >
                        {" "}
                        Sync{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Faq`}
                      >
                        {" "}
                        Faq{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Upload`}
                  >
                    {" "}
                    Upload{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Blog`}
                  >
                    {" "}
                    Blog{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`https://zilah-music-community.circle.so/home`}
                  >
                    {" "}
                    Community{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
