import React from "react";

import { useQuery, useLazyQuery, gql } from "@apollo/client";
import styled from "styled-components";

import { Class } from "../../graphql/types";

interface HeroClassesData {
  classes: Class[];
}

interface HeroClassData {
  class: Class;
}

const HEROES_CLASSES = gql`
  query GetHeroesClasses {
    classes {
      name
      index
    }
  }
`;

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
  const heroClassesData = useQuery<HeroClassesData>(HEROES_CLASSES);
  const [getClassDetail, heroClassData] = useLazyQuery<HeroClassData>(
    HERO_CLASS
  );

  return (
    <Layout>
      <Header>Explorer</Header>
      <Content>
        <span>Classes</span>
        <ul>
          {heroClassesData.loading ? (
            <h2>Loading..</h2>
          ) : (
            <>
              {heroClassesData.data &&
                heroClassesData.data.classes.map((heroClass) => (
                  <div key={heroClass.index}>
                    <li>{heroClass.name}</li>
                    <button
                      type="button"
                      onClick={() =>
                        getClassDetail({
                          variables: { classIndex: heroClass.name },
                        })
                      }
                    >
                      Expand
                    </button>
                  </div>
                ))}
            </>
          )}
        </ul>
        {heroClassData.data && (
          <div>
            <p>{heroClassData.data.class.name}</p>
            <p>{heroClassData.data.class.hit_die}</p>
            <p>Proficiencies:</p>
            <ul>
              {heroClassData.data.class.proficiencies?.map((proficiency) => (
                <li key={proficiency?.index}>{proficiency?.name}</li>
              ))}
            </ul>
          </div>
        )}
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
