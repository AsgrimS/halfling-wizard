import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import SubclassesList from "./SubclassesList";
import { Subclass } from "../../graphql/schema";

describe("SubclassesList component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of subclasses", () => {
    const mockSubclassesListData: Subclass[] = [
      { name: "Warrior", index: "warrior" },
      { name: "Wizard", index: "wizard" },
    ];

    render(<SubclassesList subclasses={mockSubclassesListData} />);
    const SublcasessListElement = screen.getByTestId("subclasses-list");
    const liElements = SublcasessListElement.getElementsByTagName("li");

    expect(SublcasessListElement).toBeInTheDocument();
    expect(liElements.length).toEqual(2);

    for (let i = 0; i < liElements.length; i += 1) {
      expect(liElements[i]).toContainHTML(
        `<li>${mockSubclassesListData[i].name}</li>`
      );
    }

    expect(SublcasessListElement).toMatchSnapshot();
  });
});
