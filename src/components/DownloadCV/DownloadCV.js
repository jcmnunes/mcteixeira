import React from 'react';
import Button from '../common/Button';
import styles from './DownloadCV.module.css';

import headings from '../../content/headings.json';
import content from '../../content/download.json';

/**
 * DownloadCV component
 */
const DownloadCV = () => (
  <div className="section-wrapper">
    <div className={styles.heading}>
      <h1>{headings.download}</h1>
    </div>
    <div className={styles.download}>
      <a href={require('../../../files/dummy.pdf')} download="download.pdf">
        <Button medium>{content.btnText}</Button>
      </a>
      <a href={require('../../../files/dummy.pdf')} download="download.pdf">
        <Button>{content.btnText}</Button>
      </a>
    </div>
  </div>
);

export default DownloadCV;
