import React from 'react';
import Work from './Work';
import styles from './Works.module.css';

import content from '../../content/works.json';

/**
 * Works component
 */
const Works = ({ works }) => (
  <React.Fragment>
    <p>{content.text}</p>
    <div className={styles.workContainer}>
      {works.edges.map(({ node }) => (
        <Work key={node.id} data={node} />
      ))}
    </div>
  </React.Fragment>
);

export default Works;
