import React from "react";

import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { HEROES_CLASSES } from "../../graphql/queries";
import { HeroClassesData } from "../../graphql/interfaces";
import { LazyQueryCallbackFunction } from "../../utils/interfaces";

const ClassesList: React.FC<LazyQueryCallbackFunction> = ({
  getClassDetail,
}) => {
  const heroClassesData = useQuery<HeroClassesData>(HEROES_CLASSES);

  return (
    <>
      <span>Classes</span>
      <List>
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
      </List>
    </>
  );
};

export default ClassesList;

const List = styled.ul`
  grid-column-start: 1;
  grid-column-end: 1;
`;
