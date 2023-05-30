import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { AboutItems, ProductItems } from "../MenuItems/MenuItems";

const DropdownStyle = styled.ul`
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
  z-index: 101;
  li {
    background: white;
    cursor: pointer;
    color: black;
    a {
      color: black !important;
    }
    a:hover {
      background: black;
      color: #fff !important;
      text-decoration: none;
    }
  }

.clicked {
  display: none;
}
.dropdown-link-meso {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
}
@media only screen and (max-width: 1200px) {
  .fa-caret-down {
    display: none;
  }


    width: 100%;
    position: absolute;
    top: 170px;
    list-style: none;
    text-align: center;
  
}`;

function DropdownAbout(props) {
  const [click, setClick] = useState(false);
  return (
    <DropdownStyle
      onClick={props.onCloseMobileMenu}
      className={click ? "dropdown-menu-meso clicked" : "dropdown-menu-meso"}
    >
      {AboutItems.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </DropdownStyle>
  );
}

function DropdownProducts(props) {
  const [click, setClick] = useState(false);
  return (
      <DropdownStyle
        onClick={props.onCloseMobileMenu}
        className={click ? "dropdown-menu-meso clicked" : "dropdown-menu-meso"}
      >
        {ProductItems.map((item, index) => {
          return item.published === 1 ?
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </NavLink>
            </li>
          : null
        })}
      </DropdownStyle>
  );
}

export { DropdownProducts, DropdownAbout };
