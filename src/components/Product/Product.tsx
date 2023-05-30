import React from 'react'
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Helmet from 'react-helmet'

import lineDownImg from "../../assets/line-down.png";
import lineUpImg from "../../assets/line-up.png";

import { ProductItems } from "../MenuItems/MenuItems";
import HempIcon from "../../components/HempIcon";
import Breadcrumbs from '../../components/Breadcrumbs';

import { Jumbotron, Row, Col, Container, Image } from "react-bootstrap";
import Photo from "./Photo";
import Related from './Related';
import Description from "./Description";
// const Description = lazy(() => import('./Description'));
// const Related = lazy(() => import('./Related'));

const ProductStyle = styled.div`
  padding-top: 100px;
  .breakdown { margin-top: 25%; }
  .jumbotron {
    color: #ccc;
    position: relative;
    height: 80vh;
    width: 100%;
    z-index: -2;
    padding: 10rem 0;
    h1 {
      color: #ffffff;
      margin: revert;
      text-align: center;
      font-size: 3.5rem;
    }
  }
  .line {
    width: 100%;
    position: absolute;
    img {
      width: 100%;
    }
    &-down img{
      vertical-align: top;
    }
    &-up {
      bottom: 0;
      vertical-align: top;
      img {
        vertical-align: bottom;
      }
    }
  }
  .row {
    margin: 0 !important;
    position: relative;
  }
  .col-inner {
    padding: 3% 0 0 0;
    margin: 0 auto; 
    .product {
      margin: auto;
      padding: 2.5em 0;
      /* min-width: 600px; */
      background-color: white !important;
      border-radius: 5px;
      height: 100%;
      box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
      &-photo {
        display: grid;
        grid-template-columns: 70% 30% ;
        grid-gap: 10px;
        position: relative;
        left: -2.5em;
        border-radius: 6px;
        box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
        background-color: white;
        padding: 10px;
        &-main {
          height: 70%;
          margin: auto;
        }
        &-album {
          padding-right: 10px;
          background-color: #fff;
          .react-photo-gallery--gallery{
            height: 100%;
            div {
              height: 100%;
              display: flex ;
              flex-flow: row wrap ;
              flex-direction: column ;
              align-content: center ;
              img {
                width: 100%;
                height: 23%;
              }
            }
          } 
          // .list-group-item {
          //   margin-bottom: 10px; 
          //   border-radius: 2px;
          //   transition: transform 0.5s, filter 1s ease-in-out;
          //   transform-origin: center center;
          //   &:hover {
          //     filter: brightness(40%);
          //     transform: scale(1.1);
          //   }
          // }
          // .list-group-item+.list-group-item { border-top-width: 1px; }
        }
      }
      &-info {
        padding: 0.8em 0;
        text-align: left;
        &-title {
          padding: 5px 20px;
          h1 {
            margin-bottom: 0.1em;
            color: #4c4c4c;
            font-size: 2em;
            font-weight: 900;
          }
        }
        &-instructions {
          display: inline-table;
          width: 33.3%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &-desc, &-ingredients, &-package, &-form {
          padding: 5px 20px;
          // p { padding: 20px 0 0 0; }
          h3 {
            margin-bottom: 0.4em;
            color: #4c4c4c;
            font-size: 1.5em;
            font-weight: 900;
          }
          ul {
            font-size: 1em;
            list-style: disc;
            margin-left: 1em;
          }
          li { margin-bottom: 0.5em; }
          .star {
            font-size: 10px;
            font-style: italic;
          }
        }
        &-divider { 
          margin: 10px 30px;
          border-top: 1px solid #545b62 !important; 
        }
        &-ingredients, &-package { display: inline-table; }
        &-form { margin-top: 50px; }
      }
      // .controls-top { display: none; }
      .carousel-indicators {
        bottom: -30px;
        li {
          background-color: #212529 !important;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      } 
      .related {
        &-product {
          width: 25%;
          padding: 10px;
          display: inline-table;
          text-align: center;
          &-img {
            position: relative;
            .overlay {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              height: 100%;
              width: 100%;
              opacity: 0;
              transition: .3s ease;
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
            }
            &:hover .overlay {
              opacity: 1;
            }
            a:hover { color: white !important; }
            .icon {
              color: white;
              font-size: 20px;
              position: absolute;
              top: 40%;
              left: 50%;
              transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              text-align: center;
            }
          }

        }
        h3, a, &-product-title {
          margin: 1em 0;
          color: #4c4c4c;
          font-size: 15px;
          font-weight: 900;
        }
        // a:hover{ color: #4c4c4c !important; }  
      } 
    }
  }

  @media only screen and (max-width: 1199px) {
    .breakdown {
      margin-top: 70%;
    }
    .jumbotron {
      // background-size: contain !important;
      height: 25vh;
      padding: 1rem 0;
      h1 { font-size: 1.5rem; }
    }
    .product {
      h1 { 
        text-align: center;
        font-size: 20px !important;
      }
      h3 { font-size: 17px !important; }
      ul { font-size: 15px !important; }
      &-photo {
        left: 0 !important;
        grid-template-columns: 100% !important;
        grid-template-rows: 65% 35%!important;
        &-main {
          height: 100% !important;
        }
        &-album { 
          padding-right: 0px !important;
          background-color: transparent !important;
          margin-top: 12%;
          .react-photo-gallery--gallery {
            height: auto !important;
            div {
              display: flex;
              flex-flow: row wrap !important;
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              justify-content: space-evenly;
              img { width: 23% !important; }
            }
          }
          // .list-group { 
          //   flex-direction: row !important;
          //   margin-top: 20px; 
          //   &-item {
          //     padding: .3rem .1rem !important;
          //   }
          // } 
        }
      }
    }

    .related {
      text-align: center;
      &-product {
        width: 45% !important;
        padding: 0 5px !important;
        &-title { 
          font-size: 14px !important;
          font-weight: 600 !important;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .product-info-instructions {
      display: block !important;
      width: 100% !important;
    }
  }
`;

