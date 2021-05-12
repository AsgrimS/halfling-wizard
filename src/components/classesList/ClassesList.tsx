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
    <ListContainer>
      <ListTitle>Classes</ListTitle>
      <List>
        {heroClassesData.loading ? (
          <LoadingAnimation />
        ) : (
          <>
            {heroClassesData.data &&
              heroClassesData.data.classes.map((heroClass) => (
                <li>
                  <ExpandBtn
                    type="button"
                    onClick={() =>
                      getClassDetail({
                        variables: { classIndex: heroClass.name },
                      })
                    }
                  >
                    {heroClass.name}
                  </ExpandBtn>
                </li>
              ))}
          </>
        )}
      </List>
    </ListContainer>
  );
};

export default ClassesList;

const ListContainer = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
  background-color: var(--blackOliveL);
  border-radius: 0.5rem;
  align-self: start;
`;

const ListTitle = styled.span`
  font-family: "PT Sans Bold";
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const List = styled.ul`
  padding-left: 1rem;
  list-style-type: none;
`;
