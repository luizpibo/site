import Head from "next/head";
import CardList from "../../components/CardList";
import React from "react";
import {
  Container,
  ContainerProjectsAndBlog,
  Projects,
  ContainerSkills,
  Footer,
  Main,
  PersonalDescription,
  PictureContainer,
  Post,
  PostList,
  Presentation,
  ProfilePicture,
  Wrapper,
  Blog,
} from "../../components/styles";
import Image from "next/image";
import { skills, postsBlog } from "../../Mocks";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Luiz Fernando</title>
      </Head>
      <Main>
        <PictureContainer>
          <ProfilePicture>
            <img src="/fotosemfundo3.png"  alt="Foto do Luiz"/>
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
      <ContainerProjectsAndBlog>
        <Projects>
            <h2>Projetos</h2>
            <div>
              
            </div>
        </Projects>
        <Blog>
          <h2>Últimos posts</h2>
          <PostList>
            {postsBlog.map((post, index) => {
              return (
                <Post key={`${post.title}${index}`}>
                  <img src={post.image} alt={`Imagem post ${post.title}`} />
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                  <p>{post.date}</p>
                </Post>
              ) 
            })}
          </PostList>
        </Blog>
      </ContainerProjectsAndBlog>

      <Footer>
        <a className="githubLink" href="https://www.github.com/luizpibo" target={"_blank"} />
        <a className="linkedinLink" href="https://www.linkedin.com/in/luiz-fernando-lima-e-silva-858192125/" target={"_blank"} />
      </Footer>
    </Container>
  );
}
