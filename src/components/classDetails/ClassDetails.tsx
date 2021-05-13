import React from "react";

import styled from "styled-components";

import { HeroClassData } from "../../graphql/interfaces";
import SubclassesList from "../subclassesList/SubclassesList";
import ProficienciesList from "../proficienciesList/ProficienciesList";
import SavingThrowsList from "../savingThrowsList/SavingThrowsList";

const ClassDetails: React.FC<HeroClassData> = ({ class: heroClass }) => {
  return (
    <Details>
      <div>
        <span>{heroClass.name}</span>
        <br />
        <span>{heroClass.hit_die}</span>
      </div>
      {heroClass.subclasses && (
        <SubclassesList subclasses={heroClass.subclasses} />
      )}
      {heroClass.proficiencies && (
        <ProficienciesList proficiencies={heroClass.proficiencies} />
      )}
      {heroClass.proficiency_choices &&
        heroClass.proficiency_choices.map((option) => (
          <ProficienciesList
            proficiencies={option.from!}
            chooseFrom={option.choose!}
          />
        ))}
      {heroClass.saving_throws && (
        <SavingThrowsList saving_throws={heroClass.saving_throws} />
      )}
    </Details>
  );
};

export default ClassDetails;

const Details = styled.div`
  align-self: start;
  grid-column-start: 2;
  grid-column-end: 2;
  width: 100%;

  & > div {
    background-color: var(--blackOliveL);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 0.5rem;
    min-width: 215px;
  }
`;
