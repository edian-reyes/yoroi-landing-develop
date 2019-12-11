import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './../css';
import OutsideClickHandler from 'react-outside-click-handler';

const ContainerFooter = styled.div`
  color: white;
  background: linear-gradient(90deg, #215F68 20%, #48A1B0 80%);
  padding: 60px 0;
  `;

const RowContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  .links {
    flex: 0;
    margin-left: 20px;  
  }
  .links.links-flex {
    flex: 0;
  }
`;
const FooterText = styled.div`
  font-size: 13px;
  text-align: left; 
  display: flex; 
  flex-direction: row;
  margin-top: 50px;
`;
const Spacer = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  flex: 1;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px; 
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (min-width: 700px) {
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
`;

const DropdownButton = styled.div`
  cursor: pointer;
  flex: 1;
  height: 49px;	
  width: 190px;	
  min-width: 160px;
  border-radius: 8px;	
  background-color: #17D1AA;	
  margin-bottom:5px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  color: #ffffff;
  display: block;
  overflow:hidden;
  
  .ArrowUp {
    margin-left: 158px;
    margin-top: -31px;
    transform: rotate(180deg);
  }
 `;

const DownloadButtonText = styled.div`
  margin-left: 15px; 
  font-size: 15px;
  font-weight: 500; 
  margin-top: 5px;
  text-transform: uppercase;
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #17d1aa;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 8px;	
  z-index: 3;
  top: auto;
  bottom: 100%;
  margin-bottom: 5px;
  overflow: auto;
  text-transform:initial;
  text-align: justify;
  width: 190px;

  a {
    background-color: #17d1aa;
    padding: 5px 5px;
    display: block;
    font-size: 14px;
    
  }
  a:hover {
    background-color: #14E2B8
  }
  .icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .icon.icon-shrink {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 5px;
  }
`;

const Download = styled.div`
  position: relative;
  display: inline-block;
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 15px;	
  font-weight: initial;	
  line-height: 40px; 
  flex: 0.8;

  margin-top: 60px;
  :hover ${DropdownButton} {
    background-color: #14E2B8;
    align-items:left;
  }
`;

const DownloadItemImage = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
`;

const LogoSize = styled.div`
  flex: 2;
  margin-top: -30px;
`;

const Logo = styled.img`
  font-size: 1.5em;
  text-align: center;
  max-width: 200px;
`;

const LinkS = styled.div`
  flex: 0.8;
  font-weight: 500;
  font-size: 14px;
  margin: 0 0 0 40px;
  text-align: left;
 
  @media (max-width: 700px) {
  }
  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }
  `;
const ContainerHeight = styled(Container)`
  @media (min-width: 700px) {
    height: 187px;
  }
`;

const Selector = styled.select`
  background: transparent;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  text-align: left;
  font-family: "Rubik";
`;

const SelectorOption = styled.option`
  background-color: transparent;
