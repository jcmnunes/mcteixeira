/* global graphql */
/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import Img from 'gatsby-image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Date from '../components/common/Date';

import styles from './WorkSingle.module.css';

export default class WorkSingle extends Component {
  render() {
    const { data, location } = this.props;
    const { heroImage } = data.markdownRemark.fields;
    return (
      <div className={styles.root}>
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
        <div className="workSingle-wrapper">
          <div className={styles.tags}>
            {data.markdownRemark.frontmatter.tags.map(({ tag }) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div className={styles.author}>{data.markdownRemark.frontmatter.author}</div>
          <Date date={data.markdownRemark.frontmatter.date} />
        </div>
        <div
          className={`workSingle-wrapper ${styles.postBody}`}
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
        <Footer />
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
        author
        date(formatString: "MMM YY")
        tags {
          tag
        }
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
