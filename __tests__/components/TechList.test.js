import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import TechList from "../../components/TechList";
import { addTech } from "../../store/actions/techs";

jest.mock("react-redux");
describe("TechList Component", () => {
  it("should render tech list", () => {
    useSelector.mockImplementation(state =>
      state({
        techs: ["Node.js", "ReactJS"]
      })
    );
    const { getByTestId, getByText } = render(<TechList />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
  });

  it("should be able to add new tech", () => {
    const { getByTestId, getByLabelText } = render(<TechList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(dispatch).toHaveBeenCalledWith(addTech("Node.js"));
  });
});
