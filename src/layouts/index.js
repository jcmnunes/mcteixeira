import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'prismjs/themes/prism.css';
import '../assets/styles/global.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="MCT - Maria Teixeira"
      meta={[
        {
          name: 'description',
          content: 'MCT - Maria Teixeira - Personal website',
        },
        { name: 'keywords', content: 'PhD, Research, Pharma' },
      ]}
    />
    <div>{children()}</div>
    <div id="menu-root" />
  </div>
);

TemplateWrapper.defaultProps = {
  children: () => {},
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
