/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/pages/AboutHemp/AboutHemp.tsx

Created with;
$ npx generate-react-cli component AboutHemp --type=page

*/

import React from 'react'
import { RouteComponentProps, NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from "styled-components";
import { Jumbotron, Row, Col, CardDeck, Card, Image } from "react-bootstrap";
import { BiSearchAlt } from 'react-icons/bi';

import { ProductItems } from "../../components/MenuItems/MenuItems";
import HempIcon from "../../components/HempIcon";
import Breadcrumbs from '../../components/Breadcrumbs';
import './AboutHemp.scss'

import aboutHempHdr from "../../assets/about/about_hemp/about-hemp-hdr.jpg";
import lineDownImg from "../../assets/line-down.png";
import lineUpImg from "../../assets/line-up.png";
import confusionImg from "../../assets/about/about_hemp/confusion.jpg";

const AboutHempDiv = styled.div`
  .jumbotron {
    // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutHempHdr});
    background: url(${aboutHempHdr});
  }
  .product-title { 
    font-size: 18px !important;
    font-weight: 600 !important;
    margin: 10px 0 10px 0;
    color: black;
  }
`;

export default class AboutHemp extends React.PureComponent<IAboutHempProps, IAboutHempState> {

  constructor(props: IAboutHempProps) {
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

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IAboutHempProps, IAboutHempState> = (props:IAboutHempProps, state: IAboutHempState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IAboutHempProps, prevState: IAboutHempState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IAboutHempProps, prevState: IAboutHempState, snapshot: IAboutHempSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    const setMeta = () => {
      document.title = "Mesohemp | Facts about hemp. Difference between Hemp and Cannabis";
      const metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === "description") {
          metas[i].content = "Benefits of using products with hemp seed oil . Green Hemp from South Korea. CBD percentage in Hemp";
        }
      }
    }
    return (
      <AboutHempDiv className="AboutHemp" onContextMenu={(e)=> e.preventDefault()}>
        {setMeta()}
        <Helmet>
          {/* <title>Mesohemp | Facts about hemp. Difference between Hemp and Cannabis</title> */}
          {/* <meta name="description" content="Benefits of using products with hemp seed oil . Green Hemp from South Korea. CBD percentage in Hemp " /> */}
          <meta property="og:title" content="Mesohemp | Facts about hemp. Difference between Hemp and Cannabis" />
          <meta property="og:image" content={aboutHempHdr} />
          <meta property="og:description" content="Benefits of using products with hemp seed oil . Green Hemp from South Korea. CBD percentage in Hemp " />
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
        <Jumbotron fluid title="Facts about hemp ">
          {/* <Container><h1>About Hemp</h1></Container> */}
          {/* <div className='line line-up'><Image src={lineUpImg} alt='line' /></div> */}
        </Jumbotron>
        <Row className='section-abouthemp'>
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
            <Breadcrumbs id={"About Hemp"}/>
            <HempIcon />
            <h1> What is Hemp anyway?</h1>
            <p>
              The beauty, medical and food industries are now understanding the
              benefits of ‘Hemp’ and the healthy properties that we can gain
              from using products with the ingredient. Many people when they
              hear the word ‘Hemp’ they think of Cannabis or Marijuana, while
              they derive from the same plant there are differences.
            </p>
            <div className='aboutImg'>
              <Image src={confusionImg} alt='Hemp benefits compared with Marijuana' />
            </div>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text'>
                <p>
                  Marijuana(Cannabis) is mainly classified into cannabis sativa,
                  cannabis indica, and cannabis ruderalis. Cannabis sativa is mostly
                  known in the world as marijuana, where most countries classify it
                  as a harmful drug, and <b>hemp</b>, which is mostly used <b>for medical and
                  cosmetic purposes</b>. Marijuana and hemp are classified differently,
                  depending on the amount of THC (tetrahydrocannabinol) it contains.
                  THC is the active chemical that is responsible for marijuana’s
                  phycological effects. Marijuana contains at least 20% of THC,
                  while <b>hemp only contains less than 0.3% of THC</b>.
                </p><br />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} className='text'>
                <p>
                  CBD (Cannobidiol) is known to contain beneficial ingredients for
                  medical and cosmetic purposes. Marijuana only contains less than
                  10% of CBD, while <b>hemp contains at least 20% of CBD</b>.
                </p><br />
                <p>
                  Hemp cultured in South Korea is known as <b>Green Hemp</b> (a hybrid
                  breed of imported cannabis from the Netherlands and Korean native
                  species), which contains <b>more percentage of CBD and less
                  percentage of THC</b>. This new species has been studied and cultured
                  by the National Institute of Agricultural Science.
                </p>
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
      </AboutHempDiv>)
  }
}

interface IAboutHempProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IAboutHempState {
  name: string
}

interface IAboutHempSnapshot {
  // TODO
}