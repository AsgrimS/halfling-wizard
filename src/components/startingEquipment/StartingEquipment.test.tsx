import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import StartingEquipment from "./StartingEquipment";
import { ClassStarting_Equipment } from "../../graphql/schema";

describe("StartingEquipment component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of starting equipment items", () => {
    const mockStartingEquipmentData: ClassStarting_Equipment[] = [
      { equipment: { name: "Big Sword" }, quantity: 4 },
      { equipment: { name: "Leather Armor" }, quantity: 1 },
    ];

    render(
      <StartingEquipment startingEquipments={mockStartingEquipmentData} />
    );
    const startingEquipmentElement = screen.getByTestId("starting-equipment");
    const liElements = startingEquipmentElement.getElementsByTagName("li");

    expect(startingEquipmentElement).toBeInTheDocument();
    expect(liElements.length).toEqual(2);

    for (let i = 0; i < liElements.length; i += 1) {
      expect(liElements[i]).toContainHTML(
        `<li>${mockStartingEquipmentData[i].equipment!.name}: ${
          mockStartingEquipmentData[i].quantity
        }</li>`
      );
    }

    expect(startingEquipmentElement).toMatchSnapshot();
  });
});
