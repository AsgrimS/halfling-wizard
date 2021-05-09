import React from "react";

import styled from "styled-components";
import { useLazyQuery } from "@apollo/client";

import { HERO_CLASS } from "../../graphql/queries";
import { HeroClassData } from "../../graphql/interfaces";
import ClassesList from "../../components/classesList/ClassesList";
import ClassDetails from "../../components/classDetails/ClassDetails";

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
          {heroClassData.called && heroClassData.loading === true && (
            <h1>loading</h1>
          )}
          {heroClassData.loading === false && heroClassData.data && (
            <ClassDetails class={heroClassData.data.class} />
            // maybe fetch inside compnents
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
