import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialMedia from "./socialmedia";

const FooterWrapper = styled.footer`
  background-color: #171717;
  color: #f1f1f1;
  margin-top: 100px;
  padding: 50px 0;
`;

const EmailLink = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: #f1f1f1;
  &:hover, &:visited, &:active {
    color: #f1f1f1;
  }
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Container>
          <Navbar className="mb-3 pl-0">
            <Navbar.Brand as={Link} to="/">Your name</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/work">Work</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          {children}
        </Container>
        <FooterWrapper>
          <Container className="pt-6">
            <Row>
              <Col md={8} className="d-flex flex-column justify-content-center">
                <h3>Your name</h3>
                <EmailLink href="mailto:yourname@somemail.com">yourname@somemail.com</EmailLink>
              </Col>
              <Col md={4} className="d-flex align-items-center justify-content-end">
                <SocialMedia />
              </Col>
            </Row>
          </Container>
        </FooterWrapper>
      </React.Fragment>
    )
  }
}

export default Layout
