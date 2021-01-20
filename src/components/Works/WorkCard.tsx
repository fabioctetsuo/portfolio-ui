import * as React from "react";
import Image, { FluidObject } from "gatsby-image";
import * as Styled from "./styled";

type WorkCardProps = {
  photo: FluidObject | FluidObject[];
  title: string;
  date: string;
  category: string;
  description: string;
};

const WorkCard = ({
  photo,
  title,
  date,
  category,
  description,
}: WorkCardProps) => {
  return (
    <Styled.WorkArticle>
      <div style={{ marginRight: 16 }}>
        <Image fluid={photo} alt={title} style={{ width: 246 }} />
      </div>
      <section>
        <Styled.WorkTitle>{title}</Styled.WorkTitle>
        <Styled.WorkDetails>
          <Styled.DateTag>{date}</Styled.DateTag>
          <Styled.WorkCategory>{category}</Styled.WorkCategory>
        </Styled.WorkDetails>
        <p style={{marginTop: 32}}>{description}</p>
      </section>
    </Styled.WorkArticle>
  );
};

export default WorkCard;
