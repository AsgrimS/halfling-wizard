import React from "react";

import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { HEROES_CLASSES } from "../../graphql/queries";
import { HeroClassesData } from "../../graphql/interfaces";
import { LazyQueryCallbackFunction } from "../../utils/interfaces";
import ExpandBtn from "../../styled-components/ExpandBtn";
import LoadingAnimation from "../../styled-components/LoadingAnimation";

const ClassesList: React.FC<LazyQueryCallbackFunction> = ({
  getClassDetail,
}) => {
  const heroClassesData = useQuery<HeroClassesData>(HEROES_CLASSES);

  return (
    <>
      <span>Classes</span>
      <List>
        {heroClassesData.loading ? (
          <LoadingAnimation />
        ) : (
          <>
            {heroClassesData.data &&
              heroClassesData.data.classes.map((heroClass) => (
                <ClassElement key={heroClass.index}>
                  <li>{heroClass.name}</li>
                  <ExpandBtn
                    type="button"
                    onClick={() =>
                      getClassDetail({
                        variables: { classIndex: heroClass.name },
                      })
                    }
                  >
                    Expand
                  </ExpandBtn>
                </ClassElement>
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

const ClassElement = styled.div`
  margin-bottom: 0.1rem;
`;
