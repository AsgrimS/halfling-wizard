import React from "react";
import { SubclassesData } from "../../graphql/interfaces";

const SubclassesList: React.FC<SubclassesData> = ({ subclasses }) => {
  return (
    <div>
      <span>Subclasses:</span>
      <ul>
        {subclasses.map((subclass) => (
          <li key={subclass.index}>{subclass.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubclassesList;
