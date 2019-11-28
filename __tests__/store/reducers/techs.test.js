import reducer, { INITIAL_STATE } from "../../../store/reducers/techs";
import * as Techs from "../../../store/actions/techs";

describe("Tech reducer", () => {
  it("ADD_TECH", () => {
    const state = reducer(INITIAL_STATE, Techs.addTech("Node.js"));

    expect(state).toStrictEqual(["Node.js"]);
  });
});
