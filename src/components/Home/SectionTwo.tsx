import React, { Fragment } from 'react'
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Media from 'react-media';

import HempIcon from "../HempIcon";
import ImgNextGen from '../ImgNextGen/ImgNextGen';

import secTwoBottleImgJp2 from "../../assets/main/sec-two/jp2/bottle.jp2";
import secTwoBottleImgJpg from "../../assets/main/sec-two/jpg/bottle.jpg";
import secTwoBottleImgWebp from "../../assets/main/sec-two/webp/bottle.webp";

const SectionTwoSpan = styled.span`
.section-two {
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
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: 1.4px;
        margin-top: 24px;
      }
      p {
        letter-spacing: 1px;
        font-size: 1rem;
        word-break: break-word;
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
  .section-two {
    .row-inner {
      h1 { 
        font-size: 6vw !important;
        font-weight: 600 !important;
        text-align: center !important;
      }
      p { 
        font-size: 4vw !important;
      }
    }
  }
}
@media only screen and (max-width: 1199px) {
  .section-two {
    .row-inner {
      h1 { font-size: 1.3rem !important; }
    }
  }
}`;

function SectionTwo() {
  return (
    <SectionTwoSpan>
      <Row className='section-two'>
        <Col xs={11} sm={11} md={11} lg={11} xl={8} className="col-inner">
          <HempIcon />
            <Media queries={{
              medium: " (max-width: 767px)",
              large: "(min-width: 768px)"
            }}>
              {matches => (
                <Fragment>
                  {matches.medium && 
                    <Row className='row-inner'>
                      <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                        <div data-aos='fade-right' data-aos-delay='500'>
                          <h1>OUR HEMP SEED OIL</h1>
                          <p>
                            All our products contain Hemp Seed Oil (Cannabis Sativa Seed Oil)
                            which has a number of benefits including 460 types of essential
                            fatty acids, including omega 3, 6, 9, anti-aging effects,
                            anti-inflammatory qualities, prevention of skin problems from
                            stress and natural antioxidants.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  }
                  {matches.large && 
                    <Row className='row-inner'>
                      <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                        <div data-aos='fade-right' data-aos-delay='500'>
                          <h1>OUR HEMP SEED OIL</h1>
                          <p>
                            All our products contain Hemp Seed Oil (Cannabis Sativa Seed Oil)
                            which has a number of benefits including 460 types of essential
                            fatty acids, including omega 3, 6, 9, anti-aging effects,
                            anti-inflammatory qualities, prevention of skin problems from
                            stress and natural antioxidants.
                          </p>
                        </div>
                      </Col>
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
                  }
                </Fragment>
              )}
            </Media>
        </Col>
      </Row>
    </SectionTwoSpan>
  );
};
export default SectionTwo;