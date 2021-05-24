import React, { useEffect } from "react";

import styled from "styled-components";

import { HeroClassData } from "../graphql/interfaces";
import SubclassesList from "./subclasses/SubclassesList";
import ProficienciesList from "./ProficienciesList";
import SavingThrowsList from "./SavingThrowsList";
import Spellcasting from "./spellcasting/Spellcasting";
import StartingEquipment from "./StartingEquipment";
import Container from "./styled-components/Container";

const ClassDetails: React.FC<HeroClassData> = ({ class: heroClass }) => {
  useEffect(() => {
    document.getElementById("class-details")?.scrollIntoView();
  }, [heroClass.index]);

  return (
    <Details id="class-details">
      <div>
        <span>{heroClass.name}</span>
      </div>
      <div>
        <span>Hit die {heroClass.hit_die}</span>
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
      {heroClass.starting_equipment && (
        <StartingEquipment startingEquipments={heroClass.starting_equipment} />
      )}
      {heroClass.proficiencies && heroClass.proficiency_choices && (
        <ProficienciesList
          proficiencies={heroClass.proficiencies}
          proficienciesChoices={heroClass.proficiency_choices}
        />
      )}
      <PushDown />
    </Details>
  );
};

export default ClassDetails;

const Details = styled(Container)`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  --backgroundColor: var(--blackOliveL);

  & > div:not(:last-of-type) {
    background-color: var(--eerieBlack);
    opacity: 0.9;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    min-width: 20ch;
    padding: 0.5rem;
  }

  @media (min-width: 30rem) {
    flex-wrap: wrap;
    align-items: stretch;
    gap: 0 0.5rem;
    padding-left: max(1rem, calc(50% - 60ch));
    padding-right: max(1rem, calc(50% - 60ch));
  }
`;

const PushDown = styled.div`
  margin-bottom: 0;
  :after {
    content: "";
    display: block;
    height: 2.5vh;
    width: 100%;
  }

  @media (min-width: 30rem) {
    display: none;
  }
`;
