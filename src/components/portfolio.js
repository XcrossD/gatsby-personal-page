import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
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
          const portfolioData = limit ? data.portfolioData.nodes.slice(0, limit) : data.portfolioData.nodes;
          return (
            <Row>
              {portfolioData.map(work => {
                return (
                  <Col className="work" key={work.title}>
                    <Card>
                      <Card.Img 
                        variant="top"
                        as={Img}
                        fluid={work.image.childImageSharp.fluid}
                      />
                      <Card.Body>
                        <Card.Title>
                          <Link to={`work${work.fields.slug}`}>
                            {work.title}
                          </Link>
                        </Card.Title>
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
    portfolioData: allWorkProject {
      nodes {
        description
        title
        fields {
          slug
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;