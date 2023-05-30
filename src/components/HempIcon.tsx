import React from "react";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

import hempIconImg from "../assets/about/hemp-icon.jpg";

const IconDiv = styled.div`
display: flex;
margin: auto;
.icon-line {
  position: relative;
  top: 0;
  width: 25px;
  height: 1px;
  background-color: currentColor;
  margin: auto;
}
.left { margin-right: 13px; }
.right { margin-left: 13px; }
@media only screen and (max-width: 767px) {
  .hempicon {
    width: 20% !important;
  }
}
@media only screen and (max-width: 1199px) {
  .hempicon {
    width: 10%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
`;

export default () => (
  <IconDiv>
    <div className='icon-line left'></div>
    <div className="hempicon"><Image src={hempIconImg} rounded alt="Logo Hemp seed oil premium Quality" /></div>
    <div className='icon-line right'></div>
  </IconDiv>
);
