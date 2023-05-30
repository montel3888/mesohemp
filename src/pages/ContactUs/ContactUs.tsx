/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/pages/ContactUs/ContactUs.tsx

Created with;
$ npx generate-react-cli component ContactUs --type=page

*/

import React from "react";
import { RouteComponentProps } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from "styled-components";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";

import ContactForm from "../../components/ContactForm/ContactForm";
import HempIcon from "../../components/HempIcon";
import Breadcrumbs from '../../components/Breadcrumbs';
import './ContactUs.scss'

import aboutUsHdr from "../../assets/about/contact_us/contact-us-hdr.jpg";
import lineDownImg from "../../assets/line-down.png";
import lineUpImg from "../../assets/line-up.png";

const ContactUsDiv = styled.div`
.jumbotron {
  // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutUsHdr});
  background: url(${aboutUsHdr});
}
.breadcrumb { margin: 0% 0% 5% 0% !important; }
`;

export default class ContactUs extends React.PureComponent<IContactUsProps, IContactUsState> {

  constructor(props: IContactUsProps) {
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

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IContactUsProps, IContactUsState> = (props:IContactUsProps, state: IContactUsState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IContactUsProps, prevState: IContactUsState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IContactUsProps, prevState: IContactUsState, snapshot: IContactUsSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    const setMeta = () => {
      document.title = "Mesohemp | Contacts";
      const metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === "description") {
          metas[i].content = "Contacts and social networks of the South Korean cosmetic manufacturer Mesohemp. Submit you request. Open for inquiries";
        }
      }
    }
    return (
      <ContactUsDiv className="ContactUs" onContextMenu={(e)=> e.preventDefault()}>
        {setMeta()}
        <Helmet>
          {/* <title>Mesohemp | Contacts</title> */}
          {/* <meta name="description" content="Contacts and social networks of the South Korean cosmetic manufacturer Mesohemp. Submit you request. Open for inquiries" /> */}
          <meta property="og:title" content="Mesohemp | Contacts" />
          <meta property="og:image" content={aboutUsHdr} />
          <meta property="og:description" content="Contacts and social networks of the South Korean cosmetic manufacturer Mesohemp. Submit you request. Open for inquiries" />
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
        <Jumbotron fluid>
          {/* <Container><h1>Contact Us</h1></Container> */}
          {/* <div className='line line-up'><Image src={lineUpImg} alt='line' /></div> */}
        </Jumbotron>
        <Row className='section-aboutus'>
          <Col xs={11} sm={11} md={4} lg={4} xl={4} className="col-inner">
            <Breadcrumbs id={"Contact Us"}/>
            <HempIcon />
            <ContactForm />
            {/* <p>We are always excited to connect with new partners, for all Business Enquiries please fill out the email form below:</p> */}
          </Col>
          {/* <Col xs={7} sm={7} md={4} lg={4} xl={4} className="col-inner">
            <ContactForm />
          </Col> */}
        </Row>
      </ContactUsDiv>)
  }
}

interface IContactUsProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IContactUsState {
  name: string
}

interface IContactUsSnapshot {
  // TODO
}