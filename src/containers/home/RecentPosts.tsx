import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PostCard from "../../components/Post/PostCard";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-awesome-styled-grid";

const Title = styled.h2`
  font-family: Heebo;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0px;
  text-align: left;
`;

const LinkPosts = styled(Link)`
  color: #00A8CC;
  text-decoration: none;
`;

const query = graphql`
  query RecentPosts {
    postsData: allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: 2
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      posts: edges {
        post: node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMM yyyy", locale: "en")
            categories
          }
        }
      }
    }
  }
`;

type Post = {
  post: {
    id: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
      categories: [string];
    };
  };
};

type RecentPostsQuery = {
  postsData: {
    posts: [Post];
  };
};

const RecentPosts = () => {
  const {
    postsData: { posts },
  } = useStaticQuery<RecentPostsQuery>(query);
  console.log({ posts });

  return (
    <Container>
      <Row>
        <Col>
          <Title>Recent posts</Title>
        </Col>
        <Col align="flex-end" justify="center">
          <LinkPosts to="/posts">
            View all
          </LinkPosts>
        </Col>
      </Row>
      <Row>
        {posts.map(({ post }) => (
          <Col key={post.id} xs={4} md={4}>
            <PostCard
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              date={post.frontmatter.date}
              categories={post.frontmatter.categories}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecentPosts;
