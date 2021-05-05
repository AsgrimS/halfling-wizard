import React from "react";

import styled from "styled-components";
import { useQuery } from "react-query";

import ApiUrls from "../../api/urls";
import { Hero } from "../../api/interfaces";

const Explorer: React.FC = () => {
  const classesData = useQuery("classesData", () =>
    fetch(`${ApiUrls.baseUrl}/${ApiUrls.classes}`).then((res) => res.json())
  );

  if (classesData.isLoading) return <h2>Loading..</h2>;

  return (
    <Layout>
      <Header>Explorer</Header>
      <Content>
        <span>Classes</span>
        <ul>
          {classesData.isLoading ? (
            <h2>Loading..</h2>
          ) : (
            <>
              {classesData.data.results.map((heroClass: Hero) => (
                <li key={heroClass.index}>{heroClass.name}</li>
              ))}
            </>
          )}
        </ul>
      </Content>
    </Layout>
  );
};

export default Explorer;

const Layout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: 5rem auto;
`;

const Header = styled.div`
  grid-row-start: 1;
  grid-row-end: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  grid-row-start: 2;
  grid-row-end: 2;
`;
