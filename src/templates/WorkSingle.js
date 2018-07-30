/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import Img from 'gatsby-image';

import Navbar from '../components/Navbar';

import styles from './WorkSingle.module.css';

export default class WorkSingle extends Component {
  render() {
    const { data, location } = this.props;
    const { heroImage } = data.markdownRemark.fields;
    return (
      <div>
        <Navbar pathname={location.pathname} />
        <div className={styles.headerImage}>
          <Img
            sizes={heroImage.childImageSharp.sizes}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
          />
          <div className={styles.backdrop} />
        </div>
        <div 
          className={`section-wrapper ${styles.postBody}`}
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </div>
    );
  }
}

export const query = graphql`
  query WorkSingleQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
      fields {
        heroImage {
          childImageSharp {
            sizes(maxWidth: 850) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    background: imageSharp(id: { regex: "/adi.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
