/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import Img from 'gatsby-image';

import Navbar from '../components/Navbar';

import styles from './WorkSingle.module.css';

export default class WorkSingle extends Component {
  render() {
    const { data, location } = this.props;
    if (!data) {
      return null;
    }
    return (
      <div>
        <Navbar pathname={location.pathname} />
        <div className={styles.headerImage}>
          <Img
            sizes={data.background.sizes}
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
        {/* <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1> */}
        <div className="section-wrapper">
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </div>
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
        thumbnail
      }
    }

    background: imageSharp(id: { regex: "/img1.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
