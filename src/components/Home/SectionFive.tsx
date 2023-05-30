import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { ProductItems } from "../MenuItems/MenuItems";

import lineDownImg from "../../assets/line-down.png";
import lineUpImg from "../../assets/line-up.png";

import secFiveImgJpg from "../../assets/main/sec-three/jpg/cannabis-bg.jpg";
import secFiveImgWebp from "../../assets/main/sec-three/webp/cannabis-bg.webp";
const SectionFiveSpan = styled.span`
.no-webp .section-five {
  background: url(${secFiveImgJpg});
}
.section-five {
  background-image: url(${secFiveImgWebp});
  /* background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${secFiveImgWebp}); */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .col {
    color: #fff;
    // max-width: 600px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 46px 0;
    .col-inner a {
      color: black;
    }
  }
  h1 {
    color: #212529;
    font-size: 2.5em;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    margin-bottom: 24px;
  }
  h4 {
    font-size: 25px;
    text-transform: uppercase;
    padding-bottom: 6px;
    font-weight: bold;
    a:hover {
      // color: #6c757d !important;
      color: #f8f9fa !important;
    }
  }
  ul {
    list-style: none;
    margin: 0 0 25px 0;
    padding: 0;
    line-height: 22px;
    letter-spacing: 1px;
    font-weight: bold;
    li {
      padding-bottom: 10px;
    }
  }
}
@media only screen and (max-width: 768px) {
  .section-five {
    h1 {
      font-size: 25px;
    }
    h4 {
      font-size: 16px;
    }
  }
}
`;

export default () => (
  <SectionFiveSpan>
    {/* <LazyLoad height={200} offset={100} once> */}
      <Row className='section-five'>
        {/* <div className='line line-down'>
          <img src={lineDownImg} alt='line' />
        </div> */}
        <Col >
          <h1>Mesohemp Products </h1>
          <div className='col-inner'>
            {ProductItems.map((list_item, i) => {
              return list_item.published === 1 ?
                <h4 className='' key={i}> <NavLink to={list_item.path}>{list_item.title}</NavLink> </h4>
              : null
            })}
          </div>
        </Col>
        {/* <div className='line line-up'>
          <img src={lineUpImg} alt='line' />
        </div> */}
      </Row>
    {/* </LazyLoad> */}
  </SectionFiveSpan>
)