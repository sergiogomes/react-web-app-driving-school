"use strict";

import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import About from "../pages/about";

/** @test {Tests for About Component} */
describe("About Component", () => {
  let wrapper;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  beforeEach(() => (wrapper = mount(<About />)));

  it("wraps header in a div with .headerContainer class", () => {
    const shWrapper = shallow(<About />);
    expect(shWrapper.find(".headerContainer").length).toEqual(1);
  });

  it("has a title of About", () => {
    expect(wrapper.find(".title").text()).toBe("About");
  });

  it("should render 4 divs without crashing", () => {
    expect(wrapper.find("div").length).toBeGreaterThan(3);
  });

  it("should render 3 sections without crashing", () => {
    expect(wrapper.find("section")).toHaveLength(3);
  });

  it("should render 2 images without crashing", () => {
    expect(wrapper.find("img")).toHaveLength(2);
  });

  it("should render 1 address without crashing", () => {
    expect(wrapper.find("address")).toHaveLength(1);
  });

  it("should render an a tag without active class", () => {
    expect(wrapper.find("a").hasClass("active")).toBeFalsy();
  });
});
