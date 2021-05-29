import React from "react";
import { act } from "react-dom/test-utils";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

import ClassesList from "./ClassesList";
import { Class } from "../../graphql/schema";
import { HEROES_CLASSES } from "../../graphql/queries";

describe("ClassesList component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of buttons containing avaible classes", async () => {
    const mockClassesListData: Class[] = [
      { name: "Wizard", index: "wizard" },
      { name: "Barbarian", index: "barbarian" },
    ];
    const mockGetClassDetail = jest.fn();
    const mockQuery: MockedResponse = {
      request: { query: HEROES_CLASSES },
      result: { data: { classes: mockClassesListData } },
    };

    act(() => {
      render(
        <MockedProvider mocks={[mockQuery]} addTypename={false}>
          <ClassesList getClassDetail={mockGetClassDetail} />
        </MockedProvider>
      );
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const subclasessListElement = screen.getByTestId("classes-list");
    const btnElements = subclasessListElement.getElementsByTagName("button");

    expect(subclasessListElement).toBeInTheDocument();
    expect(btnElements.length).toEqual(2);

    for (let i = 0; i < btnElements.length; i += 1) {
      expect(btnElements[i]).toHaveTextContent(mockClassesListData[i].name!);
    }

    btnElements[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    fireEvent.click(btnElements[0]);
    expect(mockGetClassDetail).toBeCalledTimes(2);

    expect(subclasessListElement).toMatchSnapshot();
  });
});
