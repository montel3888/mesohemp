import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "react-bootstrap";
// import LazyLoad from 'react-lazyload';

import lineDownImg from "../../assets/line-down.png";
import lineUpImg from "../../assets/line-up.png";

import secSevenImgJpg from "../../assets/main/sec-five/jpg/section-five-hdr.jpg";
import secSevenImgWebp from "../../assets/main/sec-five/webp/section-five-hdr.webp";

const SectionSevenSpan = styled.span`
.no-webp .section-seven {
    background: url(${secSevenImgJpg});
  }
.section-seven {
  background-image: url(${secSevenImgWebp});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;
}
@media only screen and (max-width: 768px) {
  .section-seven {
    background-attachment: inherit;
    height: 45vh;
  }
}`;

export default () => (
  <SectionSevenSpan>
    {/* <LazyLoad height={200} offset={100} once> */}
      <Row className='section-seven'>
        {/* <div className='line line-down'>
          <Image src={lineDownImg} alt='upper line for image' width="1366" height="23"/>
        </div> */}
        <Col></Col>
        {/* <div className='line line-up'>
          <Image src={lineUpImg} alt='lower line for image' width="1366" height="23"/>
        </div> */}
      </Row>
    {/* </LazyLoad> */}
  </SectionSevenSpan>
)