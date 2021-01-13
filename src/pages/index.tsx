import * as React from "react";
import { graphql } from "gatsby";
import Image, { FluidObject, GatsbyImageProps } from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Container, Row, Col, config } from "react-awesome-styled-grid";
import styled from "styled-components";

type Props = {
  data: {
    myPicture: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
};

const Title = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
`;

const Describe = styled.h3`
  margin-top: 40px;
  line-height: 23px;
`;

const Button = styled.button`
  background: #ff6464;
  border-radius: 2px;
  padding: 8px 16px;
  color: #fff;
  margin-top: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  width: max-content;
  border: none;
  outline: none;
`;

const CustomImage = styled(Image)<GatsbyImageProps>`
  width: 180px;
  border-radius: 50%;
  box-shadow: -4px 10px 0px 3px #edf7fa;
  margin-bottom: 32px;

  ${(props) => config(props).media["md"]`
    width: 243px;
    margin-bottom: 0;
  `}
`;

const CustomCol = styled(Col)`
  align-items: center;

  ${(props) => config(props).media["md"]`
    align-items: flex-end;
  `}
`;

// markup
const IndexPage = ({ data }: Props) => {
  // console.log({ data });
  return (
    <Layout>
      <SEO title="Homepage" />
      <main style={{ marginTop: "158px" }}>
        <Container>
          <Row reverse={["xs", "sm"]}>
            <Col md={5}>
              <Title>
                Hi, I am John, <br />
                Creative Technologist
              </Title>
              <Describe>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Describe>
              <Button>Download Resume</Button>
            </Col>
            <CustomCol md={3}>
              <CustomImage fluid={data.myPicture.childImageSharp.fluid} />
            </CustomCol>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    myPicture: file(relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 245) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
