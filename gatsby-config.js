module.exports = {
  siteMetadata: {
    title: "bellmcp.work",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`noto-sans:400,700`],
        display: "swap",
      },
    },
  ],
};
