import React from "react";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import Helmet from 'react-helmet'

import notFound from "../../assets/404.jpg";

const NotFoundPage = styled.div`
  padding-top: 100px;
  .jumbotron {
    background: url(${notFound});
    height: 100vh;
    padding: 0 !important;
    margin: 0 !important;
  }
  @media only screen and (max-width: 1024px) {
    .jumbotron {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
      height: 50vh;
    }
  }
`;


function NoMatch() {
  return (
    <NotFoundPage>
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta name="description" content="404" />
        <meta name="prerender-status-code" content="404"></meta>
      </Helmet>
      <Jumbotron fluid> </Jumbotron>
    </NotFoundPage>
  );
}
  
export default NoMatch;