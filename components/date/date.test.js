"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DateComponent from "./date";

/** @test {Tests for Date Component} */
describe("Date Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  const dateStr = "2020-01-01";
  const dateTxt = "January 1, 2020";

  it("should render without crashing", () => {
    const wrapper = mount(<DateComponent dateString={dateStr} />);
    expect(wrapper.find("time")).toHaveLength(1);
  });

  it("shoul render the correct date text converted", () => {
    const wrapper = mount(<DateComponent dateString={dateStr} />);
    expect(wrapper.find("time").text()).toBe(dateTxt);
  });

  it("should render empty component for empty date", () => {
    const wrapper = mount(<DateComponent dateString="" />);
    expect(wrapper).toMatchObject({});
  });
});
