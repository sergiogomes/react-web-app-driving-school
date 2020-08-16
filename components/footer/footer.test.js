"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "./footer";

/** @test {Tests for Footer Component} */
describe("Footer Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render footer without crashing", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find("footer")).toHaveLength(1);
  });

  it("should render 2 divs without crashing", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find("div")).toHaveLength(2);
  });
});
