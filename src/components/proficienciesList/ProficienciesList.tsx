import React from "react";
import { ProficienciesData } from "../../graphql/interfaces";

const ProficienciesList: React.FC<ProficienciesData> = ({ proficiencies }) => {
  return (
    <div data-testid="proficiencies-list">
      <span>Proficiencies:</span>
      <ul>
        {proficiencies.map((proficiency) => (
          <li key={proficiency.index}>{proficiency.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProficienciesList;
