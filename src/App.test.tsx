import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import App from "./App";

jest.mock("./pages/explorer/Explorer", () => () => (
  <div data-testid="mock-explorer" />
));

describe("App Core", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render an App core component", () => {
    render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();

    const explorerElement = screen.getByTestId("mock-explorer");
    expect(explorerElement).toBeInTheDocument();

    expect(appElement).toMatchSnapshot();
  });
});
