import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Helmet from 'react-helmet'
import { AboutItems, ProductItems } from "../components/MenuItems/MenuItems";

const SitemapStyles = styled.div`
  padding-top: 110px;
  .row {
    margin: 0 auto !important;
    position: relative;
    width: 50%;
    height: 50vh;
  }
  .col-inner {
    padding: 3% 0 0 0;
    margin: 0 auto; 
  }
  li { list-style: none; }
`;

export default () => (
  <SitemapStyles>  
    <Helmet>
      <meta name="robots" content="noindex, follow, noarchive" /> 
    </Helmet>
    
    <Row>
      <Col xs={10} sm={10} md={10} lg={4} xl={4} className="col-inner">
        <h4>About Us</h4>
        <ul>
          {AboutItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className={item.cName} to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Col>
      <Col xs={10} sm={10} md={10} lg={4} xl={4} className="col-inner">
        <h4>Products</h4>
        <ul>
          {ProductItems.map((item, index) => {
            return item.published === 1 ?
              <li key={index}>
                <NavLink className={item.cName} to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            : null
          })}
        </ul>
      </Col>
      <Col xs={10} sm={10} md={10} lg={4} xl={4} className="col-inner">
        <h4>Contact Us</h4>
        <ul>
          <li >
            <NavLink to='/contact_us'> Contact Us </NavLink>
          </li>
        </ul>
      </Col>
    </Row>
  </SitemapStyles>
);
