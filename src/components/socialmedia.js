import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

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

class socialmedia extends React.Component {
  render() {
    library.add(fab);

    return (
      <SocialMedia className="social-media">
        <SocialMediaUl>
          <SocialMediaLi>
            <SocialMediaLink href="https://github.com/XcrossD">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </SocialMediaLink>
          </SocialMediaLi>
          <SocialMediaLi>
            <SocialMediaLink href="https://www.facebook.com/herbert.lin">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </SocialMediaLink>
          </SocialMediaLi>
          <SocialMediaLi>
            <SocialMediaLink href="https://www.instagram.com/gummypearin/">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </SocialMediaLink>
          </SocialMediaLi>
          <SocialMediaLi>
            <SocialMediaLink href="https://www.linkedin.com/in/herbert-lin-28240446/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </SocialMediaLink>
          </SocialMediaLi>
        </SocialMediaUl>
      </SocialMedia>
    );
  }
}

export default socialmedia;