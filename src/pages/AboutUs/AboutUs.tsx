/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/pages/AboutUs/AboutUs.tsx

Created with;
$ npx generate-react-cli component AboutUs --type=page

*/

import React from 'react'
import { RouteComponentProps, NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { Jumbotron, Row, Col, CardDeck, Card, Image } from "react-bootstrap";
import { BiSearchAlt } from 'react-icons/bi'

import { ProductItems } from "../../components/MenuItems/MenuItems"
import HempIcon from "../../components/HempIcon";
import './AboutUs.scss'

import aboutUsHdr from "../../assets/about/about_us/about-us-hdr.jpg"
import aboutUsTxt from "../../assets/about/about_us/about-us-txt.jpg"
import aboutUsCert from "../../assets/about/about_us/about-us-cert.jpg"
import lineDownImg from "../../assets/line-down.png"
import lineUpImg from "../../assets/line-up.png"
import Breadcrumbs from '../../components/Breadcrumbs';

const AboutUsDiv = styled.div`
  .jumbotron {
    // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutUsHdr});
    background: url(${aboutUsHdr});
  }
  .product-title { 
    font-size: 18px !important;
    font-weight: 600 !important;
    margin: 10px 0 10px 0;
    color: black;
  }
`;

export default class AboutUs extends React.PureComponent<IAboutUsProps, IAboutUsState> {

  constructor(props: IAboutUsProps) {
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

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IAboutUsProps, IAboutUsState> = (props:IAboutUsProps, state: IAboutUsState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IAboutUsProps, prevState: IAboutUsState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IAboutUsProps, prevState: IAboutUsState, snapshot: IAboutUsSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    const setMeta = () => {
      document.title = "About Mesohemp | Our Story";
      const metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === "description") {
          metas[i].content = "Developing innovations to create beauty, happiness and a quality lifestyle for people. See our Hemp seed oil based products including lotions, masks, creams and more";
        }
      }
    }
    return (
      <AboutUsDiv className="AboutUs" onContextMenu={(e)=> e.preventDefault()}>
        {setMeta()}
        <Helmet>
          {/* <title>About Mesohemp | Our Story </title> */}
          {/* <meta name="description" content="Developing innovations to create beauty, happiness and a quality lifestyle for people. See our Hemp seed oil based products including lotions, masks, creams and more" /> */}
          <meta property="og:title" content="About Mesohemp | Our Story" />
          <meta property="og:image" content={aboutUsHdr} />
          <meta property="og:description" content="Developing innovations to create beauty, happiness and a quality lifestyle for people. See our Hemp seed oil based products including lotions, masks, creams and more" />
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
        <Jumbotron fluid title="Hemp sprout in hands">
          {/* <Container><h1>About Us</h1></Container> */}
          {/* <div className='line line-up'><Image src={lineUpImg} alt='line' /></div> */}
        </Jumbotron>
        <Row className='section-aboutus'>
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
            <Breadcrumbs id={"About Us"}/>
            <HempIcon />
            <p>
            As a company we are committed to developing, manufacturing and commercializing innovation and pioneering <b>cosmetic solutions</b> in dedication to humanity’s quest for a <b>more beautiful, happier and quality way of life</b>.
            </p>
            <div className='desc'><Image src={aboutUsTxt} rounded alt="Hemp seed oil in bottle"/></div>
            <p>
              We recognize the <b>benefits that hemp has</b> to both the aesthetic and medical areas which is why we have created the Mesohemp cosmetic line of products.
            </p>
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
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner cert">
            <h2>Certificate of Trademark Registration</h2>
            <div className='desc'><Image src={aboutUsCert} rounded alt="Certificate"/></div>
          </Col>
        </Row>
        <div className="btnContainer"><NavLink to="contact_us" className="btnSubmit">Contact Us</NavLink></div>
      </AboutUsDiv>)
  }
}

interface IAboutUsProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IAboutUsState {
  name: string
}

interface IAboutUsSnapshot {
  // TODO
}