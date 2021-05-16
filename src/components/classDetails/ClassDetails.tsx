import React from "react";

import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { HeroClassData } from "../../graphql/interfaces";
import SubclassesList from "../subclassesList/SubclassesList";
import ProficienciesList from "../proficienciesList/ProficienciesList";
import SavingThrowsList from "../savingThrowsList/SavingThrowsList";
import Spellcasting from "../spellcasting/Spellcasting";
import Container from "../../styled-components/Container";

const ClassDetails: React.FC<HeroClassData> = ({ class: heroClass }) => {
  return (
    <Details id="class-details">
      <div>
        <span>{heroClass.name}</span>
        {/* <br />
          <span>{heroClass.hit_die}</span> */}
      </div>
      {heroClass.subclasses && (
        <SubclassesList subclasses={heroClass.subclasses} />
      )}
      {heroClass.saving_throws && (
        <SavingThrowsList saving_throws={heroClass.saving_throws} />
      )}
      {heroClass.spellcasting && (
        <Spellcasting spellcasting={heroClass.spellcasting} />
      )}
      {heroClass.proficiencies && (
        <ProficienciesList proficiencies={heroClass.proficiencies} />
      )}
      {heroClass.proficiency_choices &&
        heroClass.proficiency_choices.map((option) => (
          <ProficienciesList
            key={uuidv4()}
            proficiencies={option.from!}
            chooseFrom={option.choose!}
          />
        ))}
    </Details>
  );
};

export default ClassDetails;

const Details = styled(Container)`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  & > div {
    background-color: var(--blackOliveL);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    min-width: 20ch;
  }
`;
