import React from "react";
import { SubclassesData } from "../../graphql/interfaces";

const SubclassesList: React.FC<SubclassesData> = ({ subclasses }) => {
  return (
    <>
      <p>Subclasses:</p>
      <ul>
        {subclasses.map((subclass) => (
          <li key={subclass.index}>{subclass.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SubclassesList;
