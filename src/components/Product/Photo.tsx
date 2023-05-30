import React from "react";
import { Col, Image } from "react-bootstrap"

import ImageGrid from "./ImageGrid"
import ContactForm from "../ContactForm/ContactForm";
import ImgNextGen from '../ImgNextGen/ImgNextGen'

import amazon from "../../assets/products/amazon.png"

function Photo({id, imgGrid, amazonLink}) {
  let width = window.innerWidth;
  return (
    <Col xs={12} sm={12} md={5} lg={5} xl={5}>
      <div className="product-photo">
        <div className="product-photo-main">
          <Image src={imgGrid[0].src} alt={imgGrid[0].alt} data-png-source={imgGrid[0].src} className="test" fluid />
          {/* <ImgNextGen className="card-img-top"
            srcWebp={require("../../assets/products/"+id+"/webp/"+id+"-1.webp")}
            srcJp2={imgGrid[0].src}
            fallback={imgGrid[0].src}
            alt={imgGrid[0].alt}
          /> */}
        </div>
        <div className="product-photo-album">
          <ImageGrid id={id} />
        </div>
      </div>
      { id !== "multipurpose_cream" &&
      <div className="amazon-pic">
        <a className='link related-product' href={amazonLink} target="_blank">
          <ImgNextGen 
            srcWebp={amazon}
            srcJp2={amazon}
            fallback={amazon}
            alt="Available on amazon"
          />
        </a>
      </div>
      }
      {width > 768 ? <ContactForm />: null }
    </Col>
  );
}

export default Photo;