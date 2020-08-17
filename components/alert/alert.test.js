"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Alert from "./alert";

/** @test {Tests for Alert Component} */
describe("Alert Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render warning alert without crashing", () => {
    const wrapper = mount(<Alert type="warning" />);
    expect(wrapper.find("div")).toHaveLength(2);
  });
});
