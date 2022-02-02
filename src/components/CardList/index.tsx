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
}

const CardList: React.FC<Props> = ({ skills, title }) => {
  return (
    <div style={{textAlign: "center", minHeight: "100%"}}>
      <h2>{title}</h2>
    <Container>
      {skills.map((skill, index) => {
        return (
          <CardSkill key={`${skill.name}-${index}`}>
            <div style={{ padding: "1rem", width: "10rem", height: "10rem" }}>
              <CircularProgressbarWithChildren
                styles={buildStyles({
                  strokeLinecap: "round",
                  pathTransitionDuration: 0.5,
                  pathColor: `${skill.color}`,
                  textColor: "black",
                  trailColor: "#C0C0C0C0",
                })}
                value={skill.level}
              >
                <span>{skill.name}</span>
              </CircularProgressbarWithChildren>
            </div>
          </CardSkill>
        );
      })}
    </Container>
    </div>
  );
};

export default CardList;