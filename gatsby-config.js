module.exports = {
  siteMetadata: {
    title: `Wolt `,
    description: `Discover and get great food. You deserve this`,
    author: `hamid r jafari`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
