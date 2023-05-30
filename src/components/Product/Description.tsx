import React from "react";
import { Col } from "react-bootstrap"

import ContactForm from "../ContactForm/ContactForm";
import ImgNextGen from '../ImgNextGen/ImgNextGen'

function Description({id}) {
  let width = window.innerWidth;
  return (
    <Col xs={12} sm={12} md={7} lg={7} xl={7}>
      <div className='product-info'>
        <div className='product-info-title'>
          <h1>{id.name}</h1>
        </div>
        <div className='product-info-desc'>
          <p>{id.bodytextOne}</p>
        </div>
        <div className='product-info-desc'>
          <h3>Indications </h3>
          <ul>
            {id.indications!.map((subitem, i) => {
              return <li key={i}>{subitem}</li>;
            })}
          </ul>
        </div>
        <div className='product-info-desc'>
          <h3>Benefits</h3>
          <ul>
            {id.benefits!.map((subitem, i) => {
              return <li key={i}>{subitem}</li>;
            })}
          </ul>
        </div>
        <hr className="product-info-divider"></hr>
        <div className='product-info-desc'>
          <h3>How to use:</h3>
          <p>{id.howtouse}</p>
          {id.howtouseImg!.map((subitem, i) => {
            return subitem.src !== '' ?
              <div key={i} className="product-info-instructions">
                {/* <Image src={subitem.src} alt={subitem.alt} fluid /> */}
                <ImgNextGen 
                  srcWebp={require("../../assets/products/"+id.id+"/webp/"+id.id+"-use-"+(i+1)+".webp")}
                  srcJp2={subitem.src}
                  fallback={subitem.src}
                  alt={subitem.alt}
                />
              </div>: null
          })}
          <p className="star">{id.star}</p>
        </div>
        <hr className="product-info-divider"></hr>
        <div className='product-info-ingredients'>
          <h3>Active ingredients</h3>
          <ul>
            {id.ingredients!.map((subitem, i) => {
              return <li key={i}>{subitem}</li>;
            })}
          </ul>
        </div>
        <div className='product-info-package'>
          <h3>Package</h3>
          <p>{id.package}</p>
        </div>
        {width < 768 ? <ContactForm />: null }
      </div>
    </Col>
  );
}

export default Description;