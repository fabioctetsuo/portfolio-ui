import styled from "styled-components";
import { config } from "react-awesome-styled-grid";

export const Article = styled.article`
  padding: 24px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 8px 0;

  ${(props) => config(props).media["md"]`
    margin: 0;
  `}
`;

export const PostTitle = styled.h3`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0px;
`;

export const PostDetails = styled.div`
  display: flex;
  gap: 24px;
  font-family: Heebo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
`;

export const Categories = styled.span``;
