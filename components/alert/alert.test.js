"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Alert from "./alert";

/** @test {Tests for Alert Component} */
describe("Alert Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render without crashing", () => {
    const wrapper = mount(<Alert type="success" />);
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render a div with a success class", () => {
    const wrapper = mount(<Alert type="success" />);
    expect(wrapper.find("div.success")).toHaveLength(1);
  });

  it("should render a div with an error class", () => {
    const wrapper = mount(<Alert type="error" />);
    expect(wrapper.find("div.error")).toHaveLength(1);
  });

  it("should not render a div with an error class", () => {
    const wrapper = mount(<Alert type="success" />);
    expect(wrapper.find("div.error")).toHaveLength(0);
  });

  it("should not render a div with a success class", () => {
    const wrapper = mount(<Alert type="error" />);
    expect(wrapper.find("div.success")).toHaveLength(0);
  });
});
