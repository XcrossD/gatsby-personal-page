import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from "../components/layout";
import SEO from "../components/seo";

const WrapperWithIcon = styled.div`
  padding-left: 30px;
  margin-bottom: 15px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  & > svg {
    position: absolute;
    left: 0;
    top: 5px;
  }
  & .badge {
    margin-right: 9px;
    margin-bottom: 9px;
    font-size: 1rem;
  }
`;

class WorkProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.workProject;

    return (
      <Layout>
        <SEO
          title={project.title}
          description={project.description}
        />
        <Row>
          <Col>
            <h2 className="mb-4">{project.title}</h2>
            <Img
              fluid={project.image.childImageSharp.fluid}
              alt={project.title}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={3}>
            <WrapperWithIcon className="project-url">
              <FontAwesomeIcon icon="link" />
              <a href={project.url} >{project.url}</a>
            </WrapperWithIcon>
            <WrapperWithIcon className="project-technology">
              <FontAwesomeIcon icon="layer-group" />
              {project.technology.map(elem => <Badge variant="secondary" key={elem}>{elem}</Badge>)}
            </WrapperWithIcon>
          </Col>
          <Col md={9} dangerouslySetInnerHTML={{ __html: project.body }} />
        </Row>
      </Layout>
    )
  }
}

export default WorkProjectTemplate

export const pageQuery = graphql`
  query WorkProjectBySlug($slug: String!) {
    workProject(fields: { slug: { eq: $slug } }) {
      description
      title
      technology
      url
      body
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`