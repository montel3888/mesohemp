import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'react-bootstrap';
import InstagramFeed from 'react-ig-feed';
import ImgNextGen from '../ImgNextGen/ImgNextGen';
import 'react-ig-feed/dist/index.css';

import secSixTitleJp2 from '../../assets/main/sec-six/jp2/section-eight-title.jp2';
import secSixTitleJpg from '../../assets/main/sec-six/jpg/section-eight-title.jpg';
import secSixTitleWebp from '../../assets/main/sec-six/webp/section-eight-title.webp';

import secSixIGJp2 from '../../assets/main/sec-six/jp2/ig.jp2';
import secSixIGJpg from '../../assets/main/sec-six/jpg/ig.jpg';
import secSixIGWebp from '../../assets/main/sec-six/webp/ig.webp';

import secSixFBJpg from '../../assets/main/sec-six/jpg/fb.jpeg' 
import secSixYTJpg from '../../assets/main/sec-six/jpg/yt.jpeg' 

const SectionEightSpan = styled.span`
.section-eight {
  .col-inner{
    padding: 3% 0;
    margin: 0 auto;
    text-align: center;
    .title {
      width: 40%;
      margin: 0 auto;
    }
    .card-group { margin: 5% 0; }
    .social, .card {
      border: none;
      .card-img-top { 
        margin: 0 auto;
        width: 60% !important; 
      }
    }
    .social { 
      margin: 0 auto;
      img.card-img-top { width: 30% !important; }
      a { color: black !important; }
      a:hover { color: #343a40 !important; }
    }
  }
  
}


@media only screen and (max-width: 768px) {
  .section-eight {
    .title{
      width: 100% !important; 
      img{ width: 100%; }
    } 
  }
}`;

export default () => (
  <SectionEightSpan>
    <Row className='section-eight'>
      <Col xs={11} sm={11} md={11} lg={11} xl={8} className="col-inner">
        <div className="title">
          <ImgNextGen
            className="card-img-top"
            srcWebp={secSixTitleWebp}
            srcJp2={secSixTitleJp2}
            fallback={secSixTitleJpg}
            alt="Helping you care for your skin"
            width="377"
            height="59"
          />
        </div>
        <InstagramFeed
          token="IGQVJXRm1YVExQLU5HWDg5b1E3LS1MclV1MWlqNGd6SmpLa2dOOFdsaW1tQm1LNzFKRGNMRzlQNUMzM1VuT09PeEdXNHJmMmxfUHhpSzRRalE5SnlOMVhaR1E1Y1R4UnlBaktHdTc4TV9XU0VkR0xZASAZDZD"
          counter="3"
        />
        <Card style={{ width: '10rem' }} className='social'>
          <a href="https://www.instagram.com/mesohemp/" rel="noopener noreferrer" target="_blank">
            {/* <Card.Img variant='top' src={secSixIG} /> */}
            <ImgNextGen
              className="card-img-top"
              srcWebp={secSixIGWebp}
              srcJp2={secSixIGJp2}
              fallback={secSixIGJpg}
              alt="Photo of Instagram Icon"
            />
            <Card.Body>
              <Card.Title>@mesohemp</Card.Title>
            </Card.Body>
          </a>
        </Card>
      </Col>
    </Row>
  </SectionEightSpan>
)