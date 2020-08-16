"use strict";

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// import Students from "../pages/students";

/** @test {Tests for Students Component} */
describe("Students Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render 4 divs without crashing", () => {
    //     const wrapper = mount(<Students />);
    //     expect(wrapper.find("div")).toHaveLength(4);
  });

  //   it("should render 1 font awesome icon without crashing", () => {
  //     const wrapper = mount(<Students />);
  //     expect(wrapper.find("FontAwesomeIcon")).toHaveLength(1);
  //   });
});
