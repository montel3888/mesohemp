import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TagManager from 'react-gtm-module';
import Helmet from 'react-helmet'

import { AboutItems, ProductItems } from '../MenuItems/MenuItems';
// import LoadJivo from './LoadJivo';

import lineDownImg from '../../assets/line-down.png';
import footerImgJpg from '../../assets/main/sec-three/jpg/cannabis-bg.jpg';
import footerImgWebp from '../../assets/main/sec-three/webp/cannabis-bg.webp';

// const Jivosite = lazy(() => import("./Jivosite"));
// const TagManagerA = lazy(() => import("react-gtm-module"));

const FooterStyles = styled.div`
  .no-webp {
    background: url(${footerImgJpg});
  }
  background: url(${footerImgWebp});
  .container {
    color: black;
    padding-top: 5%;
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    text-align: center;
  }
  .second-col {
    padding-left: 3rem;
  }
  .line.line-down {
    position: absolute;
    width: 100%; 
    img{ 
      width: 100%; 
      height: 100%;
      vertical-align: top !important;
    }
  }
  li a{ 
    color: black; 
    &:hover {
      color: #f8f9fa !important;
    }
  }
  @media only screen and (max-width: 480px) {
    .container {
      padding-top: 7%;
      padding-left: 2rem;
      text-align: center;
      .mobile{
        display:none;
      }
    }    
  }
`;
const tagManagerArgs = {
  gtmId: 'GTM-K25SRDW'
}
export default () => (
  <FooterStyles onContextMenu={(e)=> e.preventDefault()}>
    {/* <Suspense fallback={<span>loading</span>}> */}
    {TagManager.initialize(tagManagerArgs)}
    {/* {loaded ? <Jivosite /> : ''} */}
    {/* </Suspense> */}
    <Helmet>
      <script src="//code.jivosite.com/widget/We96hxjp9R" id="jivoload" async />
    </Helmet>
    {/* <div className='line line-down'>
      <Image src={lineDownImg} alt='upper line for image' width="1366" height="23"/>
    </div> */}
    <Container>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={12} md={4}>
          <h4>Head Office</h4>
          <p>
            616 Yeongdong-daero, Gangnam-gu,
            Seoul, South Korea, 06081
          </p>
          <p>Tel: +82-10-4711-5312</p>
          <NavLink to='/sitemap'> Sitemap </NavLink>
        </Col>
        <Col xs={12} md={4} className="mobile">
          <h4>About us</h4>
          <ul className='list-unstyled'>
            {AboutItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.path}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col xs={12} md={4} className="mobile">
          <h4>Products</h4>
          <ul className='list-unstyled'>
            {ProductItems.map((item, index) => {
              return item.published === 1 ?
                <li key={index}>
                  <NavLink to={item.path}>
                    {item.title}
                  </NavLink>
                </li>
                : null
            })}
          </ul>
        </Col>
      </Row>
      <Row className='footer-bottom'>
        <Col xs={12} md={12} className="mobile">
          <p className='text-xs-center'>
            COPYRIGHT &copy; KORU Pharmaceuticals ALL RIGHTS RESERVED
          </p>
        </Col>
      </Row>
    </Container>
  </FooterStyles>
)