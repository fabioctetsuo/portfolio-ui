import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 24px 64px;
  gap: 32px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  a {
    color: #000;
    text-decoration: none;
  }
`;
