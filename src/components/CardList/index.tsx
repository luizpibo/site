import Image from "next/image";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { CardSkill, Container } from "./styles";

interface Props {
  skills: Array<Skill>;
  title: string;
}

interface Skill {
  name: string;
  level: number;
  color: string;
  image: string;
}

const CardList: React.FC<Props> = ({ skills, title }) => {
  return (
    <div style={{ textAlign: "center", minHeight: "100%" }}>
      <h2>{title}</h2>
      <Container>
        {skills.map((skill, index) => {
          return (
            <CardSkill key={`${skill.name}-${index}`}>
              <Image height={70} width={70} src={"/" + skill.image} />
              <span>{skill.name}</span>
            </CardSkill>
          );
        })}
      </Container>
    </div>
  );
};

export default CardList;
