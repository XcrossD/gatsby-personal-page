import React from "react";
import { Link, graphql } from "gatsby";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from "../components/layout";
import SEO from "../components/seo";

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;

    return (
      <Layout>
        <SEO title="All posts" />
        <Row className="mb-4">
          <Col>
            <h3>Blog</h3>
          </Col>
        </Row>
        {posts.map(({ node }) => {
           const title = node.frontmatter.title || node.fields.slug
           return (
             <Row key={node.fields.slug}>
               <Col>
                <h3>
                  <Link to={`blog${node.fields.slug}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
               </Col>
             </Row>
           )
        })}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`