/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/pages/HempEffects/HempEffects.tsx

Created with;
$ npx generate-react-cli component HempEffects --type=page

*/

import React from "react";
import { RouteComponentProps, NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from "styled-components";
import { Jumbotron, Row, Col, CardDeck, Card, Image, Carousel } from "react-bootstrap";
import { BiSearchAlt } from 'react-icons/bi';

import { ProductItems } from "../../components/MenuItems/MenuItems";
import HempIcon from "../../components/HempIcon";
import Breadcrumbs from '../../components/Breadcrumbs';
import './HempEffects.scss'

import hempEffectsHdr from "../../assets/about/hemp_effects/hemp-effects-hdr.jpg";
import lineDownImg from "../../assets/line-down.png";
import lineUpImg from "../../assets/line-up.png";
import cannabis from "../../assets/about/hemp_effects/cannabis.jpg";
import cannabisOil from "../../assets/about/hemp_effects/cannabisOil.jpg";
import heAging from "../../assets/about/hemp_effects/hemp-effects-anti-aging.jpg";
import heInflammatory from "../../assets/about/hemp_effects/hemp-effects-anti-inflammatory.jpg";
import heAntioxidants from "../../assets/about/hemp_effects/hemp-effects-natural-antioxidants.jpg";
import heDrop from "../../assets/about/hemp_effects/hemp-effects-one-drop.jpg";

const HempEffectsDiv = styled.div`
.jumbotron {
  // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hempEffectsHdr});
  background: url(${hempEffectsHdr});
}
.product-title { 
  font-size: 18px !important;
  font-weight: 600 !important;
  margin: 10px 0 10px 0;
  color: black;
}
`;


export default class HempEffects extends React.PureComponent<IHempEffectsProps, IHempEffectsState> {

  constructor(props: IHempEffectsProps) {
    super(props);
    this.state = {
      name: this.props.history.location.pathname.substring(
        1,
        this.props.history.location.pathname.length
      ).replace('/', '')
    }
  }

  // If you need 'shouldComponentUpdate' -> Refactor to React.Component
  // Read more about component lifecycle in the official docs:
  // https://reactjs.org/docs/react-component.html

  /*
  public shouldComponentUpdate(nextProps: IMyPageProps, nextState: IMyPageState) {
    // invoked before rendering when new props or state are being received.
    return true // or prevent rendering: false
  } */

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IHempEffectsProps, IHempEffectsState> = (props:IHempEffectsProps, state: IHempEffectsState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IHempEffectsProps, prevState: IHempEffectsState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IHempEffectsProps, prevState: IHempEffectsState, snapshot: IHempEffectsSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    const setMeta = () => {
      document.title = "Mesohemp | Hemp Information, medical and cosmetic effects";
      const metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === "description") {
          metas[i].content = "The effect of Hemp on skin conditions. Benefits of using our natural products. Mesohemp Cosmetic line";
        }
      }
    }
    return (
      <HempEffectsDiv className="HempEffects" onContextMenu={(e)=> e.preventDefault()}>
        {setMeta()}
        <Helmet>
          {/* <title>Mesohemp | Hemp Information, medical and cosmetic effects </title> */}
          {/* <meta name="description" content="The effect of Hemp on skin conditions. Benefits of using our natural products. Mesohemp Cosmetic line " /> */}
          <meta property="og:title" content="Mesohemp | Hemp Information, medical and cosmetic effects " />
          <meta property="og:image" content={hempEffectsHdr} />
          <meta property="og:description" content="The effect of Hemp on skin conditions. Benefits of using our natural products. Mesohemp Cosmetic line " />
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KORU PHARMACEUTICALS CO., LTD.",
              "url": "https://mesohemp.com/",
              "logo": "https://mesohemp.com/logo192.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+82 10 7744 0914",
                "contactType": "sales",
                "availableLanguage": ["en","Korean"]
              }
            }
          `}
          </script>
        </Helmet>
        {/* <div className='line line-down'><Image src={lineDownImg} alt='line' /></div> */}
        <Jumbotron fluid title="Hemp Information, medical and cosmetic effects">
          {/* <Container><h1>Hemp Effects</h1></Container> */}
          {/* <div className='line line-up'><Image src={lineUpImg} alt='line' /></div> */}
        </Jumbotron>
        <Row className='section-hempeffects'>
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
            <Breadcrumbs id={"Hemp Effects"}/>
            <HempIcon />
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text'>
                <div className='imgStyle2'>
                  <Image src={cannabisOil} alt='Cream with hemp seed oil base' />
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text'>
                <h3 className='text-heading'>Medical effects</h3>
                <p className='text-benefits'>
                  Affects endocrine albumine receptor activity, reduces inflammation
                  and helps reduce chronic pain by interacting with
                  neurotransmitters. Effective on anxiety and depression, used to
                  treat children with post-traumatic stress disorder. Used to treat
                  the side effects of cancer treatments such as nausea, dizziness,
                  and other symptoms caused by cancer. Effective for diseases such as
                  Alzheimer's, Parkinson’s disease, Huntington’s disease, anxiety,
                  depression, rheumatoid arthritis, inflammatory bowel disease,
                  Crohn’s disease, diabetes, etc.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text'>
                <h3 className='text-heading'>Cosmetic effects</h3>
                <p className='text-benefits'>
                  Anti-inflammatory effects, and helps cure acne and other skin
                  problems from stress. Strictly concentrates on the cells that
                  cause skin problems, therefore effectively calming down sensitive
                  skin Contains 460 natural substances including Omega 3, 6, 9.
                  Helps skin stay hydrated and produces lipids, which may help
                  ease side effects of psoriasis which is itchiness, and is
                  also helpful for atopic skin types. Antioxidants help prevent water
                  and oil loss, ultimately preventing wrinkles (anti-aging effects).
                </p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text'>
                <div className='imgStyle1'>
                  <Image src={cannabis} alt='Jar with hemp seed oil' />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className='text'>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={heDrop}
                      alt='Strength of 1 drop of Hemp Seed Oil'
                    />
                    <Carousel.Caption>
                      <h2 className='text-heading'>
                        The strength of 1 drop of Hemp Seed Oil
                      </h2>
                      <ul>
                        <li>
                        - 460 types of essential fatty acids, including Omega 3, 6, 9
                        </li>
                        <li>
                        - Produces fatty acids that are similar to skin lipid structure
                        </li>
                        <li>
                        - Contains essential fatty acids and forms lipids which hydrate the skin
                        </li>
                        <li>- Omega 3 reduces inflammation related to psoriasis</li>
                        <li>
                        - Blocks external hazardous substances and strengthens the skin barrier
                        </li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={heAging}
                      alt='Anti-aging Hemp Effects'
                    />
                    <Carousel.Caption>
                      <h2 className='text-heading'>Anti-aging Effects</h2>
                      <ul>
                        <li>- Provides nutrients to dry skin</li>
                        <li>- Forms skin barrier and improves skin elasticity</li>
                        <li>- Creates collagen and elastin to prevent wrinkles</li>
                        <li>- Using the oil keeps the scalp and hair healthy</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={heInflammatory}
                      alt='Anti-inflammatory effects of hemp'
                    />
                    <Carousel.Caption>
                      <h2 className='text-heading'>
                        Anti-inflammatory, prevents skin problems from stress
                      </h2>
                      <ul>
                        <li>
                        - Prevents overproduction of sebum from glands under skin
                        </li>
                        <li>- Prevents hormonal acne and helps sensitive skin</li>
                        <li>
                        - Natural anti-inflammatory ingredients improves sensitive skin
                        </li>
                        <li>
                        - Only effective to cells that are responsible for skin problems, therefore usable on dry and sensitive skin
                        </li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={heAntioxidants}
                      alt='Hemp seed oil as Natural Antioxidants'
                    />
                    <Carousel.Caption>
                      <h2 className='text-heading'>Natural Antioxidants</h2>
                      <ul>
                        <li>
                        - Reduces oxidative stress which is harmful to collagen
                        </li>
                        <li>- Antioxidant stronger than ascorbate, α-tocopherol</li>
                        <li>- Prevents sebum oxidation and keeps the pores clean</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Col>
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
            <HempIcon />
            <h2>Mesohemp Cosmetic Line</h2>
            <CardDeck >
            {ProductItems.map((pb_item, pb_i) => {  
              return pb_item.published === 1 ?
              <Card key={pb_i}>
                <NavLink className='link' to={pb_item.path} >
                  <Card.Img variant='top' src={pb_item.imgGrid[0].src} alt={pb_item.imgGrid[0].alt+` product card`} />
                  <div className="overlay">
                    <span className="icon">
                      <BiSearchAlt size="4em"/>
                    </span>
                  </div>
                  <div className='product-title text-center'>{pb_item.title}</div>
                </NavLink>
              </Card>
              :
              null
            })}
            </CardDeck>
          </Col>
        </Row>
        <div className="btnContainer"><NavLink to="contact_us" className="btnSubmit">Contact Us</NavLink></div>
      </HempEffectsDiv>)
  }
}

interface IHempEffectsProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IHempEffectsState {
  name: string
}

interface IHempEffectsSnapshot {
  // TODO
}