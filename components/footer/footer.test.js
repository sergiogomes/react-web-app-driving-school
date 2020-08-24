"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "./footer";

/** @test {Tests for Footer Component} */
describe("Footer Component", () => {
  let wrapper;
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    wrapper = mount(<Footer />);
  });

  it("should render footer without crashing", () => {
    expect(wrapper.find("footer")).toHaveLength(1);
  });

  it("should render 2 divs without crashing", () => {
    expect(wrapper.find("div").length).toBeGreaterThan(1);
  });

  it("shoul render the actual year in copyright", () => {
    const year = new Date().getFullYear();
    const copy = `© ${year} Driver ID Purse`;
    expect(wrapper.find(".copyright").text()).toBe(copy);
  });
});
