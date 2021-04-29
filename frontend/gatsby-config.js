
module.exports = {
  siteMetadata: {
    title: "frontend",
    siteUrl:"http://min-research.co.kr",
    author: {
      name: `민코딩 연구소`,
      summary: `알고리즘 강의`,
    },
    social: {
      twitter: `민코딩 연구소`,
    },
    
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:8080",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-gtag",
      options:{
        trackingId:"G-8YQZXG56BX"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
