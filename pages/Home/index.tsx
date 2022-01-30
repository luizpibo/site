import Head from "next/head";
import CardList from "../../components/CardList";
import React from "react";
import {
  Container,
  ContainerBlog,
  ContainerInfos,
  ContainerSkills,
  Footer,
  Main,
  PersonalDescription,
  PictureContainer,
  Presentation,
  ProfilePicture,
  Wrapper,
} from "../../components/styles";

const skills = [
  {
    name: "GraphQL",
    level: 70,
    color: "#563D7C",
  },
  {
    name: "JavaScript",
    level: 75,
    color: "#F0DB4F",
  },
  {
    name: "NEXT.JS",
    level: 78,
    color: "black",
  },
  {
    name: "NodeJS",
    level: 80,
    color: "#69A164",
  },
  {
    name: "React",
    level: 80,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    level: 65,
    color: "#007ACC",
  },
];

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Luiz Fernando</title>
      </Head>
      <Main>
        <PictureContainer>
          <ProfilePicture>
            <img src="fotosemfundo3.png" alt="Foto do Luiz"/>
          </ProfilePicture>
        </PictureContainer>
        <Presentation>
          <Wrapper>
            <h3>Welcome I&apos;m</h3>
            <h1>Luiz Fernando</h1>
            <hr/>
            <h3>web developer</h3>
          </Wrapper>
        </Presentation>
      </Main>

      <ContainerSkills>
        <CardList skills={skills} title={"Ferramentas"} />
        <PersonalDescription>
          <h2>Informações pessoais</h2>
          <div>
            <label>nome</label>
            <p>Luiz Fernando</p><br/>
            <label>idade</label>
            <p>24 anos</p><br/>
            <label>Função</label>
            <p>Desenvolvedor Web</p><br/>
            <label>cidade</label>
            <p>Brasília</p><br/>
            <label>estado</label>
            <p>DF</p><br/>
            <label>e-mail</label>
            <p>luizfernandolima_09@hotmail.com</p><br/>
            <label>telefone</label>
            <p>(61) 9 98338-5897</p><br/>
          </div>
        </PersonalDescription>
      </ContainerSkills>
      <ContainerBlog></ContainerBlog>
      <ContainerInfos>

      </ContainerInfos>
      <Footer>
        <a className="githubLink" href="https://www.github.com/luizpibo" />
        <a className="linkedinLink" href="https://www.linkedin.com" />
      </Footer>
    </Container>
  );
}
