import "./Nav.css";
import React from "react";
import netflix from "../src/netflix.png";
import search from "../src/search3.png";
import { FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-content">
        <div className="nav-left">
          <div className="nav-left-logo">
            <a href="#">
              <img
                className="nav-left-logo-align"
                src={netflix}
                height={"62px"}
                width={"120px"}
              />
            </a>
          </div>
          <div className="nav-left-navigation">
            <ul className="nav-left-navigation-list">
              <li className="nav-left-navigation-list-tabs">
                <a className="list-tabs-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-left-navigation-list-tabs">
                <a className="list-tabs-link" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-left-navigation-list-tabs">
                <a className="list-tabs-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-left-navigation-list-tabs">
                <a className="list-tabs-link" href="#">
                  Popular
                </a>
              </li>
              <li className="nav-left-navigation-list-tabs">
                <a className="list-tabs-link" href="#">
                  My List
                </a>
              </li>
              <li className="nav-left-navigation-list-tabs">
                <a className="list-tabs-link" href="#">
                  Anime
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <div className="left-search-button">
            <button className="search-button">
              <span className="search">
                <FaSearch className="search-icon" />
              </span>
            </button>
          </div>
          <div className="right-profile-button">
            <a href="#">
              <span>
                <img
                  className="nav-profile"
                  src="https://occ-0-3837-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXvHfQy06KCq87W959_ASfZ78T-34XjYXvXndSdD6n9DKjeKaMooe7LiYFm2kVFFtB_wH6sT4g_5TC1cDFHso1g86IUDq10.png?r=962"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
