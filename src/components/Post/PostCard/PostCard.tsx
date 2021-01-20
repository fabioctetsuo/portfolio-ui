import * as React from "react";
import * as Styled from "./styled";

interface Props {
  title: string;
  description: string;
  date: string;
  categories: string[];
}

const getCategories = (categories: string[]) => {
  return categories.join(", ");
};

const PostCard = ({ title, description, date, categories }: Props) => {
  return (
    <Styled.Article>
      <Styled.PostTitle>{title}</Styled.PostTitle>
      <Styled.PostDetails>
        <time>{date}</time>|
        <Styled.Categories>{getCategories(categories)}</Styled.Categories>
      </Styled.PostDetails>
      <section>{description}</section>
    </Styled.Article>
  );
};

export default PostCard;
