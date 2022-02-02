import Head from "next/head";

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
} from "../../src/components/styles";

import CardList from "../../src/components/CardList";
import Date from "../../src/components/Date";
import { skills } from "../../src/Mocks";
import { PostCard } from '../index';
import Link from "next/link";

interface HomeProps {
  posts?: Array<PostCard>,
}

const Home: React.FC<HomeProps> = ({posts}) => {
  if(!posts){
    return <div>Loading...</div>
  }
  return (
    <Container>
      <Head>
        <title>Luiz Fernando</title>
      </Head>
      <Main>
        <PictureContainer>
          <ProfilePicture>
            <img src="/fotosemfundo3.png" alt="Foto do Luiz" />
          </ProfilePicture>
        </PictureContainer>
        <Presentation>
          <Wrapper>
            <h4>Welcome I&apos;m</h4>
            <h1>Luiz Fernando</h1>
            <hr />
            <h4>web developer</h4>
          </Wrapper>
        </Presentation>
      </Main>

      <ContainerSkills>
        <CardList skills={skills} title={"Ferramentas"} />
        <PersonalDescription>
          <h2>Informações pessoais</h2>
          <div>
            <label>nome</label>
            <p>Luiz Fernando</p>
            <br />
            <label>idade</label>
            <p>24 anos</p>
            <br />
            <label>Função</label>
            <p>Desenvolvedor Web</p>
            <br />
            <label>cidade</label>
            <p>Brasília</p>
            <br />
            <label>estado</label>
            <p>DF</p>
            <br />
            <label>e-mail</label>
            <p>luizfernandolima_09@hotmail.com</p>
            <br />
            <label>telefone</label>
            <p>(61) 9 98338-5897</p>
            <br />
          </div>
        </PersonalDescription>
      </ContainerSkills>
      <ContainerProjectsAndBlog>
        <Projects>
          <h3>Projetos</h3>
          <div></div>
        </Projects>
        <Blog>
          <h3>Últimos posts</h3>
          <PostList>
            {posts.map((post, index) => {
              return (
                <Link key={`${post.id}`} href={`https://luiz-fernando-blog.vercel.app/posts/${post.slug}`}>
                <Post >
                  <img src={post.coverImage.url} alt={`Imagem post ${post.title}`} />
                  <div>
                    <h4>{post.title}</h4>
                    <span>Author - {post.author.name}</span>
                  </div>
                  <Date dateString={post._createdAt}/>
                </Post>
                </Link>
              );
            })}
          </PostList>
        </Blog>
      </ContainerProjectsAndBlog>

      <Footer>
        <a
          className="githubLink"
          href="https://www.github.com/luizpibo"
          target={"_blank"}
        />
        <a
          className="linkedinLink"
          href="https://www.linkedin.com/in/luiz-fernando-lima-e-silva-858192125/"
          target={"_blank"}
        />
      </Footer>
    </Container>
  );
}

export default Home;