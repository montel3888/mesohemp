import React from "react";
import { NavLink } from "react-router-dom";

import { BiSearchAlt } from 'react-icons/bi';
import { CardDeck, Card } from "react-bootstrap";
import ImgNextGen from '../ImgNextGen/ImgNextGen';
  
import secTwoCreamImgJp2 from "../../assets/main/sec-two/jp2/rev_cream.jp2";
import secTwoCreamImgJpg from "../../assets/main/sec-two/jpg/rev_cream.jpg";
import secTwoCreamImgWebp from "../../assets/main/sec-two/webp/rev_cream.webp";

import secTwoLotionImgJp2 from "../../assets/main/sec-two/jp2/lotion.jp2";
import secTwoLotionImgJpg from "../../assets/main/sec-two/jpg/lotion.jpg";
import secTwoLotionImgWebp from "../../assets/main/sec-two/webp/lotion.webp";

import secTwoSerumImgJp2 from "../../assets/main/sec-two/jp2/serum.jp2";
import secTwoSerumImgJpg from "../../assets/main/sec-two/jpg/serum.jpg";
import secTwoSerumImgWebp from "../../assets/main/sec-two/webp/serum.webp";

export default () => (
  <CardDeck className='row-card-three'>
    <Card data-aos='flip-left' data-aos-delay='90'>
      <NavLink className='link' to="/serum" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoSerumImgWebp}
            srcJp2={secTwoSerumImgJp2}
            fallback={secTwoSerumImgJpg}
            alt="Hemp seed oil Mesohemp Serum "
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>serum</Card.Title>
        </Card.Body>
      </NavLink>                  
    </Card>
    <Card data-aos='flip-left' data-aos-delay='80'>
      <NavLink className='link' to="/lotion" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoLotionImgWebp}
            srcJp2={secTwoLotionImgJp2}
            fallback={secTwoLotionImgJpg}
            alt="Skin protection Mesohemp Lotion"
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>lotion</Card.Title>
        </Card.Body>
      </NavLink>
    </Card>
    <Card data-aos='flip-left' data-aos-delay='90'>
      <NavLink className='link' to="/revitalising_cream" >
        <div className="loop">
          <ImgNextGen className="card-img-top"
            srcWebp={secTwoCreamImgWebp}
            srcJp2={secTwoCreamImgJp2}
            fallback={secTwoCreamImgJpg}
            alt="Mesohemp Revitalising Cream"
          />
          <div className="overlay">
            <span className="icon">
              <BiSearchAlt size="4em"/>
            </span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>Revitalising cream</Card.Title>
        </Card.Body>
      </NavLink>
    </Card>
  </CardDeck>
);
