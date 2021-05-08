import React from "react";

import styled from "styled-components";
import { useLazyQuery, gql } from "@apollo/client";

import ClassesList from "../../components/classesList/ClassesList";
import ClassDetails from "../../components/classDetails/ClassDetails";
import { HeroClassData } from "../../graphql/interfaces";

const HERO_CLASS = gql`
  query GetHeroesClasses($classIndex: String!) {
    class(filter: { name: $classIndex }) {
      name
      hit_die
      proficiencies {
        name
        index
      }
    }
  }
`;

const Explorer: React.FC = () => {
  const [getClassDetail, heroClassData] = useLazyQuery<HeroClassData>(
    HERO_CLASS
  );
  return (
    <Layout>
      <Header>Explorer</Header>
      <Content>
        <PanelLayout>
          <ClassesList getClassDetail={getClassDetail} />
          {heroClassData.data && (
            <ClassDetails class={heroClassData.data.class} />
          )}
        </PanelLayout>
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

const PanelLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 1;
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
