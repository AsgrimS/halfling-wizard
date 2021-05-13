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
    <TableContainer>
      <TableTitle>Classes</TableTitle>

      {heroClassesData.loading ? (
        <LoadingAnimation />
      ) : (
        <ClassesTable>
          {heroClassesData.data &&
            heroClassesData.data.classes.map((heroClass) => (
              <tr>
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
              </tr>
            ))}
        </ClassesTable>
      )}
    </TableContainer>
  );
};

export default ClassesList;

const TableContainer = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
  background-color: var(--blackOliveL);
  border-radius: 0.5rem;
  align-self: start;
`;

const TableTitle = styled.span`
  font-family: "PT Sans Bold";
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const ClassesTable = styled.table`
  width: 100%;
`;
