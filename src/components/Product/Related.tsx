import React from "react";
import { NavLink } from "react-router-dom"
import { Row, Col, Image } from "react-bootstrap"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow } from "mdbreact"
import { BiSearchAlt } from 'react-icons/bi'

import HempIcon from "../../components/HempIcon"

function Related({all, related, id}) {
  return (
    <Row className='related'>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <HempIcon />
        {/* <h3>Related Products</h3> */}
        <MDBCarousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={true} multiItem>
          <MDBCarouselInner>
            <MDBRow>
            <MDBCarouselItem itemId="1">
            {related.slice(0, 4).map(function (rl_prod, i) {
              return id !== rl_prod.id && rl_prod.published === 1 ?
                <NavLink className='link related-product' to={rl_prod.path} key={i}>
                  <div className='related-product-img'>
                    <Image src={rl_prod.imgGrid[0].src} alt='' fluid />
                    <div className="overlay">
                      <span className="icon" >
                        <BiSearchAlt size="4em"/>
                      </span>
                    </div>
                  </div>
                  <div className='related-product-title'>{rl_prod.title}</div>
                </NavLink>
              : null
            })}
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            {related.slice(4, 8).map(function (rl_prod, i) {
              return id !== rl_prod.id && rl_prod.published === 1 ?
                <NavLink className='link related-product' to={rl_prod.path} key={i}>
                  <div className='related-product-img'>
                    <Image src={rl_prod.imgGrid[0].src} alt='' fluid />
                    <div className="overlay">
                      <span className="icon" >
                        <BiSearchAlt size="4em"/>
                      </span>
                    </div>
                  </div>
                  <div className='related-product-title'>{rl_prod.title}</div>
                </NavLink>
              : null
            })}
            </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>

        {all.map((cs_item, cs_i) => {
          return cs_item.published === 0 && cs_i >= 6 ?
            <div className='link related-product' key={cs_i}>
              <div className='related-product-img'><Image src={cs_item.imgGrid[0]} alt='' fluid /></div>
              {/* <div className='related-product-title'>{cs_item.title}</div> */}
            </div>
          : null
        })}
      </Col>
    </Row>
  );
}

export default Related;