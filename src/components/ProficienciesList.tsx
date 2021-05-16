import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Proficiency, ClassProficiency_Choices } from "../graphql/schema";

interface ProficienciesListProps {
  proficiencies: Proficiency[];
  proficienciesChoices: ClassProficiency_Choices[];
}

const ProficienciesList: React.FC<ProficienciesListProps> = ({
  proficiencies,
  proficienciesChoices,
}) => {
  return (
    <div>
      <span>Proficiencies:</span>
      <ul>
        {proficiencies.map((proficiency) => (
          <li key={proficiency.index}>{proficiency.name}</li>
        ))}
      </ul>
      <span>Choices:</span>
      <br />
      {proficienciesChoices.map(({ from, choose }) => (
        <React.Fragment key={uuidv4()}>
          <span>Choose {choose}</span>
          <ul>
            {from!.map(({ name, index }) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProficienciesList;
