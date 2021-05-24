import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Spellcasting from "./Spellcasting";
import { ClassSpellcasting } from "../../graphql/schema";

describe("Spellcasting component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a name of spellcasting ability", () => {
    const mockSpellcastingData: ClassSpellcasting = {
      spellcasting_ability: {
        name: "INT",
      },
    };

    render(<Spellcasting spellcasting={mockSpellcastingData} />);
    const spellcastingElement = screen.getByTestId("spellcasting");
    const liElement = spellcastingElement.getElementsByTagName("li")[0];

    expect(spellcastingElement).toBeInTheDocument();
    expect(liElement).toContainHTML(
      `<li>${mockSpellcastingData.spellcasting_ability!.name}</li>`
    );

    expect(spellcastingElement).toMatchSnapshot();
  });
});
