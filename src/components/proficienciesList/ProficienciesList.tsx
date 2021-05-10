import React from "react";
import { ProficienciesData } from "../../graphql/interfaces";

const ProficienciesList: React.FC<ProficienciesData> = ({ proficiencies }) => {
  return (
    <>
      <p>Proficiencies:</p>
      <ul>
        {proficiencies.map((proficiency) => (
          <li key={proficiency.index}>{proficiency.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProficienciesList;
