import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OldTechList from "../../oldComponent/OldTechList";

describe("TechList Component", () => {
  it("should be able to add new tech", () => {
    const { getByText, getByTestId, debug, getByLabelText } = render(
      <OldTechList />
    );

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));
    //fireEvent.click(getByText("Adicionar"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });
});
