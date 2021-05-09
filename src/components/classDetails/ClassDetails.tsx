import React from "react";

import styled from "styled-components";

import { HeroClassData } from "../../graphql/interfaces";
import SubclassesList from "../subclassesList/SubclassesList";

const ClassDetails: React.FC<HeroClassData> = ({ class: heroClass }) => {
  return (
    <Details>
      <p>{heroClass.name}</p>
      <p>{heroClass.hit_die}</p>
      {heroClass.subclasses && (
        <SubclassesList subclasses={heroClass.subclasses} />
      )}
    </Details>
  );
};

export default ClassDetails;

const Details = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
`;
