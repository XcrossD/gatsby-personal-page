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

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  align-content: stretch;
  text-align: right;
`;

const SocialMediaUl = styled.ul`
  list-style: none;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const SocialMediaLi = styled.li`
  display: inline-block;
  margin: 0 18px 0 18px;
  padding: 0;
`;

const SocialMediaLink = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: #f1f1f1;
  &:hover, &:visited, &:active {
    color: #f1f1f1;
  }
`;

class Layout extends React.Component {
  render() {
    library.add(fab);

    const { children, title } = this.props;
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
                <SocialMedia className="social-media">
                  <SocialMediaUl>
                    <SocialMediaLi>
                      <SocialMediaLink href="https://github.com/yourgithub">
                        <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                      </SocialMediaLink>
                    </SocialMediaLi>
                    <SocialMediaLi>
                      <SocialMediaLink href="https://www.facebook.com/yourfacebook">
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                      </SocialMediaLink>
                    </SocialMediaLi>
                    <SocialMediaLi>
                      <SocialMediaLink href="https://www.instagram.com/yourinstagram/">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                      </SocialMediaLink>
                    </SocialMediaLi>
                    <SocialMediaLi>
                      <SocialMediaLink href="https://www.linkedin.com/in/yourlinkedin/">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                      </SocialMediaLink>
                    </SocialMediaLi>
                  </SocialMediaUl>
                </SocialMedia>
              </Col>
            </Row>
          </Container>
        </FooterWrapper>
      </React.Fragment>
    )
  }
}

export default Layout
