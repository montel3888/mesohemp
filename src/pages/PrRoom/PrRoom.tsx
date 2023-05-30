import React from 'react'
import { RouteComponentProps, NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import { Jumbotron, Row, Col, CardDeck, Card, Image } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';

import { PrRoomItems } from '../../components/MenuItems/MenuItems';
import HempIcon from '../../components/HempIcon';
import Breadcrumbs from '../../components/Breadcrumbs';
import './PrRoom.scss'

import aboutHempHdr from '../../assets/about/pr_room/prroom_hdr.jpg';
// import mesohempLine from '../../assets/mesohemp_line.jpg';

const PrRoomDiv = styled.div`
  .jumbotron {
    // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutHempHdr});
    background: url(${aboutHempHdr});
    height: 50vh !important;
  }
  .product-title { 
    font-size: 18px !important;
    font-weight: 600 !important;
    margin: 10px 0 10px 0;
    color: black;
  }
`;

export default class PrRoom extends React.PureComponent<IPrRoomProps, IPrRoomState> {

  constructor(props: IPrRoomProps) {
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

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IPrRoomProps, IPrRoomState> = (props:IPrRoomProps, state: IPrRoomState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IPrRoomProps, prevState: IPrRoomState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IPrRoomProps, prevState: IPrRoomState, snapshot: IPrRoomSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    const setMeta = () => {
      document.title = 'Mesohemp | Facts about hemp. Difference between Hemp and Cannabis';
      const metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'description') {
          metas[i].content = 'PR Room';
        }
      }
    }
    return (
      <PrRoomDiv className="PrRoom" onContextMenu={(e)=> e.preventDefault()}>
        {setMeta()}
        <Helmet>
          <meta property="og:title" content="Mesohemp | PR Room" />
          <meta property="og:description" content="PR Room" />
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
        <Jumbotron fluid title="Facts about hemp " />
        <Row className='section-PrRoom'>
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
            <Breadcrumbs id="PR Room" />
            <HempIcon />
            <Row>
              <Col xs={10} sm={10} md={10} lg={8} xl={8} className="col-inner">
                {PrRoomItems.map((pr_item, pb_i) =>  
                  <Card key={pb_i}>
                    <Row>
                      <Col xs={11} sm={11} md={11} lg={4} xl={4}>
                        <Card.Img variant='top' src={pr_item.pic} />
                      </Col>
                      <Col xs={11} sm={11} md={11} lg={8} xl={8}>
                        <h5 className="card-title">{pr_item.title}</h5>
                        <NavLink className='btn btn-primary' to={`articles${pr_item.path}`}> Read More </NavLink>
                      </Col>
                    </Row>
                  </Card>
                )}                
              </Col>
            </Row>
          </Col>
        </Row>
        <br /><br />
        <div className="btnContainer"><NavLink to="contact_us" className="btnSubmit">Contact Us</NavLink></div>
      </PrRoomDiv>)
  }
}

interface IPrRoomProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IPrRoomState {
  name: string
}

interface IPrRoomSnapshot {
  // TODO
}