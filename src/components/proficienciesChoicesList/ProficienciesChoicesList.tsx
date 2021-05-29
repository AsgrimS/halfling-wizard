import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ProficienciesChoicesData } from "../../graphql/interfaces";

const ProficienciesList: React.FC<ProficienciesChoicesData> = ({
  proficienciesChoices,
}) => {
  return (
    <div data-testid="proficiencies-choices-list">
      <span>Proficiencies Choices:</span>
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
