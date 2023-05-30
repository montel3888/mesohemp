import React from "react";
import { NavLink } from "react-router-dom";

import { BiSearchAlt } from 'react-icons/bi';
import { CardDeck, Card } from "react-bootstrap";
import ImgNextGen from '../ImgNextGen/ImgNextGen';

import secTwoCleansingImgJp2 from "../../assets/main/sec-two/jp2/cleansing.jp2";
import secTwoCleansingImgJpg from "../../assets/main/sec-two/jpg/cleansing.jpg";
import secTwoCleansingImgWebp from "../../assets/main/sec-two/webp/cleansing.webp";

import secTwoFacialOilImgJp2 from "../../assets/main/sec-two/jp2/facial_oil.jp2";
import secTwoFacialOilImgJpg from "../../assets/main/sec-two/jpg/facial_oil.jpg";
import secTwoFacialOilImgWebp from "../../assets/main/sec-two/webp/facial_oil.webp";

export default () => (
  // <CardDeck className='cs'>
  //   <Card data-aos='flip-left' data-aos-delay='70' className='cs_card'>
  //     <ImgNextGen className="card-img-top"
  //       srcWebp={secTwoFacialOilImgWebp}
  //       srcJp2={secTwoFacialOilImgJp2}
  //       fallback={secTwoFacialOilImgJpg}
  //       alt="Mesohemp Facial oil"
  //     />
  //   </Card>
  //   <Card data-aos='flip-left' data-aos-delay='90' className='cs_card'>
  //     <ImgNextGen className="card-img-top"
  //       srcWebp={secTwoCleansingImgWebp}
  //       srcJp2={secTwoCleansingImgJp2}
  //       fallback={secTwoCleansingImgJpg}
  //       alt="Mesohemp Cleansing oil"
  //     />
  //   </Card>
  // </CardDeck>
  <CardDeck className='cs'>
    <Card data-aos='flip-left' data-aos-delay='90' className='cs_card'>
      <NavLink className='link' to="/facial_oil" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoFacialOilImgWebp}
            srcJp2={secTwoFacialOilImgJp2}
            fallback={secTwoFacialOilImgJpg}
            alt="Ultimate skincare Mesohemp Facial Oil"
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>Facial Oil</Card.Title>
        </Card.Body>
      </NavLink>                  
    </Card>
    <Card data-aos='flip-left' data-aos-delay='80' className='cs_card'>
      <NavLink className='link' to="/cleansing" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoCleansingImgWebp}
            srcJp2={secTwoCleansingImgJp2}
            fallback={secTwoCleansingImgJpg}
            alt="Mesohemp Cleansing Oil - delicate cleansing"
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>Cleansing Oil</Card.Title>
        </Card.Body>
      </NavLink>
    </Card>
  </CardDeck>

);
