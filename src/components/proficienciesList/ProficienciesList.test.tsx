import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import ProficienciesList from "./ProficienciesList";
import { Proficiency } from "../../graphql/schema";

describe("ProficienciesList component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of proficiencies", () => {
    const proficienciesMockData: Proficiency[] = [
      { name: "Pancaking skills", index: "pancaking skills" },
      { name: "Physics", index: "physics" },
    ];

    render(<ProficienciesList proficiencies={proficienciesMockData} />);
    const proficienciesListElement = screen.getByTestId("proficiencies-list");
    const liElements = proficienciesListElement.getElementsByTagName("li");

    expect(proficienciesListElement).toBeInTheDocument();
    expect(liElements.length).toEqual(2);

    for (let i = 0; i < liElements.length; i += 1) {
      expect(liElements[i]).toContainHTML(
        `<li>${proficienciesMockData[i].name}</li>`
      );
    }

    expect(proficienciesListElement).toMatchSnapshot();
  });
});
