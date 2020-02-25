import React from "react";
import { StaticQuery, graphql } from "gatsby";
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
      <StaticQuery 
        query={socialMediaQuery}
        render={data => {
          const { social } = data.site.siteMetadata;
          const { socialUrl } = data;
          return (
            <SocialMedia className="social-media">
              <SocialMediaUl>
                {Object.keys(social).map(site => (
                  <SocialMediaLi key={`social-media-${site}`}>
                    <SocialMediaLink href={`${socialUrl[site]}${social[site]}`}>
                      <FontAwesomeIcon icon={['fab', site]} size="lg" />
                    </SocialMediaLink>
                  </SocialMediaLi>
                ))}
              </SocialMediaUl>
            </SocialMedia>
          );
        }}
      />
    );
  }
}

const socialMediaQuery = graphql`
  query SocialMediaQuery {
    site {
      siteMetadata {
        social {
          facebook
          github
          instagram
          linkedin    
        }
      }
    }
    socialUrl: dataJson {
      facebook
      github
      instagram
      linkedin
    }
  }
`

export default socialmedia;