module.exports = {
  siteMetadata: {
    title: 'MCT - Maria Teixeira',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'works',
        path: `${__dirname}/src/works`,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#0099cc',
        showSpinner: true,
      },
    },
  ],
};
