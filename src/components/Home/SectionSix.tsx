import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ImgNextGen from '../ImgNextGen/ImgNextGen';
import HempIcon from "../HempIcon";

import secTwoLeavesImgJp2 from "../../assets/main/sec-two/jp2/leaves.jp2";
import secTwoLeavesImgJpg from "../../assets/main/sec-two/jpg/leaves.jpg";
import secTwoLeavesImgWebp from "../../assets/main/sec-two/webp/leaves.webp";

const SectionSixSpan = styled.span`
.section-six {
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
  .section-six {
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

export default () => (
  <SectionSixSpan>
    <Row className='section-two section-six'>
      <Col xs={11} sm={11} md={11} lg={11} xl={8} className="col-inner">
        <HempIcon />
        <Row className='row-inner'>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className='bottleImg'>
            <ImgNextGen className="card-img-top"
              srcWebp={secTwoLeavesImgWebp}
              srcJp2={secTwoLeavesImgJp2}
              fallback={secTwoLeavesImgJpg}
              alt="Hemp seeds and leaves"
              width="640" height="428"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div data-aos='fade-right' data-aos-delay='500'>
              <h1>our hemp</h1>
              <p>
                Cultured in South Korea it is known as Green Hemp (a hybrid breed of imported cannabis from the Netherlands and Korean native species). This new species has been studied and cultured by the National Institute of Agricultural Science.
              </p>
              <h1>our oil</h1>
              <p>
                Our oil is unrefined, cold compression extracted oil to retain
                natural nutrients such as vitamin A, D, E and omega 3, 6, 9 from
                the hemp seeds.
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </SectionSixSpan>
)