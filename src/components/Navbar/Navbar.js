import React from "react";
import logo from "../Images/logo.png";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              id="MDB-logo"
              src={logo}
              alt="MDB Logo"
              draggable="false"
              height="30"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto align-items-center">
              <li class="nav-item">
                <a class="nav-link mx-2" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="Harmful">
                  Harmful Games
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="Reduceaddiction">
                  Reduce Addiction
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="FindAddictedkids">
                  Find Addicted Kids
                </a>
              </li>
              <li class="nav-item ms-3">
                <a class="btn btn-black btn-rounded" href="ContactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
