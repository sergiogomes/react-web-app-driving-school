"use strict";

import { mount, configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import renderer from "react-test-renderer";
// import { shallow, render } from "enzyme";

import Alert from "./alert";

/** @test {Tests fot Alert Component} */
describe("Alert Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render without crashing", () => {
    const wrapper = mount(<Alert type="success" />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
