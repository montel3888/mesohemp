import React, { Suspense, useEffect } from 'react'
import styled from "styled-components";
import LazyLoad from 'react-lazyload';

import aos from "aos";
import "aos/dist/aos.css";

import SectionOne from "./components/Home/SectionOne";
import SectionTwo from "./components/Home/SectionTwo";

import SectionThree from "./components/Home/SectionThree";
import SectionFour from "./components/Home/SectionFour";
import SectionFive from "./components/Home/SectionFive";
import SectionSix from "./components/Home/SectionSix";
import SectionSeven from "./components/Home/SectionSeven";
import SectionEight from "./components/Home/SectionEight";

// const SectionThree = lazy(() => import("./components/Home/SectionThree"));
// const SectionFour = lazy(() => import("./components/Home/SectionFour"));
// const SectionFive = lazy(() => import("./components/Home/SectionFive"));
// const SectionSix = lazy(() => import("./components/Home/SectionSix"));

const HomeDiv = styled.div`
  padding-top: 105px;
  .row {
    a { text-decoration: none; }
    margin: 0 !important;
    position: relative;
  }
  .line {
    width: 100%;
    position: absolute;
    img { 
      width: 100%;
      height: 100%;
    }
    &-down {
      z-index: 1;
      img { vertical-align: top; }
    }
    &-up {
      bottom: 0;
      vertical-align: top;
      img { vertical-align: bottom; }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .line {
      &-down { top: -1px; }
      &-up { bottom: -1px !important; }
    }
  }

`;

function App() {
  useEffect(() => {
    aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <HomeDiv onContextMenu={(e)=> e.preventDefault()}>
      <SectionOne />
      <SectionTwo />
      
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix /> 
      <SectionSeven /> 
      <Suspense fallback={<div>Loading SECTIONS...</div>}>
        <LazyLoad height={200} offset={100} once>
          <SectionEight /> 
        </LazyLoad>
      </Suspense>
    </HomeDiv>
  )
}

export default App
