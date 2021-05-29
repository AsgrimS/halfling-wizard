import React from "react";

import { useLazyQuery } from "@apollo/client";

import { HERO_CLASS } from "../../graphql/queries";
import { HeroClassData } from "../../graphql/interfaces";
import ClassesList from "../../components/classesList/ClassesList";
import ClassDetails from "../../components/classDetails/ClassDetails";
import LoadingAnimation from "../../components/styled-components/LoadingAnimation";

const Explorer: React.FC = () => {
  const [getClassDetail, heroClassData] = useLazyQuery<HeroClassData>(
    HERO_CLASS
  );

  return (
    <section data-testid="explorer">
      <ClassesList getClassDetail={getClassDetail} />
      {heroClassData.called && heroClassData.loading === true && (
        <LoadingAnimation pxSize={24} />
      )}
      {heroClassData.loading === false && heroClassData.data && (
        <ClassDetails class={heroClassData.data.class} />
      )}
    </section>
  );
};

export default Explorer;
