import React from "react";

import styled from "styled-components";

import { HeroClassData } from "../../graphql/interfaces";

const ClassDetails: React.FC<HeroClassData> = ({ class: HeroClass }) => {
  return (
    <Details>
      <p>{HeroClass.name}</p>
      <p>{HeroClass.hit_die}</p>
      <p>Proficiencies:</p>
      <ul>
        {HeroClass.proficiencies?.map((proficiency) => (
          <li key={proficiency?.index}>{proficiency?.name}</li>
        ))}
      </ul>
    </Details>
  );
};

export default ClassDetails;

const Details = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
`;
