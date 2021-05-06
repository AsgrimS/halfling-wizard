import React from "react";

import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

import { HeroClassesData } from "../../graphql/interfaces";

const HEROES_CLASSES = gql`
  query GetHeroesClasses {
    classes {
      name
    }
  }
`;

const Explorer: React.FC = () => {
  const { loading, data } = useQuery<HeroClassesData>(HEROES_CLASSES);

  return (
    <Layout>
      <Header>Explorer</Header>
      <Content>
        <span>Classes</span>
        <ul>
          {loading ? (
            <h2>Loading..</h2>
          ) : (
            <>
              {data &&
                data.classes.map((heroClass) => <li>{heroClass.name}</li>)}
            </>
          )}
        </ul>
      </Content>
    </Layout>
  );
};

export default Explorer;

const Layout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: 5rem auto;
`;

const Header = styled.div`
  grid-row-start: 1;
  grid-row-end: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  grid-row-start: 2;
  grid-row-end: 2;
`;
