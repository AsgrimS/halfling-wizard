import React from "react";
import { Proficiency } from "../../graphql/schema";

interface ProficienciesListProps {
  proficiencies: Proficiency[];
  chooseFrom?: number;
}

const ProficienciesList: React.FC<ProficienciesListProps> = ({
  proficiencies,
  chooseFrom,
}) => {
  return (
    <div>
      <span>Proficiencies:</span>
      {chooseFrom && <span> Choose from {chooseFrom}</span>}
      <ul>
        {proficiencies.map((proficiency) => (
          <li key={proficiency.index}>{proficiency.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProficienciesList;
