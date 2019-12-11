import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Container } from './../css';

import Plx from "react-plx";
import Download from './Download';

const data = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacity"
      }
    ]
  },
  {
    start: 400,
    duration: 100,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
    ]
  },

];

const navFixed = {
  width: '100%',
  backgroundColor: "rgba(0,0,0, 0.7)",
  color: "#fff",
  left: 0,
  top: 0,
  position: "fixed",
  zIndex: 10,
  
};

const Content = styled.div`  
  display: flex;
  margin: 10px 0 10px auto;
  align-items: center;
  a{
    padding-top: 5px;
    
  }
`;

const NavFixed = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 20px;
  a{    
    display: inline-block;
    text-decoration: none;
    
    &.active{
      border-bottom: 2px solid white;
    }
    &:link,
    &:visited{
      color: white;
    }
  }
`;

const Logo = styled.img`
  font-size: 1.5em;
  text-align: center;
  max-width: 200px;
  height: 35px;
 
`;

const VTitleList = styled.div`
  margin: 10px 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  a{
    text-decoration: none;
    display: inline-block;
    height: 23px;
    
    &.active{
      border-bottom: 2px solid white;
      padding-bottom: 0.5px;      
    }

    &:link,   
    &:visited{
      color: white;
    }
  }
  
`;

/*
 * Background<A,B>
 *
 * @media rules
 * to move blue triangle header responsive
 * an correctly centered.
 *
 * .hasOffset is for different sections, that require
 * diffrent sizes.
 */
const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  // @media (min-width: 700px) {
  //   height: ${p => (p.hasOffset ? '1062px' : '1035px')};
  //   top:  ${p => (p.hasOffset ? '-1275px' : '-900px')}; ;
  //   right: ${p => (p.hasOffset ? '640px' : '730px')}; 
  // }
  // @media (max-width: 700px) {
  //   height: ${p => (p.hasOffset ? '1062px' : '1035px')};
  //   top: -867px;
  //   right: 23px;
  // }

  // transform: skew(56deg, -31deg);
  // border-radius: 30px;
  background-image: url("./../assets/start-page-bg.jpg");
  z-index: -3;
  background-size: cover;
  background-repeat: no-repeat;
`;

const BackgroundB = styled.div`
  position: relative;
  width: 2450px;
  height: ${p => (p.hasOffset ? '270px' : '912px')};
  border-radius: 30px;
  transform: skew(56deg, -31deg);
  background-image: ${p => (p.hasOffset ? 'linear-gradient(82deg, #3256C8, #4760ff 30%)' : 'linear-gradient(51.8deg, #3154CB 0%, rgba(49,84,203,0.97) 10%, rgba(49,84,203,0.87) 25%, rgba(49,84,203,0.71) 43%, rgba(49,84,203,0.49) 63%, rgba(49,84,203,0.21) 85%, rgba(49,84,203,0) 100%)')};
  z-index: -2;
  
  
  @media (min-width: 700px) {
    height: ${p => (p.hasOffset ? '926px' : '912px')};
    top:  ${p => (p.hasOffset ? '-2292px' : '-1880px')}; 
    right: ${p => (p.hasOffset ? '621px' : '680px')}; 
  }
  @media (max-width: 700px) {
    height: ${p => (p.hasOffset ? '926px' : '912px')};
    top:  ${p => (p.hasOffset ? '-696px' : '-933px')}; ;
    right: -31px;
  }
  
}
`;

const BackgroundC = styled.div`
  position: relative;
  width: 2100px;
  border-radius: 30px;
  transform: skew(56deg, -31deg);
  background: ${p => (p.hasOffset ? 'linear-gradient(27deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)' : 'linear-gradient(49.34deg, #4968D6 0%, rgba(69,101,212,0.95) 10%, rgba(59,92,207,0.81) 42%, rgba(52,87,204,0.73) 69%, rgba(50,85,203,0.7) 88%, rgba(50,85,203,0.61) 89%, rgba(49,84,203,0.44) 92%, rgba(49,84,203,0.31) 95%, rgba(49,84,203,0.23) 98%, rgba(49,84,203,0.2) 100%);')}; 
  z-index: -1;

  @media (min-width: 700px) {
    top: ${p => (p.hasOffset ? '-3090px' : '-2650px')};
    height: ${p => (p.hasOffset ? '727px' : '735px')};
    right: ${p => (p.hasOffset ? '480px' : '560px')};
  }

  @media (max-width: 700px) {
    top: ${p => (p.hasOffset ? '-3090px' : '-1343px')};
    height: ${p => (p.hasOffset ? '727px' : '736px')};
    right: 480px;
  }
`;

const HeaderText = styled.span`
  @media (max-width: 700px) {
    display: none;
  }
  position: relative;
  color: white;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

          
const Row = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`

const HContainer = styled.div`
  margin: 0 auto;
  max-width: 1115px;
  height: 88px;
`;


const Selector = styled.select`
  background: transparent;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  // &:hover{    
  //   background-color: rgba(255,255,255,0.15);
  //   box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
    
  //     }
`;

