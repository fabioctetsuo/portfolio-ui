import styled from "styled-components";

export const WorkArticle = styled.article`
  display: flex;
  padding: 24px 0;
`;

export const WorkTitle = styled.h3`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0px;
`;

export const WorkDetails = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const WorkCategory = styled.span`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  color: #8695A4;
  text-transform: capitalize;
`;

export const DateTag = styled.time`
  padding: 0 10px;
  background: #142850;
  color: white;
  border-radius: 16px;
  font-family: Heebo;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0px;
`;