function Product() {
  let { id } = useParams<{ id: string }>();
  const NewProductItems = ProductItems.filter((item) => item.id !== id);

  const setMeta = (title, description) => {
    document.title = title;
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === "description") {
        metas[i].content = description;
      }
    }
  }

  return (
    <ProductStyle onContextMenu={(e)=> e.preventDefault()}>
      {ProductItems.map(function (d, idx) {
        return d.id === id ?
          <span key={idx}>
            {setMeta(d.metaTitle, d.metaDesc)}
            {/* <input onChange={() => setTitle(d.metaTitle)} /> */}
            <Helmet>
              
              {/* <title>{d.metaTitle}</title> */}
              {/* <meta name="description" content={d.metaDesc} /> */}
              <meta property="og:title" content={d.metaTitle} />
              <meta property="og:image" content={d.imgGrid[0].src} />
              <meta property="og:description" content={d.metaDesc} />
              <script type="application/ld+json">{`
                {
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "${d.metaTitle}",
                  "description": "${d.metaDesc}",
                  "image": "${d.imgGrid[0].src}",
                  "brand": "Mesohemp"
                }
              `}
              </script>
            </Helmet>
            {/* <div className='line line-down'><Image src={lineDownImg} alt='line' /></div> */}
            {/* linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  */}
            <Jumbotron style={{ background: `url(${d.header})`, backgroundPosition: `center`, backgroundSize: `cover` }} fluid title={d.headerAlt}>
              <Container></Container>
              {/* <div className='line line-up'><Image src={lineUpImg} alt='line' /></div> */}
            </Jumbotron>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={9} className="col-inner">
                <Breadcrumbs id={d.name}/>
                <HempIcon /><br /><br />
                <Row className='product'>
                  <Photo id={d.id} imgGrid={d.imgGrid} amazonLink={d.amazonLink} />
                  <Description id={d}/>
                  <Related all={ProductItems} related={NewProductItems} id={d.id}  />
                </Row>
              </Col>
            </Row>
            <div className="breakdown"></div>
          </span>
        : null
      })}
    </ProductStyle>
  )
}

export default Product;