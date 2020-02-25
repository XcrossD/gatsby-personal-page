import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialMedia from "../components/socialmedia";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          keywords={[`blog`, `your name`, `javascript`, `react`, `gatsby`]}
        />
        <Row>
          <Col className="profile">
            <h1>I'm Your Name, nice to meet you.</h1>
            <a href="mailto:yourname@somemail.com">yourname@somemail.com</a>
            <SocialMedia />
          </Col>
          <Col>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet sapien ut nulla maximus feugiat eget a ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sit amet hendrerit ipsum, in egestas nisl. Sed condimentum ultricies tortor, eu viverra quam sagittis ac. Vivamus fringilla sed enim non fermentum. Vivamus sodales erat sed elit vehicula scelerisque. Cras in tellus id lorem hendrerit placerat. Donec mollis sapien ut purus pretium gravida.</p>
            <p>Integer sit amet ex metus. Aliquam vel pretium odio, sit amet vestibulum augue. Cras ultrices, augue eu condimentum lacinia, risus nunc mattis purus, ut mattis leo tellus eu nisi. Ut quis est leo. Sed suscipit, mi tincidunt viverra egestas, turpis turpis tincidunt quam, non mollis risus massa id orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et congue diam. Fusce efficitur, erat at hendrerit dignissim, quam tellus molestie elit, id tristique odio nisi mollis libero. Donec et nibh a felis suscipit fringilla.</p>
            <p>Nullam congue neque sed odio scelerisque euismod. Donec sem justo, ornare a leo ac, pretium gravida enim. Phasellus et sem eu orci viverra auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero felis, finibus sit amet vulputate id, luctus id magna. Sed vitae elit id dui pretium lobortis in eu lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis elit et fringilla consequat. Proin gravida bibendum imperdiet. Cras posuere, mi a dignissim luctus, metus risus imperdiet felis, elementum aliquam sapien augue sed sem. Integer vel rhoncus arcu, in vestibulum leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla tincidunt blandit magna, a porta enim ornare in.</p>
            <a target="_blank" rel="noopener noreferrer" href="link_to_your_resume">
              <Button variant="secondary">Resume</Button>
            </a>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default AboutPage;