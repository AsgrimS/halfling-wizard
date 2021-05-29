import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import ProficienciesChoicesList from "./ProficienciesChoicesList";
import { ClassProficiency_Choices } from "../../graphql/schema";

describe("ProficienciesChoicesList component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of proficiencies choices", () => {
    const mockNames = [
      "Flying",
      "Invisibility",
      "Reading minds",
      "Super strength",
      "Dexterity like Batman",
    ];
    const proficienciesChoicesMockData: ClassProficiency_Choices[] = [
      {
        choose: 1,
        from: [
          { name: mockNames[0], index: mockNames[0].toLocaleLowerCase() },
          { name: mockNames[1], index: mockNames[1].toLocaleLowerCase() },
        ],
      },
      {
        choose: 2,
        from: [
          { name: mockNames[2], index: mockNames[2].toLowerCase() },
          { name: mockNames[3], index: mockNames[3].toLowerCase() },
          { name: mockNames[4], index: mockNames[4].toLowerCase() },
        ],
      },
    ];

    render(
      <ProficienciesChoicesList
        proficienciesChoices={proficienciesChoicesMockData}
      />
    );
    const proficienciesChoicesListElement = screen.getByTestId(
      "proficiencies-choices-list"
    );
    const liElements = proficienciesChoicesListElement.getElementsByTagName(
      "li"
    );
    const spanElements = proficienciesChoicesListElement.getElementsByTagName(
      "span"
    );
    const spanChooseElements = Array(spanElements).splice(1);

    expect(proficienciesChoicesListElement).toBeInTheDocument();
    expect(liElements.length).toEqual(5);

    for (let i = 0; i < spanChooseElements.length; i += 1) {
      expect(spanChooseElements[i]).toContainHTML(
        `<span>Choose ${proficienciesChoicesMockData[i].choose}</span>`
      );
    }

    for (let i = 0; i < liElements.length; i += 1) {
      expect(liElements[i]).toContainHTML(`<li>${mockNames[i]}</li>`);
    }

    expect(proficienciesChoicesListElement).toMatchSnapshot();
  });
});
