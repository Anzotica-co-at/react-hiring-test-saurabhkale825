import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../assets/Logo.png";
import PublicIcon from "@mui/icons-material/Public";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import useScreenWidth from "../../../hooks/useScreenWidth";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ navbarContainer, setNavbarContainer }) => {
  const screenWidth = useScreenWidth();

  return (
    <header className="header" aria-label="Top header with logo and controls">
      <div className="header-container">
        <div className="header-logo-container">
          <div
            className="header-menu-btn"
            onClick={() => setNavbarContainer((prev) => !prev)}
            aria-label={
              navbarContainer ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {navbarContainer ? (
              <CloseIcon aria-label="menu-button" />
            ) : (
              <MenuIcon aria-label="menu-button" />
            )}
          </div>
          {/* Logo Link */}
          <a
            href="#"
            className="header-logo-link"
            aria-label="Go to Ritz-Carlton homepage"
          >
            <img src={Logo} alt="Ritz-Carlton logo" width="70" height="auto" />
            <span className="header-title">THE RITZ-CARLTON</span>
          </a>
        </div>

        <div
          className="header-btn-container"
          aria-label="Language selector and user account"
        >
          <div
            className="header-langauage-container"
            aria-label="Select language: English"
          >
            <PublicIcon sx={{ fontSize: 20 }} />
            <span>English</span>
          </div>

          <div
            className="header-signup-btn-container"
            aria-label="Sign in or Join"
          >
            {screenWidth > 1200 ? (
              <button className="primary-btn">Sign in or Join</button>
            ) : (
              <PersonOutlineOutlinedIcon
                className="header-login-mobile-btn"
                sx={{ fontSize: 20 }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
