import React, { Fragment } from 'react'
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Media from 'react-media';
import ImgNextGen from '../ImgNextGen/ImgNextGen';

import secTwoBottleImgJp2 from "../../assets/main/sec-two/jp2/bottle.jp2";
import secTwoBottleImgJpg from "../../assets/main/sec-two/jpg/bottle.jpg";
import secTwoBottleImgWebp from "../../assets/main/sec-two/webp/bottle.webp";

const SectionThreeSpan = styled.span`
.section-three {
  .col-inner { 
    padding: 3% 0;
    margin: 0 auto; 
    .row-inner {
      padding: 2% 0%;
      h1 {
        text-transform: uppercase;
        color: #343a40 !important;
        text-align: justify;
        line-height: 1.4em;
        font-size: 2em;
        font-weight: 900;
        letter-spacing: 1.4px;
        margin-top: 24px;
      }
      p {
        letter-spacing: 1px;
        font-size: 1em;
        word-break: break-all;
        text-align: justify;
      }
      .bottleImg{
        text-align: center;
        margin: auto;
        img { 
          width: 100%; 
          height: 100%;
        }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .section-three {
    .row-inner {
      h1 { 
        font-size: 6vw !important;
        font-weight: 600 !important;
        text-align: center !important;
      }
      p { 
        font-size: 4vw !important;
        word-break: break-word !important;
      }
    }
  }
}
@media only screen and (max-width: 1199px) {
  .section-three {
    .row-inner {
      h1 { font-size: 1.3rem !important; }
    }
  }
}
`;


export default () => (
  <Media queries={{
    medium: "(max-width: 767px)",
  }}>
    {matches => (
      <Fragment>
        {matches.medium && 
          <SectionThreeSpan>
            <Row className='section-three'>
              <Col xs={11} sm={11} md={11} lg={11} xl={8} className="col-inner">
                <Row className='row-inner'>
                  <Col xs={12} sm={12} md={2} lg={2} xl={2} className='bottleImg'>
                    <ImgNextGen
                        srcWebp={secTwoBottleImgWebp}
                        srcJp2={secTwoBottleImgJp2}
                        fallback={secTwoBottleImgJpg}
                        alt="Photo of Hemp Oil Bottle"
                        width="397" height="480"
                    />
                  </Col>
                  <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div data-aos='fade-right' data-aos-delay='500'>
                      <h1>OUR PRODUCTS</h1>
                      <p>
                        As a company we are committed to developing, manufacturing and
                        commercializing innovation and pioneering medical solutions for
                        aesthetic applications in dedication to humanity’s quest for a
                        more beautiful, happier and quality way of life.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </SectionThreeSpan>
        }
      </Fragment>
    )}
  </Media>
)