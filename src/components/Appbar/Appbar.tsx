import * as React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import * as Styled from "./styled";

interface Props {}

const routes = [
  { to: "/", children: "Home" },
  { to: "/works", children: "Works" },
  { to: "/blog", children: "Blog" },
  { to: "/contact", children: "Contact" },
];

const Appbar: React.FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <Styled.Header>
      <Styled.Menu>
        {routes.map((props) => (
          <li key={props.to}>
            <Link {...props} activeStyle={{ color: "#FF6464" }} />
          </li>
        ))}
      </Styled.Menu>
    </Styled.Header>
  );
};

export default Appbar;