const HeaderAlt = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const HeaderAltSub = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  width: 100%;
  height: 200px;
  background-image: linear-gradient(82deg, #1a44b7, #4760ff 30%);
  position: absolute;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      show: false,
    };
  }

  isThisHomePage() {
    return this.props.location.pathname === '/';
  }

  render() {
    // Do not show Download on the home page
    const downloadVisibility = this.isThisHomePage() ? false : true;

    const offsetPaths = ['/about', '/faq', '/support', '/terms_and_conditions'];
    const hasOffset = offsetPaths.some(r => window.location.href.match(r));
    const _Header = ({ locale, intl: { formatMessage } }) => (
      <div>
      <Background hasOffset={hasOffset} />
      <HContainer>
        <HeaderAltSub>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/">
              {formatMessage({ id: 'header.home' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/about">
              {formatMessage({ id: 'header.about' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/blog">
              {formatMessage({ id: 'header.blog' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link onClick={this.toggleMenu} to="/contact">
              {formatMessage({ id: 'header.contact' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Selector
              value={locale.value}
              onChange={event => (locale.value = event.target.value)}
            >
              <option value="en">Eng</option>
              <option value="ja">日本語</option>
              {/* <option value="ko">한국어</option>
              <option value="zh-Hans">简体中文</option>
              <option value="zh-Hant">繁體中文</option>
              <option value="ru">Pусский</option> */}
            </Selector>
          </VTitleList>
        </HeaderAltSub>
        {/* <Container> */}
          <HeaderAlt>
            <Logo  src="./assets/EMURGOTEST-logo.svg" alt="EMURGO" />
            <div style={{ flex: 1 }} />
            <a style={{ color: 'white', fontSize: '30px' }} href="javascript:void(0);" className="icon" onClick={this.toggleMenu}>
              <i className="fa fa-bars" />
            </a>
          </HeaderAlt>
          <Row>
            <div style={{margin: "10px 0"}}>
            <Link to="/">
                <Logo src="./assets/EMURGOTEST-logo.svg" alt="EMURGO" />
              </Link>
            </div>
          <HeaderText>
            {/* <VTitleList >
              <NavLink to="/" exact>{formatMessage({ id: 'header.home' })}</NavLink>
            </VTitleList> */}
            <VTitleList >
              <NavLink to="/about">{formatMessage({ id: 'header.about' })}</NavLink>
            </VTitleList>
            <VTitleList >
              <NavLink to="/blog/">{formatMessage({ id: 'header.blog' })}</NavLink>
            </VTitleList>
            <VTitleList >
              <NavLink to="/contact">{formatMessage({ id: 'header.contact' })}</NavLink>
            </VTitleList>
            { downloadVisibility && 
              <VTitleList style={{zIndex: '15' }} >
                <Download />
              </VTitleList>
            }
            <VTitleList style={{zIndex: '15'}}>
              <Selector
                value={locale.value}
                onChange={event => (locale.value = event.target.value)}
              >
                <option style={{color: '#4A5065'}} value="en">Eng</option>
                <option style={{color: '#4A5065'}} value="ja">日本語</option>
                {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                <option style={{color: '#4A5065'}} value="ru">Pусский</option> */}
              </Selector>
            </VTitleList>
            <Plx parallaxData={data} style={navFixed} >
              <Row style={{maxWidth: "1115px", margin: "auto"}}>
                <NavFixed onClick={scroll}>
                  <Link to="/">
                    <Logo src="./assets/EMURGOTEST-logo.svg" alt="EMURGO" />
                  </Link>
                </NavFixed>
              <Content>
                <NavFixed onClick={scroll}>
                  <NavLink to="/about">{formatMessage({ id: 'header.about' })}</NavLink>
                </NavFixed>
                <NavFixed onClick={scroll}>
                  <NavLink to="/blog">{formatMessage({ id: 'header.blog' })}</NavLink>
                </NavFixed>
                <NavFixed onClick={scroll}>
                  <NavLink to="/contact">{formatMessage({ id: 'header.contact' })}</NavLink>
                </NavFixed>
                {downloadVisibility && 
                  <NavFixed  style={{zIndex: '15' }} >
                    <Download />
                  </NavFixed>
                }
                <NavFixed style={{marginTop: "15px"}}>
                  <Selector 
                    value={locale.value}
                    onChange={event => (locale.value = event.target.value)}
                  >
                    <option style={{color: '#4A5065'}} value="en">Eng</option>
                    <option style={{color: '#4A5065'}} value="ja">日本語</option>
                    {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                    <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                    <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                    <option style={{color: '#4A5065'}} value="ru">Pусский</option>  */}
                  </Selector>
                </NavFixed>
              </Content>
                </Row>
            </Plx>
          </HeaderText>
          </Row>
        {/* </Container> */}
        {/* <BackgroundB hasOffset={hasOffset} />
        <BackgroundC hasOffset={hasOffset} /> */}
      </HContainer>
      </div>
    );

    const Header = inject('locale')(injectIntl(observer(_Header)));

    return <Header />;
  }
}
export default App;
