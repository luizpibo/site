import Home from "./Home";
import { gql, GraphQLClient } from "graphql-request";

import { GetStaticProps } from "next";
import React from "react";

const graphqlRequest = gql`
  query LastPostscards {
    allPosts(first: 10, orderBy: date_DESC) {
      title
      author {
        name
      }
      id
      _createdAt
      slug
      coverImage {
        url
      }
    }
  }
`;

export interface PostCard {
  title: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  category: {
    name: string;
  };
  slug: string;
  id: string;
  _createdAt: string;
  coverImage: {
    url: string;
  };
}

interface Props {
  blogPosts: PostCard[];
  repos: Array<any>;
}

const Index: React.FC<Props> = (props) => {
  return <Home posts={props.blogPosts} repos={props.repos}/>;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.NEXT_CMS_DATOCMS_READ_ONLY_API_TOKEN}`,
    },
  });

  const postsData = await graphQLClient.request(graphqlRequest);

  const repositoriosData = await fetch("https://api.github.com/users/luizpibo/repos").then((res) => res.json());
  const repositorios = repositoriosData.map((repo) => {
    return {
      name: repo.name,
      url: repo.html_url,
      id: repo.id,
    };
  })

  return {
    props: {
      blogPosts: postsData.allPosts,
      repos: repositorios,
    },
  };
};
