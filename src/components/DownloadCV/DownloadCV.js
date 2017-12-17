import React from 'react';
import Button from '../common/Button';
import styles from './DownloadCV.module.css';

/**
 * DownloadCV component
 */
const DownloadCV = () => (
  <div className="section-wrapper">
    <div className={styles.heading}>
      <h1>Download my CV</h1>
    </div>
    <div className={styles.download}>
      <a href={require('../../../files/dummy.pdf')} download="download.pdf">
        <Button medium>DOWNLOAD (7KB)</Button>
      </a>
      <a href={require('../../../files/dummy.pdf')} download="download.pdf">
        <Button>DOWNLOAD (7KB)</Button>
      </a>
    </div>
  </div>
);

export default DownloadCV;
