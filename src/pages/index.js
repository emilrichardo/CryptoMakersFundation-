import * as React from "react";
import Layout from "../components/Layout";

import favicon from "../images/favicon/favicon.ico";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Hero from "../components/home/Hero";
import Stake from "../components/home/Stake";
import About from "../components/home/About";
import Social from "../components/Social";
import RoadMap from "../components/home/RoadMap";
import Tokenomics from "../components/home/Tokenomics";
import Logos from "../components/home/Logos";
import imageFacebook from "../images/facebook/facebook.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>

            {/* <!-- TWITTER --> */}
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="https://www.cryptomakersfoundation.com/"/>
          <meta name="twitter:title" content="Crypto Makers Foundation"/>
          <meta name="twitter:description" content="Is a community-driven platform empowering users by rewarding them for their engagement and enjoyment. By using innovative tokenomics, utilizing Play to earn, Networking , scholarships and GameFi;Whilst also combining the best of DeFi and NFTs."/>
          <meta name="twitter:creator" content="Disruptive Studio"/>
          <meta name="twitter:image" content={imageFacebook}/>

          {/* <!-- FACEBOOK --> */}
          <meta property="og:site_name" content="Crypto Makers Foundation" />
          <meta property="og:url" content="https://www.cryptomakersfoundation.com/" />
          <meta property="og:title" content="Crypto Makers Foundation" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Is a community-driven platform empowering users by rewarding them for their engagement and enjoyment. By using innovative tokenomics, utilizing Play to earn, Networking , scholarships and GameFi;Whilst also combining the best of DeFi and NFTs." />
          <meta property="og:image" content={imageFacebook} />
          <meta property="og:image:width" content="1024" />
          <meta property="og:image:height" content="538" />
        <meta
          name="description"
          content="We are a community-driven platform empowering users by rewarding them for their engagement and enjoyment. By using innovative tokenomics, utilizing Play to earn, Networking, scholarships and GameFi; Whilst also combining the best of DeFi and NFTs."
        />
        <meta
          name="keywords"
          content="Disruptive Studio, Cryptocurrency, Community-driven, Gamers, Metaverse, Gamefi"
        />
        <meta name="autor" content="Disruptive Studio" />
        <link rel="shortcut icon" href={favicon} />
        <title>Crypto Makers Foundation</title>
      </Helmet>
      <Social />
      <main id="page-content">
        <Hero />
        <Stake />
        <About />
        <RoadMap />
        <Tokenomics />
        <Logos />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
