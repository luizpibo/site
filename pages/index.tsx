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
  posts: PostCard[];
}

const Index: React.FC<Props> = (props) => {
  return <Home posts={props.posts} />;
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

  return {
    props: {
      posts: postsData.allPosts,
    },
  };
};
