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
      { name: "Dark Warrior", index: "dark_warrior" },
      { name: "Magic Wizard", index: "magic_wizard" },
    ];

    render(<SubclassesList subclasses={mockSubclassesListData} />);
    const sublcasessListElement = screen.getByTestId("subclasses-list");
    const liElements = sublcasessListElement.getElementsByTagName("li");

    expect(sublcasessListElement).toBeInTheDocument();
    expect(liElements.length).toEqual(2);

    for (let i = 0; i < liElements.length; i += 1) {
      expect(liElements[i]).toContainHTML(
        `<li>${mockSubclassesListData[i].name}</li>`
      );
    }

    expect(sublcasessListElement).toMatchSnapshot();
  });
});
