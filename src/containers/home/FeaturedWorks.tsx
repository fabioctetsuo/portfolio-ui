import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImageFluidProps } from "gatsby-image";
import { Container } from "react-awesome-styled-grid";
import WorkCard from "../../components/Works/WorkCard";
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 22px;
  color: #21243D;
  line-height: 60px
`;

interface Props {}

type Work = {
  work: {
    id: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
      category: string;
      featuredImage: {
        childImageSharp: GatsbyImageFluidProps;
      };
    };
  };
};

type RecentWorksQuery = {
  worksData: {
    works: [Work];
  };
};

const query = graphql`
  query MyQuery {
    worksData: allMdx(
      filter: { fileAbsolutePath: { regex: "/works/" } }
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      works: edges {
        work: node {
          id
          frontmatter {
            title
            description
            date(formatString: "yyyy", locale: "en")
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 246, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

function FeaturedWorks(props: Props) {
  const {} = props;
  const {
    worksData: { works },
  } = useStaticQuery<RecentWorksQuery>(query);

  console.log({ works });

  return (
  <Container style={{ }}>
      <Title>Featured works</Title>
      {works.map(({ work }) => (
        <WorkCard
          key={work.id}
          photo={work.frontmatter.featuredImage.childImageSharp.fluid}
          title={work.frontmatter.title}
          date={work.frontmatter.date}
          category={work.frontmatter.category}
          description={work.frontmatter.description}
        />
      ))}
    </Container>
  );
}

export default FeaturedWorks;
