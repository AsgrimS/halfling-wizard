import React from "react";
import { SavingThrowsData } from "../../graphql/interfaces";

const SavingThrowsList: React.FC<SavingThrowsData> = ({ saving_throws }) => {
  return (
    <div data-testid="saving-throws-list">
      <span>Saving Throws:</span>
      <ul>
        {saving_throws.map((saving_throw) => (
          <li key={saving_throw.index}>{saving_throw.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavingThrowsList;
