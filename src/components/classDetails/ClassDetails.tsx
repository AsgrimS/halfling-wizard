import React from "react";

import styled from "styled-components";

import { HeroClassData } from "../../graphql/interfaces";
import SubclassesList from "../subclassesList/SubclassesList";
import ProficienciesList from "../proficienciesList/ProficienciesList";
import SavingThrowsList from "../savingThrowsList/SavingThrowsList";

const ClassDetails: React.FC<HeroClassData> = ({ class: heroClass }) => {
  return (
    <Details>
      <p>{heroClass.name}</p>
      <p>{heroClass.hit_die}</p>
      {heroClass.subclasses && (
        <SubclassesList subclasses={heroClass.subclasses} />
      )}
      {heroClass.proficiencies && (
        <ProficienciesList proficiencies={heroClass.proficiencies} />
      )}
      {heroClass.saving_throws && (
        <SavingThrowsList saving_throws={heroClass.saving_throws} />
      )}
    </Details>
  );
};

export default ClassDetails;

const Details = styled.div`
  justify-self: start;
  align-self: start;
  grid-column-start: 2;
  grid-column-end: 2;
`;
