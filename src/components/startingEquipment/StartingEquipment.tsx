import React from "react";
import { v4 as uuidv4 } from "uuid";

import { StartingEquipmentData } from "../../graphql/interfaces";

const StartingEquipment: React.FC<StartingEquipmentData> = ({
  startingEquipments,
}) => {
  return (
    <div data-testid="starting-equipment">
      <span>Starting Equipment</span>
      <ul>
        {startingEquipments.map(({ equipment, quantity }) => (
          <li key={uuidv4()}>
            {equipment!.name}: {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StartingEquipment;
