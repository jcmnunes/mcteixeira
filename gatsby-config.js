module.exports = {
  siteMetadata: {
    title: 'MCT - Maria Teixeira',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#0099cc',
        showSpinner: true,
      },
    },
  ],
};
