import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { AiOutlineClose, AiFillCaretDown, AiOutlineFacebook, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import { DropdownAbout, DropdownProducts } from './Dropdown';
import ImgNextGen from '../ImgNextGen/ImgNextGen';

import logo from '../../assets/main/logo.png';
import fbIcon from '../../assets/main/fb.svg';
import ytIcon from '../../assets/main/yt.svg';
import igIcon from '../../assets/main/ig.svg';

const NavbarStyle = styled.div`
position: fixed !important;
width: 100%;
z-index: 1000;
background: white;
.navbar {
  &-logo img {
    height: 100%;
  }
  &-menuicon {
    display: none;
  }
  &-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 50%;
    text-transform: uppercase;
    margin-bottom: 0;
    &-item {
      display: flex;
      align-items: center;
      height: 80px;
      &-link {
        color: black;
        text-decoration: none;
        padding: 0.5rem 1rem;
        font-size: 1.5 rem;
        font-weight: 900;
        svg { margin-bottom: 3px; }
        &:hover {
          background-color: #111314;
          border-radius: 4px;
          transition: all 0.2s ease-out;
          cursor: pointer;
          color: white;
        }
      }
    }
  }
}
.sc-icon {
  width: 4%;
  img { width: 80%; }
}
.contact {
  border-radius: 4px;
  font-size: 1.6rem;
  color: #fff !important;
  background-color: #050a30;
  &:hover {
    background-color: transparent;
    color: black !important;
    border: 2px solid #050a30;
  }
}
@media only screen and (max-width: 1200px) {
  .navbar {
    &-menuicon {
      display: block;
      font-size: 1.8rem;
      cursor: pointer;
    }
    &-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
      margin-top: 0;
      &.active {
        background: black;
        left: 0;
        opacity: 0.9;
        transition: all 0.5s ease;
        z-index: 1;
      }
      &-item-link {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        font-size: 1.5 rem;
        font-weight: 800;
        color: white;
        &:hover {
          background-color: transparent;
          color: #17a2b8 !important;
          border-radius: 0;
        }
      }
    } 
  }
  .contact { display: none; }
}`;

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdownAbout] = useState(false);
  const [dropdown2, setDropdownProduct] = useState(false);
 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const extendElementAbout = () => {
    dropdown1 ? setDropdownAbout(false) : setDropdownAbout(true);
  };

  const extendElementProduct = () => {
    dropdown2 ? setDropdownProduct(false) : setDropdownProduct(true);
  };

  const onMouseEnterAbout = () => {
    if (window.innerWidth < 960) {
      setDropdownAbout(false);
    } else {
      setDropdownAbout(true);
    }
  };

  const onMouseLeaveAbout = () => {
    if (window.innerWidth < 960) {
      setDropdownAbout(false);
    } else {
      setDropdownAbout(false);
    }
  };

  const onMouseEnterProduct = () => {
    if (window.innerWidth < 960) {
      setDropdownProduct(false);
    } else {
      setDropdownProduct(true);
    }
  };

  const onMouseLeaveProduct = () => {
    if (window.innerWidth < 960) {
      setDropdownProduct(false);
    } else {
      setDropdownProduct(false);
    }
  };


  return (
    <NavbarStyle className='navbar' onContextMenu={(e)=> e.preventDefault()}>
      <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <Image src={logo} alt='mesohemp website logo' id='logo' width='200' height='100' />
      </NavLink>
      <div className='navbar-menuicon' onClick={handleClick}>
        {click ? <AiOutlineClose size="1em" /> : <GiHamburgerMenu size="1em" />}
      </div>
      <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
        <li className='navbar-menu-item'>
          <NavLink to='/' className='navbar-menu-item-link' onClick={closeMobileMenu}> Home </NavLink>
        </li>
        <li
          className='navbar-menu-item'
          onMouseEnter={onMouseEnterAbout}
          onMouseLeave={onMouseLeaveAbout}
          onClick={extendElementAbout}
        >
          <div className='navbar-menu-item-link'>
            About Us  <AiFillCaretDown size="1em" />
          </div>
          {dropdown1 && <DropdownAbout onCloseMobileMenu={closeMobileMenu} />}
        </li>
        <li
          className='navbar-menu-item'
          onMouseEnter={onMouseEnterProduct}
          onMouseLeave={onMouseLeaveProduct}
          onClick={extendElementProduct}
        >
          <div className='navbar-menu-item-link'>
            Products  <AiFillCaretDown size="1em" />
          </div>
          {dropdown2 && (<DropdownProducts onCloseMobileMenu={closeMobileMenu} />)}
        </li>
        <li className='navbar-menu-item'>
          <NavLink to='/contact_us' className='navbar-menu-item-link contact' onClick={closeMobileMenu}> Contact Us </NavLink>
        </li>
        <li className='navbar-menu-item sc-icon'>
          {/* <a href="https://www.facebook.com/mesohemp"><AiOutlineFacebook size="2em" color="black" /></a> */}
          <a href="https://www.facebook.com/mesohemp">
            <ImgNextGen
              className=""
              srcWebp={fbIcon}
              srcJp2={fbIcon}
              fallback={fbIcon}
              alt="Photo of Facebook Icon"
            />
          </a>
        </li>
        <li className='navbar-menu-item sc-icon'>
          {/* <a href="https://www.youtube.com/channel/UCmkt25yItMxgPy6B9KbYymg">
            <ImgNextGen
              className=""
              srcWebp={ytIcon}
              srcJp2={ytIcon}
              fallback={ytIcon}
              alt="Photo of Youtube Icon"
            />
          </a>           */}
          <a href="https://www.youtube.com/channel/UCmkt25yItMxgPy6B9KbYymg"><AiOutlineYoutube size="2em" color="black" /></a>
        </li>
        <li className='navbar-menu-item sc-icon'>
          {/* <a href="https://www.instagram.com/mesohemp/">
            <ImgNextGen
              className=""
              srcWebp={igIcon}
              srcJp2={igIcon}
              fallback={igIcon}
              alt="Photo of Youtube Icon"
            />
          </a> */}
          <a href="https://www.instagram.com/mesohemp/"><AiOutlineInstagram size="2em" color="black" /></a>
        </li>
      </ul>
    </NavbarStyle>
  );
}