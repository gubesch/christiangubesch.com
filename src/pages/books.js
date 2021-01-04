import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;
  margin: auto;
  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const testStyle = {
    'max-width':'100%',
    'text-align': 'center',
};
const testStyle2 = {
    'display': 'flex',
    'margin-left': 'auto' ,
    'margin-right': 'auto',
};

const Books = ({ className, location }) => {
  const title = "Books"
  const { keywords, books } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/alfons-morales-YLSwjSy7stw-unsplash.jpeg')}
        title={title + " which I can recommend"} 
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {books.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                  <Image style={testStyle2} src={withPrefix(job.image)} />
                  <p style={testStyle}>{job.description}</p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Books)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
