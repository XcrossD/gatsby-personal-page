import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Portfolio from "../components/portfolio";

class WorkPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO 
          title="Work"
          keywords={[`blog`, `your name`, `javascript`, `react`, `gatsby`]}
        />
        <Row>
          <Col>
            <h2 className="mb-4">Work</h2>
          </Col>
        </Row>
        <Portfolio />
      </Layout>
    );
  }
}

export default WorkPage;