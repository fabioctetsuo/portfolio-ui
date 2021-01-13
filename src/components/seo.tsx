import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  title?: string;
  image?: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        author
      }
    }
    homeImage: file(relativePath: { eq: "home-image.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1012) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function SEO({ description, lang = "en", title, image }: Props) {
  const { site, homeImage } = useStaticQuery(query);
  const homeImageUrl = homeImage.childImageSharp.fluid.src;

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    author,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || homeImageUrl}`,
    url: `${siteUrl}`,
    author,
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={titleTemplate}
      meta={[
        { name: `description`, content: seo.description },
        { property: `og:title`, content: seo.title },
        { property: `og:description`, content: seo.description },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:image`, content: seo.image },
        { name: `twitter:creator`, content: seo.author },
        { name: `twitter:title`, content: seo.title },
        { name: `twitter:description`, content: seo.description },
        { name: `twitter:image:alt`, content: seo.description },
      ]}
    />
  );
}

export default SEO;
