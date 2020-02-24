import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    library.add(fab);

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
            <Col md={4} className="d-flex align-items-center justify-content-end">
              <div className="social-media">
                <ul>
                  <li>
                    <a href="https://github.com/yourgithub">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/yourfacebook">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/yourinstagram/">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/yourlinkedin/">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Layout
