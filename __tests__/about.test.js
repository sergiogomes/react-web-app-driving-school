"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import About from "../pages/about";

/** @test {Tests fot About Component} */
describe("About Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render without crashing", () => {});
});
