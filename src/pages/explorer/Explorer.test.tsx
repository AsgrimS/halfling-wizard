import React from "react";
import { act } from "react-dom/test-utils";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

import { Class } from "../../graphql/schema";
import { HERO_CLASS } from "../../graphql/queries";
import { LazyQueryCallbackFunction } from "../../utils/interfaces";

import Explorer from "./Explorer";

jest.mock("../../components/classDetails/ClassDetails", () => () => (
  <div data-testid="mock-class-details" />
));
jest.mock(
  "../../components/classesList/ClassesList",
  () => ({ getClassDetail }: LazyQueryCallbackFunction) => (
    <div data-testid="mock-classes-list">
      <button
        data-testid="mock-btn"
        type="button"
        onClick={() => getClassDetail()}
      >
        test
      </button>
    </div>
  )
);

describe("Explorer Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a page that renders classes list", () => {
    render(
      <MockedProvider>
        <Explorer />
      </MockedProvider>
    );

    const explorerElement = screen.getByTestId("explorer");
    expect(explorerElement).toBeInTheDocument();

    const classesListMockElement = screen.getByTestId("mock-classes-list");
    expect(classesListMockElement).toBeInTheDocument();

    expect(explorerElement).toMatchSnapshot();
  });

  it("should render a page that renders classes list and class details components", async () => {
    const mockClassData: Class = {
      hit_die: 1,
      index: "wizard",
      name: "Wizard",
      proficiencies: [
        {
          index: "foo",
          name: "Foo",
        },
      ],
      saving_throws: [{ index: "int", name: "INT" }],
      proficiency_choices: [
        { choose: 1, from: [{ name: "Foo", index: "foo" }] },
      ],
      spellcasting: {
        level: 1,
        spellcasting_ability: {
          index: "foo",
          name: "Foo",
        },
      },
      starting_equipment: [
        { equipment: { name: "bar", index: "foo" }, quantity: 1 },
      ],
      starting_equipment_options: [
        {
          choose: 1,
          from: [{ equipment: { name: "bar", index: "foo" }, quantity: 1 }],
        },
      ],
      subclasses: [{ index: "foo", name: "bar" }],
    };
    const mockQuery: MockedResponse = {
      request: { query: HERO_CLASS },
      result: { data: { class: mockClassData } },
    };

    act(() => {
      render(
        <MockedProvider mocks={[mockQuery]} addTypename={false}>
          <Explorer />
        </MockedProvider>
      );
    });
    const explorerElement = screen.getByTestId("explorer");
    expect(explorerElement).toBeInTheDocument();

    const getQueryButton = screen.getByTestId("mock-btn");
    fireEvent.click(getQueryButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const classDetailsMockElement = screen.getByTestId("mock-class-details");
    expect(classDetailsMockElement).toBeInTheDocument();

    expect(explorerElement).toMatchSnapshot();
  });
});
