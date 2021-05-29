import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import ClassDetails from "./ClassDetails";
import { Class } from "../../graphql/schema";

jest.mock("../subclassesList/SubclassesList", () => () => (
  <div data-testid="mock-subclasses-list" />
));
jest.mock("../proficienciesList/ProficienciesList", () => () => (
  <div data-testid="mock-proficiencies-list" />
));
jest.mock("../proficienciesChoicesList/ProficienciesChoicesList", () => () => (
  <div data-testid="mock-proficiencies-choices-list" />
));
jest.mock("../savingThrowsList/SavingThrowsList", () => () => (
  <div data-testid="mock-saving-throws" />
));
jest.mock("../spellcasting/Spellcasting", () => () => (
  <div data-testid="mock-spellcasting" />
));
jest.mock("../startingEquipment/StartingEquipment", () => () => (
  <div data-testid="mock-starting-equipment" />
));

describe("ClassDetails component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a component that displays details for class", () => {
    const heroClassMockData: Class = {
      name: "Wizard",
      hit_die: 6,
      subclasses: [{ name: "Dark Wizard" }],
      saving_throws: [{ name: "LUCK" }],
      spellcasting: { spellcasting_ability: { name: "YES" } },
      starting_equipment: [{ quantity: 1, equipment: { name: "stick" } }],
      proficiencies: [{ name: "writing mock data" }],
      proficiency_choices: [
        { choose: 1, from: [{ name: "it was not a choice" }] },
      ],
    };
    const scrollIntoViewSpy = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

    render(<ClassDetails class={heroClassMockData} />);
    const classDetailsElement = screen.getByTestId("class-details");
    const spanElements = classDetailsElement.getElementsByTagName("span");

    expect(classDetailsElement).toBeInTheDocument();
    expect(spanElements.length).toEqual(2);

    expect(spanElements[0]).toContainHTML(
      `<span>${heroClassMockData.name}</span>`
    );
    expect(spanElements[1]).toContainHTML(
      `<span>Hit die ${heroClassMockData.hit_die}</span>`
    );

    const mockedComponents = [
      screen.getByTestId("mock-subclasses-list"),
      screen.getByTestId("mock-proficiencies-list"),
      screen.getByTestId("mock-proficiencies-choices-list"),
      screen.getByTestId("mock-saving-throws"),
      screen.getByTestId("mock-spellcasting"),
      screen.getByTestId("mock-starting-equipment"),
    ];

    mockedComponents.forEach((mockedComponent) => {
      expect(mockedComponent).toBeInTheDocument();
    });

    expect(classDetailsElement).toMatchSnapshot();
  });
});
