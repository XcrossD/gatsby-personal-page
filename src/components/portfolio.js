import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Img from "gatsby-image";

class Portfolio extends React.Component {
  render() {
    const limit = this.props.limit | null;

    return (
      <StaticQuery
        query={portfolioQuery}
        render={data => {
          const { images } = data;
          const portfolioData = limit ? data.portfolioData.nodes.slice(0, limit) : data.portfolioData.nodes;
          console.log('data', data);
          return (
            <Row>
              {portfolioData.map(work => {
                const imageIndex = images.nodes.findIndex(x => x.name === work.image.split('.')[0]);
                return (
                  <Col className="work" key={work.title}>
                    <Card>
                      <Card.Img 
                        variant="top"
                        as={Img}
                        fluid={images.nodes[imageIndex].childImageSharp.fluid}
                      />
                      <Card.Body>
                        <Card.Title>{work.title}</Card.Title>
                        <Card.Text>{work.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        }}
      />
    );
  }
}

const portfolioQuery = graphql`
  query WorkQuery {
    portfolioData: allWorkJson {
      nodes {
        description
        image
        title
      }
    }
    images: allFile {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default Portfolio;