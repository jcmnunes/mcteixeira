/* global graphql */
import React from 'react';
import { Element } from 'react-scroll';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Works from '../components/Works';
import Skills from '../components/Skills';
import DownloadCV from '../components/DownloadCV';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import styles from './index.module.css';

import headings from '../content/headings.json';

const IndexPage = props => (
  <div>
    <Navbar pathname={props.location.pathname} />
    <div id="index-root" style={{ marginTop: '60px' }}>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about" className="section-wrapper">
        <h1>{headings.about}</h1>
        <About />
      </Element>
      <Element name="achievements">
        <Achievements />
      </Element>
      <Element name="work" className="section-wrapper">
        <h1>{headings.works}</h1>
        <Works works={props.data.works} />
      </Element>
      <div className={styles.parallax}>
        <Element name="skills" className="section-wrapper">
          <h1>{headings.skills}</h1>
          <Skills />
        </Element>
      </div>
      <Element name="cv">
        <DownloadCV />
      </Element>
      <Element name="contactme" className={styles.contact}>
        <div className="section-wrapper">
          <h1>{headings.contact}</h1>
          <ContactForm />
        </div>
      </Element>
      <Footer />
    </div>
  </div>
);

export default IndexPage;

export const query = graphql`
  query Homepage {
    profileImg: imageSharp(id: { regex: "/profile/" }) {
      resolutions(width: 146, height: 146) {
        ...GatsbyImageSharpResolutions
      }
    }

    works: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM YY")
            thumbnail
            images {
              image
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
