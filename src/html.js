import React from 'react';
import apple57 from '../images/favicon/apple-icon-57x57.png';
import apple60 from '../images/favicon/apple-icon-60x60.png';
import apple72 from '../images/favicon/apple-icon-72x72.png';
import apple76 from '../images/favicon/apple-icon-76x76.png';
import apple114 from '../images/favicon/apple-icon-114x114.png';
import apple120 from '../images/favicon/apple-icon-120x120.png';
import apple144 from '../images/favicon/apple-icon-144x144.png';
import apple152 from '../images/favicon/apple-icon-152x152.png';
import apple180 from '../images/favicon/apple-icon-180x180.png';
import android192 from '../images/favicon/android-icon-192x192.png';
import fav16 from '../images/favicon/favicon-16x16.png';
import fav32 from '../images/favicon/favicon-32x32.png';
import fav96 from '../images/favicon/favicon-96x96.png';
import ms144 from '../images/favicon/ms-icon-144x144.png';
import favManifest from '../images/favicon/manifest.json';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* Favicons */}
          <link rel="apple-touch-icon" sizes="57x57" href={apple57} />
          <link rel="apple-touch-icon" sizes="60x60" href={apple60} />
          <link rel="apple-touch-icon" sizes="72x72" href={apple72} />
          <link rel="apple-touch-icon" sizes="76x76" href={apple76} />
          <link rel="apple-touch-icon" sizes="114x114" href={apple114} />
          <link rel="apple-touch-icon" sizes="120x120" href={apple120} />
          <link rel="apple-touch-icon" sizes="144x144" href={apple144} />
          <link rel="apple-touch-icon" sizes="152x152" href={apple152} />
          <link rel="apple-touch-icon" sizes="180x180" href={apple180} />
          <link rel="icon" type="image/png" sizes="192x192" href={android192} />
          <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
          <link rel="icon" type="image/png" sizes="96x96" href={fav96} />
          <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
          <link rel="manifest" href={favManifest} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content={ms144} />
          <meta name="theme-color" content="#ffffff" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
