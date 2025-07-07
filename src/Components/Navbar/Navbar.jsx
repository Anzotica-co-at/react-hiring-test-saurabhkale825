import React from "react";
import "./Navbar.css";

const Navbar = ({ navbarContainer }) => {
  return (
    <div
      className={`navbar ${!navbarContainer ? "hide-on-mobile" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div
          className="navbar-container-navlink-container"
          aria-label="Primary links"
        >
          <div className="navbar-individual-navlink" role="link">
            Hotels & Resorts
          </div>
          <div className="navbar-individual-navlink" role="link">
            Ritz-Carlton Reserve
          </div>
          <div className="navbar-individual-navlink" role="link">
            Residences
          </div>
          <div className="navbar-individual-navlink" role="link">
            Yachts
          </div>
          <div className="navbar-individual-navlink" role="link">
            About The ritz-carlton
          </div>
          <div className="navbar-individual-navlink" role="link">
            The Journey
          </div>
        </div>

        <div className="navbar-btn-contianer">
          <button className="secondary-btn" aria-label="Reserve your stay">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
