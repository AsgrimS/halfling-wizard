import React from "react";

import { ClassSpellcastingData } from "../../graphql/interfaces";

const Spellcasting: React.FC<ClassSpellcastingData> = ({ spellcasting }) => {
  return (
    <div data-testid="spellcasting">
      <span>Spellcasting Ability:</span>
      <ul>
        <li>{spellcasting.spellcasting_ability?.name}</li>
      </ul>
    </div>
  );
};

export default Spellcasting;
