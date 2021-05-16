import React from "react";

import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { HEROES_CLASSES } from "../../graphql/queries";
import { HeroClassesData } from "../../graphql/interfaces";
import { LazyQueryCallbackFunction } from "../../utils/interfaces";
import ExpandBtn from "../../styled-components/ExpandBtn";
import LoadingAnimation from "../../styled-components/LoadingAnimation";
import CleanUl from "../../styled-components/CleanUl";
import Container from "../../styled-components/Container";

const ClassesList: React.FC<LazyQueryCallbackFunction> = ({
  getClassDetail,
}) => {
  const heroClassesData = useQuery<HeroClassesData>(HEROES_CLASSES);

  return (
    <ClassesListContainer>
      <ClassListTitle>Classes</ClassListTitle>
      {heroClassesData.loading ? (
        <StyledLoading pxSize={86} />
      ) : (
        <ClassesUl>
          {heroClassesData.data &&
            heroClassesData.data.classes.map((heroClass) => (
              <ClassLi key={heroClass.index}>
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
              </ClassLi>
            ))}
        </ClassesUl>
      )}
    </ClassesListContainer>
  );
};

export default ClassesList;

const ClassesListContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20ch;
`;

const ClassListTitle = styled.span`
  font-family: "PT Sans Bold", sans-serif;
  font-size: 2rem;
  position: absolute;
  margin-top: 3rem;
`;

const ClassesUl = styled(CleanUl)`
  margin-top: auto;
  margin-bottom: auto;
`;

const ClassLi = styled.li`
  margin-bottom: 1px;
  min-width: 20ch;
`;

const StyledLoading = styled(LoadingAnimation)`
  margin-top: auto;
  margin-bottom: auto;
`;
