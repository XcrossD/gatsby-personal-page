import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class WorkProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.workJson

    return (
      <Layout>
        <SEO
          title={project.title}
          description={project.description}
        />
        // To be finished
      </Layout>
    )
  }
}

export default WorkProjectTemplate

export const pageQuery = graphql`
  query WorkProjectBySlug($slug: String!) {
    workJson(fields: { slug: { eq: $slug } }) {
      title
      description
      image
    }
  }
`