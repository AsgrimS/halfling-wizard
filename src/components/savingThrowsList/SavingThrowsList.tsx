import React from "react";
import { SavingThrowsData } from "../../graphql/interfaces";

const SavingThrowsList: React.FC<SavingThrowsData> = ({ saving_throws }) => {
  return (
    <>
      <p>Saving Throws:</p>
      <ul>
        {saving_throws.map((saving_throw) => (
          <li key={saving_throw.index}>{saving_throw.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SavingThrowsList;
