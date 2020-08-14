"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Meta from "./meta";

/** @test {Tests fot Meta Component} */
describe("Meta Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render 37 meta tags without crashing", () => {
    const wrapper = mount(<Meta type="success" />);
    expect(wrapper.find("meta")).toHaveLength(37);
  });

  it("should render 5 link tags without crashing", () => {
    const wrapper = mount(<Meta type="success" />);
    expect(wrapper.find("link")).toHaveLength(5);
  });
});
