import React from 'react'
import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';
import Helmet from 'react-helmet'

import { Jumbotron, Row, Col, Container, CardDeck, Card, Image } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi'

import { PrRoomItems } from '../MenuItems/MenuItems';
import HempIcon from '../HempIcon';
import Breadcrumbs from '../Breadcrumbs';

const ArticleStyle = styled.div`
padding-top: 100px;
.jumbotron {
  background-position: center;
  background-size: cover;
  color: #ccc;
  position: relative;
  height: 50vh;
  z-index: -2;
  padding: 10rem 0;
  h1 {
    color: #ffffff;
    margin: revert;
    text-align: center;
    font-size: 3.5rem;
  }
}
.row {
  margin: 0 !important;
  position: relative;
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
.col-inner {
  padding: 3% 0 0 0;
  margin: 0 auto; 
  h2 {
    margin: 5% 20%;
    color: #4c4c4c;
    font-size: 2em;
    font-weight: 900;
    text-align: center;
  }
  h4 { margin: 5% 20% }
  p {
    margin: 5% 20%;
    letter-spacing: 1px;
    font-size: 100%;
    text-align: justify;
  }
  .desc {
    text-align: center;
    img {
      width: 60%;
    }
  }
  .card-deck {
    padding: 3% 0;
    .card {
      flex: 0 0 24% !important;
      margin-right: 5px !important;
      margin-bottom: 10px !important;
      margin-left: 5px !important;
      .link {
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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          text-align: center;
        }
      }
    }
    .coming_soon {
      .card-img-overlay { background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); }
      .card-title { 
        margin: 45% 15%;
        font-size: 25px;
        font-weight: 600;
        text-transform: uppercase;
        color: #e9ecef;
      }
    }
  }
}
.btnContainer {
  text-align: center;
  padding: 0 0 5rem 0;
  .btnSubmit {
    padding: 2em 3.1em;
    border: none;
    border-radius: 7px;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1.3px;
    color: #fff;
    background-color: #3fa056;
    box-shadow: 2px 2px 20px -7px #4c4c4c;
    cursor: pointer;
    &:hover {
        transform: scale(0.97);
    }
  }
}
@media only screen and (max-width: 1200px) {
  .line-down img{ vertical-align: top; }
  .jumbotron {
    background-size: cover;
    height: 25vh;
    padding: 2rem 0;
    h1 { font-size: 1.5rem; }
  }
  .col-inner {
    .desc img { width: 100%; }
    h2 { font-size: 1.2em; }
    p { margin: 5% 0%; }
  }
  .coming_soon {
    .card-title { 
      margin: 45% 7% !important;
      font-size: 25px;
      font-weight: 600;
      text-transform: uppercase;
      color: #e9ecef;
    }
  }
  .btnContainer {
    padding: 3rem 0;
  }
}
@media only screen and (max-width: 768px) {
  .hempicon {
    width: 20%;
    img{
      width: 100%;
    }
  }
}
`;

function Article() {
  const { id } = useParams<{ id: string }>();
  const NewPrRoomItems = PrRoomItems.filter((item) => item.id !== id);

  return (
    <ArticleStyle onContextMenu={(e)=> e.preventDefault()}>
      {PrRoomItems.map(function (d, idx) {
        return d.id === id ?
          <span key={idx}>
            <Jumbotron style={{ background: `url(${d.pic})`, backgroundPosition: 'center', backgroundSize: 'cover' }} fluid title="article image">
              <Container />
            </Jumbotron>
            <Row className='section-aboutus'>
              <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
                <Breadcrumbs id={d.title} />
                <HempIcon />
                <h2>{d.title}</h2>
                <p>{d.intro}</p>
                <h4>{d.hdr1}</h4>
                <p>{d.text1}</p>
                <h4>{d.hdr2}</h4>
                <p>{d.text2}</p>
                <h4>{d.hdr3}</h4>
                <p>{d.text3}</p>
                <h4>{d.hdr4}</h4>
                <p>{d.text4}</p>
                <h4>{d.hdr5}</h4>
                <p>{d.text5}</p>
              </Col>
              {/* <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
                <HempIcon />
                <h2>Other Articles</h2>
                <CardDeck>
                  {PrRoomItems.map((pb_item, pb_i) => 
                    <Card key={pb_i}>
                      <NavLink className='link' to={`articles${pb_item.path}`}>
                        <Card.Img variant='top' src={pb_item.pic} alt="article banner" />
                        <div className="overlay">
                          <span className="icon">
                            <BiSearchAlt size="4em" />
                          </span>
                        </div>
                        <div className='product-title text-center'>{pb_item.title}</div>
                      </NavLink>
                    </Card>
                  )}
                </CardDeck>
              </Col> */}
            </Row>
            <div className="breakdown" />
          </span>
          : null
      })}
    </ArticleStyle>
  )
}

export default Article;