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
      <Button medium>
        <a href={require('../../../files/dummy.pdf')} download>
          DOWNLOAD
        </a>
      </Button>
      <Button>
        <a href={require('../../../files/dummy.pdf')} download>
          DOWNLOAD
        </a>
      </Button>
    </div>
  </div>
);

export default DownloadCV;
