import React, {Component} from "react"
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';

const MainTitle = styled.h3`
  margin: 0;
`

const BlogContainer = styled.div`
  padding: 50px 0;
  text-align: center;

`

const SubText = styled.div`
  margin: 20px auto;
  max-width: 450px;
`
const BlogWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
` 
const Row = styled.div`
  display: flex;
`

const BlogCard = styled.div`
  width: 33%;
  margin: 0 15px;
`
const BlogLink = styled.a`
  display: block;
  text-decoration: none;
  color: #000;
`
const BlogImg = styled.img`
  max-width: 100%;
`

const BlogDate = styled.p`
  text-align: left;
  margin: 18px 0;
  color: #8C8C8C;
`

const BlogTitle = styled.h3`
  text-align: left;
  font-weight: 500;
  margin: 0;
  color: #1D1E21;
`
  

class Blog extends Component {
  constructor() {
    super()
  }

  render() {
    const _Blog = ({intl: {formatMessage}}) => (
      <BlogContainer>
        <MainTitle>{formatMessage({ id: 'blog.mainTitle' })}</MainTitle>
        <SubText>
          {formatMessage({ id: 'blog.subText' })}
        </SubText>
        <BlogWrapper>
        <Row>
          <BlogCard>
            <BlogLink href="#">
              <BlogImg src="./../assets/workspace.jpg"/>
              <BlogDate>11 Nov 2019</BlogDate>
              <BlogTitle>
                Metaps Plus and EMURGO Collaborate on Joint Launch of World’s 
                First ADA CRYPTO CARD in South Korea
              </BlogTitle>
            </BlogLink>
          </BlogCard>
          <BlogCard>
            <BlogLink href="#">
              <BlogImg src="./../assets/drawing-board.jpg"/>
              <BlogDate>6 Nov 2019</BlogDate>
              <BlogTitle>
                Regarding our relationship with EMURGO HK Limited
              </BlogTitle>
            </BlogLink>
          </BlogCard>
          <BlogCard>
            <BlogLink href="#">
              <BlogImg src="./../assets/white-workspace.jpg"/>
              <BlogDate>16 Oct 2019</BlogDate>
              <BlogTitle>
                EMURGO to Hold Blockchain Hackathon in Partnership 
                with Tokyo University of Science
              </BlogTitle>
            </BlogLink>
          </BlogCard>
        </Row>
        </BlogWrapper>
      </BlogContainer>
    )

    const Blog = inject('locale')(injectIntl(observer(_Blog)));
    return <Blog/>
  }
}

export default Blog