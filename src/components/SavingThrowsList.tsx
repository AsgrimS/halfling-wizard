import React from "react";
import { SavingThrowsData } from "../graphql/interfaces";

const SavingThrowsList: React.FC<SavingThrowsData> = ({ saving_throws }) => {
  return (
    <div>
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
