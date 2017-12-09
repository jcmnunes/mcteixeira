import React from 'react';
import { Element } from 'react-scroll';
import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import { Hex } from '../components/icons';
import styles from './index.module.css';

const IndexPage = () => (
  <div style={{ marginTop: '60px' }}>
    <Element name="home">
      <Hero />
    </Element>
    <Element name="about" className="section-wrapper">
      <h1>Summary about me</h1>
      <div className="flex-grid">
        <div className="col col1">
          <p>
            <span style={{ float: 'left', marginRight: '1rem' }}>
              <Hex size={60} text="L" />
            </span>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius
            blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Aenean lacinia
            bibendum nulla sed consectetur. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a
            pharetra augue. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <h3>My education</h3>
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam
            quis risus eget urna mollis ornare vel eu leo. Cras mattis
            consectetur purus sit amet fermentum.
          </p>
        </div>
        <div className="col col2">
          <h3>My career</h3>
          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Aenean lacinia bibendum nulla sed consectetur. Duis mollis,
            est non commodo luctus, nisi erat porttitor ligula, eget lacinia
            odio sem nec elit. Curabitur blandit tempus porttitor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh
            ultricies vehicula ut id elit. Duis mollis, est non commodo luctus,
            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla
            vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna
            mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam.
          </p>
        </div>
      </div>
    </Element>
    <Element name="achievements" className={styles.test}>
      <Achievements />
    </Element>
    <Element name="work" className={styles.test}>
      <h1>WORK</h1>
    </Element>
    <Element name="skills" className={styles.test}>
      <h1>SKILLS</h1>
    </Element>
    <Element name="contactme" className={styles.test}>
      <h1>CONTACT ME</h1>
    </Element>
  </div>
);

export default IndexPage;
