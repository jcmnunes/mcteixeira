import React from 'react';
import Link from 'gatsby-link';
import { Element } from 'react-scroll';
import styles from './index.module.css';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Element name="test1" className={styles.test}>
      <h1>Section 1</h1>
    </Element>
    <Element name="test2" className={styles.test}>
      <h1>Section 2</h1>
    </Element>
    <Element name="test3" className={styles.test}>
      <h1>Section 3</h1>
    </Element>
    <Element name="test4" className={styles.test}>
      <h1>Section 4</h1>
    </Element>
  </div>
);

export default IndexPage;
