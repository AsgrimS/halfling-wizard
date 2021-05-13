import React from "react";

import styled from "styled-components";
import { useLazyQuery } from "@apollo/client";

import { HERO_CLASS } from "../../graphql/queries";
import { HeroClassData } from "../../graphql/interfaces";
import ClassesList from "../../components/classesList/ClassesList";
import ClassDetails from "../../components/classDetails/ClassDetails";
import LoadingAnimation from "../../styled-components/LoadingAnimation";

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
            <LoadingAnimation />
          )}
          {heroClassData.loading === false && heroClassData.data && (
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
  padding-right: 1rem;
  padding-left: 1rem;
  grid-template-columns: auto;
  grid-template-rows: 5rem auto;
`;

const PanelLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 5fr;
  grid-template-rows: 1;
  column-gap: 1rem;
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
