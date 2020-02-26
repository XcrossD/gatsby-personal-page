import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Portfolio from "../components/portfolio";

library.add(
  fab,
  faLink,
  faLayerGroup
);

const Hero = styled(Jumbotron)`
  &&& {
    background-color: white;
  }  
`;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `your name`, `javascript`, `react`, `gatsby`]}
        />
        <Hero className="px-0">
          <h1>Hi! I'm a person.</h1>
          <p>
            I am super duper.
            <br />
            I am looking at a personal page & blog example on github.
          </p>
          <Link to="/about/">
            <Button variant="primary">Learn more about me</Button>
          </Link>
        </Hero>
        <Row>
          <Col>
            <h2 className="mb-4">Recent work</h2>
          </Col>
        </Row>
        <Portfolio limit={6} />
        <Row className="mt-4">
          <Col>
            <Link to="/work/">
              <Button variant="primary">View more</Button>
            </Link>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage