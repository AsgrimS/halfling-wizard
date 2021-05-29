import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import SavingThrowsList from "./SavingThrowsList";
import { AbilityScoreSkills } from "../../graphql/schema";

describe("SavingThrowsList component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of saving throws", () => {
    const mockSavingThrowsListData: AbilityScoreSkills[] = [
      { name: "INT", index: "int" },
      { name: "DEX", index: "dex" },
      { name: "CHA", index: "cha" },
    ];

    render(<SavingThrowsList saving_throws={mockSavingThrowsListData} />);
    const savingThrowListElement = screen.getByTestId("saving-throws-list");
    const liElements = savingThrowListElement.getElementsByTagName("li");

    expect(savingThrowListElement).toBeInTheDocument();
    expect(liElements.length).toEqual(3);

    for (let i = 0; i < liElements.length; i += 1) {
      expect(liElements[i]).toContainHTML(
        `<li>${mockSavingThrowsListData[i].name}</li>`
      );
    }

    expect(savingThrowListElement).toMatchSnapshot();
  });
});
