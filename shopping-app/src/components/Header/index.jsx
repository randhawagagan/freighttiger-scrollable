import React from "react";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import * as CONSTANTS from "../../utils/constants";
import BackIcon from "../../utils/back";

const Header = () => {
  let history = useHistory();
  const location = useLocation();
  const backVisible = location.pathname === CONSTANTS.CART_ROUTE;
  const handleClick = () => {
    history.push(CONSTANTS.HOME_ROUTE);
  };
  return (
    <>
      <header className="App-header">
        {backVisible && (
          <div className="image-container" onClick={handleClick}>
            <BackIcon />
          </div>
        )}

        <div className="header-text">
          {location.pathname === CONSTANTS.HOME_ROUTE ? "Fresh Stock" : "Cart"}
        </div>
      </header>
    </>
  );
};

export default Header;
