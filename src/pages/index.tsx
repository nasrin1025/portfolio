import Head from "next/head";

import { NextSeo } from "next-seo";

import HeroSection from "@/components/company/hero-section";
import AboutSection from "@/components/company/about-section";
import ServicesSection from "@/components/company/services-section";
import ProjectsSection from "@/components/company/projects-section";
import ContactSection from "@/components/company/contact-section";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="WeFlow Solutions - Global Blockchain, AI & Software Engineering"
        description="WeFlow Solutions is a global technology partner delivering cutting-edge blockchain, AI, and full-stack software solutions to 10+ international clients across DeFi platforms, NFT marketplaces, and AI-driven systems."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "WeFlow Solutions - Blockchain, AI & Software Engineering",
          description:
            "Global technology partner for blockchain and AI. Expert in DeFi, NFT platforms, DAO governance, and AI-powered trading systems. 10+ international clients, 50+ projects delivered.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "WeFlow Solutions - Blockchain, AI & Software Engineering",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Blockchain Development, AI Solutions, DeFi, NFT Marketplace, Smart Contracts, Web3, DAO, Decentralized Exchange, Trading Bot, Machine Learning, Software Engineering, WeFlow Solutions, weflowsolutions, Global IT Company",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
