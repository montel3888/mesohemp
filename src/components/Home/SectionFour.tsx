import React from 'react'
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import SectionFourCardOne from "./SectionFourCardOne";
import SectionFourCardTwo from "./SectionFourCardTwo";
import SectionFourCardThree from "./SectionFourCardThree";

const SectionFourSpan = styled.span`
.section-four {
  .col-inner {
    padding: 3% 0;
    margin: 0 auto; 
    .row-card {
      .col{ 
        margin: 0 auto; 
        text-align: center;
      }
      &-three, .cs {
        display: inline-flex;
      }
      .card { 
        border: none !important;
        .loop {
          img { pointer-events: none; } 
          position: relative;
          .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .3s ease;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
          }
          &:hover .overlay {
            opacity: 1;
          }
          a:hover { color: white !important; }
          .icon {
            color: white;
            font-size: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
          }
        }
        .card-title {           
          text-transform: uppercase;
          color: #343a40 !important;  
          font-weight: 900;
          text-align: center;
        }
        .card-text { text-align: justify; }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .section-four {
    .row-card {
      .card-title { 
        font-size: 20px !important;
        font-weight: 400 !important;
      }
      &-three { display: block !important; }
      .card-text { font-size: 14px !important; }
      .cs.card-deck {
        display: block !important;
      }
    }
  }
}
@media only screen and (min-width: 1200px) {
  .cs img { width: 70%; }
  .cs_card { display: block !important; }
}
`;

export default () => (
  <SectionFourSpan>
      <Row className='section-four'>
        <Col xs={11} sm={11} md={11} lg={11} xl={8} className="col-inner">
          <Row className='row-card'>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="col cards">
              <SectionFourCardOne />
              <SectionFourCardTwo />
              <SectionFourCardThree />
            </Col>
          </Row>
        </Col>
      </Row>
  </SectionFourSpan>
)