`

const FooterWrapper = styled.div`
  max-width: 1200px; 
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 940px; 
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showDownloadDropdown: false,
    };
  }

  closePopUp = () => {
    this.setState({ show: false });
  };

  /* Single page app - scroll to top, to look like a normal webpage */
  scroll = () => {
    window.scrollTo(0, 0);
  };

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };

  render() {
    const _Footer = ({ locale, intl: { formatMessage } }) => (
      <ContainerFooter>
        <FooterWrapper>
          <RowContainer>
            <LogoSize>
              <div>
              <Logo src="./../assets/EMURGOTEST-logo.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
              </div>
            <FooterText>
              {formatMessage({ id: 'footer.all-rights' })}
            </FooterText>
            </LogoSize>
            <div>
            <RowContainer>
              <LinkS onClick={scroll}>
                <Link to="/about">{formatMessage({ id: 'header.about' })}</Link>
              </LinkS>
              <LinkS onClick={scroll}>
                <Link to="/blog">{formatMessage({ id: 'header.blog' })}</Link>
              </LinkS>
              <LinkS onClick={scroll} style={{flex: 0.5}}>
                <Link to="/contact">{formatMessage({ id: 'header.contact' })}</Link>
              </LinkS>
              <LinkS>
                <Selector
                  value={locale.value}
                  onChange={event => (locale.value = event.target.value)}
                >
                  <SelectorOption value="en">Eng</SelectorOption>
                  <SelectorOption value="ja">日本語</SelectorOption>
                </Selector>
              </LinkS>
            </RowContainer>
            <RowContainerIcons style={{ paddingTop: '29.74px', }}>
              <a className='links links-flex' target= '_blank' href="https://www.facebook.com/Yoroi-wallet-399386000586822/" rel='noopener'>
                <img src="./assets/facebook.svg" />
              </a>
              <a className='links' target= '_blank' href="https://twitter.com/YoroiWallet" rel='noopener'>
                <img src="./assets/twitter.svg" />
              </a>
              <a className='links' target= '_blank' href="https://www.youtube.com/channel/UCgFQ0hHuPO1QDcyP6t9KZTQ" rel='noopener'>
                <img src="./assets/youtube.svg" />
              </a>
              <a className='links' target= '_blank' href="https://medium.com/@emurgo_io" rel='noopener'>
                <img src="./assets/medium-size.svg" />
              </a>
              <a className='links' target= '_blank' href="https://www.reddit.com/r/cardano/" rel='noopener'>
                <img src="./assets/reddit.svg" />
              </a>
              <a className='links' target= '_blank' href="https://www.linkedin.com/company/emurgo_io"  rel='noopener'>
                <img src="./assets/linkedin.svg" />
              </a>
            </RowContainerIcons>
            </div>
            {/* <LinkS style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}> */}
              {/* <Download>
                <DropdownButton onClick={this.showDropdownMenu}>
                  <DownloadButtonText>{formatMessage({id: 'header.download'})}</DownloadButtonText>
                  <img
                    className ='ArrowUp'
                    src="./assets/arrow-down.svg"
                  />
                </DropdownButton>
                { this.state.showDownloadDropdown &&
                  <OutsideClickHandler onOutsideClick={this.hideDropdownMenu}>
                  <DropdownContent>
                    <a
                      rel="noopener"
                      target= '_blank'
                      href= "https://chrome.google.com/webstore/detail/yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb"
                    >
                      <DownloadItemImage
                        style={{  width: '16px', height: '16px', marginLeft: '5px', marginRight: '10px' }}
                        src="./assets/chrome.svg"
                      />
                      {formatMessage({id: 'download.mainnet.chrome'})}
                    </a>
                    <a
                      rel="noopener"
                      target= '_blank'
                      href= "https://chrome.google.com/webstore/detail/yoroi-shelley-testnet/bioklcnnnpdblghplkifbemcigeanmjn"
                    >
                      <DownloadItemImage
                        style={{  width: '16px', height: '16px', marginLeft: '5px',  marginRight: '10px' }}
                        src="./assets/chrome.svg"
                      />
                      {formatMessage({id: 'download.testnet.chrome'})}
                    </a>                        
                    <a
                      rel="noopener"
                      target= '_blank'
                      href="https://addons.mozilla.org/en-US/firefox/addon/yoroi/"
                    >
                      <DownloadItemImage src="./assets/firefox.svg" />
                      {formatMessage({id: 'download.mainnet.firefox'})}
                    </a>
                    <a
                      rel="noopener"
                      target= '_blank'
                      href="https://addons.mozilla.org/en-US/firefox/addon/yoroi-shelley-testnet/"
                    >
                      <DownloadItemImage src="./assets/firefox.svg" />
                      {formatMessage({id: 'download.testnet.firefox'})}
                    </a>                        
                    <a
                      rel="noopener"
                      target= '_blank'
                      href="https://play.google.com/store/apps/details?id=com.emurgo&hl=en"
                    >
                      <DownloadItemImage src="./assets/google-play.svg" />
                      {formatMessage({id: 'download.mainnet.android'})}
                    </a>
                    <a
                      rel="noopener"
                      target= '_blank'
                      href="https://apps.apple.com/us/app/emurgos-yoroi-cardano-wallet/id1447326389"
                    >
                      <DownloadItemImage src="./assets/apple.svg" />
                      {formatMessage({id: 'download.mainnet.ios'})}
                    </a>
                  </DropdownContent>
                  </OutsideClickHandler>
                }
              </Download> */}
              {/* <Spacer /> */}
            {/* </LinkS> */}
          </RowContainer>
          </FooterWrapper>
      </ContainerFooter>
    );

    const Footer = inject('locale')(injectIntl(observer(_Footer)));

    return <Footer />;
  }
}

export default App;
