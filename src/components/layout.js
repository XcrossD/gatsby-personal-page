import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <React.Fragment>
        <Container>
          <Navbar>
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
        <Container>
          <Row>
            <Col md={8}>
              <h3>Your name</h3>
              <a href="mailto:yourname@somemail.com">yourname@somemail.com</a>
            </Col>
            <Col md={4}>
              // 這裡做 social media
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Layout
