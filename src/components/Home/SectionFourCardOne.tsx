import React from "react";
import { NavLink } from "react-router-dom";

import { BiSearchAlt } from 'react-icons/bi';
import { CardDeck, Card } from "react-bootstrap";
import ImgNextGen from '../ImgNextGen/ImgNextGen';

import secTwoMaskImgJp2 from "../../assets/main/sec-two/jp2/mask.jp2";
import secTwoMaskImgJpg from "../../assets/main/sec-two/jpg/mask.jpg";
import secTwoMaskImgWebp from "../../assets/main/sec-two/webp/mask.webp";

import secTwoSunblockImgJp2 from "../../assets/main/sec-two/jp2/sunblock.jp2";
import secTwoSunblockImgJpg from "../../assets/main/sec-two/jpg/sunblock.jpg";
import secTwoSunblockImgWebp from "../../assets/main/sec-two/webp/sunblock.webp";

import secTwoTonerImgJp2 from "../../assets/main/sec-two/jp2/toner.jp2";
import secTwoTonerImgJpg from "../../assets/main/sec-two/jpg/toner.jpg";
import secTwoTonerImgWebp from "../../assets/main/sec-two/webp/toner.webp";

export default () => (
  <CardDeck className='row-card-three'>
    <Card data-aos='flip-left' data-aos-delay='90'>
      <NavLink className='link' to="/oil_mask" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoMaskImgWebp}
            srcJp2={secTwoMaskImgJp2}
            fallback={secTwoMaskImgJpg}
            alt="Mesohemp Hemp Seed oil face mask"
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>Hemp Seed Oil Face Mask</Card.Title>
        </Card.Body>
      </NavLink>                  
    </Card>
    <Card data-aos='flip-left' data-aos-delay='80'>
      <NavLink className='link' to="/sun_block" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoSunblockImgWebp}
            srcJp2={secTwoSunblockImgJp2}
            fallback={secTwoSunblockImgJpg}
            alt="Mesohemp Sun Block SPF50+"
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>SUN BLOCK</Card.Title>
        </Card.Body>
      </NavLink>
    </Card>
    <Card data-aos='flip-left' data-aos-delay='90'>
      <NavLink className='link' to="/toner" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoTonerImgWebp}
            srcJp2={secTwoTonerImgJp2}
            fallback={secTwoTonerImgJpg}
            alt="Mesohemp Toner with Hemp seed oil"
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>TONER</Card.Title>
        </Card.Body>
      </NavLink>
    </Card>
  </CardDeck>
);
