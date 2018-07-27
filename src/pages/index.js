import React from 'react';
import { Element } from 'react-scroll';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Work from '../components/Work';
import Skills from '../components/Skills';
import DownloadCV from '../components/DownloadCV';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import styles from './index.module.css';

const IndexPage = props => (
  <div>
    <Navbar pathname={props.location.pathname} />
    <div id="index-root" style={{ marginTop: '60px' }}>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about" className="section-wrapper">
        <About />
      </Element>
      <Element name="achievements">
        <Achievements />
      </Element>
      <Element name="work" className="section-wrapper">
        <h1>My latest work</h1>
        <p>
          Maecenas quis justo at neque venenatis sagittis. Cras felis augue,
          malesuada quis iaculis eu, posuere vitae ante. Etiam ut malesuada
          massa. Maecenas massa nunc. Ut egestas auctor felis, rhoncus ornare
          orci lacinia a. Proin blandit lorem finibus tincidunt.
        </p>
        <div className={styles.workContainer}>
          {props.data.works.edges.map(({ node }) => (
            <Work key={node.id} data={node} />
          ))}
        </div>
      </Element>
      <div className={styles.parallax}>
        <Element name="skills" className="section-wrapper">
          <h1>SKILLS</h1>
          <Skills />
        </Element>
      </div>
      <Element name="cv">
        <DownloadCV />
      </Element>
      <Element name="contactme" className={styles.contact}>
        <div className="section-wrapper">
          <h1>SEND ME A MESSAGE</h1>
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

    works: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
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
