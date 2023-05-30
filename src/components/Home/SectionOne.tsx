import React from "react";
import styled from "styled-components";
import {
  Jumbotron,
  Container,
  Row,
  Image,
} from "react-bootstrap";
// import Helmet from 'react-helmet'
  
import lineDownImg from "../../assets/line-down.png";
import lineUpImg from "../../assets/line-up.png";

import secOneImgJpg from "../../assets/main/sec-one/jpg/section-one-hdr.jpg";
import secOneImgWebp from "../../assets/main/sec-one/webp/section-one-hdr.webp";
const SectionOneSpan = styled.span`
.section-one {
  .jumbotron {
    width: 100%;
    background: url(${secOneImgWebp});
    background-position: center;
    background-size: cover;
    min-height: 65vh !important;
    max-height: 65vh !important;
    color: #ccc;
    position: relative;
    z-index: -2;
  }
  .no-webp .jumbotron {
    background: url(${secOneImgJpg});
  }
}
@media only screen and (max-width: 1200px) {
  .section-one {
    .jumbotron  {
      background-size: cover;
      min-height: 20vh !important;
    }
  }
}
`;
const setMeta = () => {
  document.title = "Hemp Seed Oil Products | Mesohemp";
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === "description") {
      metas[i].content = "Products with a Hemp Seed Oil base. Mesohemp - Hemp Seed Oil Face Mask, Toner, Serum, Facial Oil, Cleansing Oil, Sun Block, Lotion, Multipurpose Cream";
    }
  }
}
export default () => (
  <SectionOneSpan>
    {setMeta()}
    {/* <Helmet>
      <title>Hemp Seed Oil Products | Mesohemp</title>
      <meta name="description" content="Products with a Hemp Seed Oil base. Mesohemp - Hemp Seed Oil Face Mask, Toner, Serum, Facial Oil, Cleansing Oil, Sun Block, Lotion, Multipurpose Cream" />
    </Helmet> */}
    <Row className='section-one'>
      {/* <div className='line line-down'><Image src={lineDownImg} alt='upper line for image' width="1366" height="23"/></div> */}
      <Jumbotron fluid title="Mesohemp products header">
        <Container></Container>
        {/* <div className='line line-up'><Image src={lineUpImg} alt='lower line for image' width="1366" height="23"/></div> */}
      </Jumbotron>
    </Row>
  </SectionOneSpan>
)