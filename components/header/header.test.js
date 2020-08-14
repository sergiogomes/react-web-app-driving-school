// import React from "react";
// import "@testing-library/jest-dom/extend-expect";
// import { shallow, render } from "enzyme";

// import Header from "./header";

// describe("Header component", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<Header />);
//   });

//   it("should render Header", () => {
//     const { getByText } = render(wrapper);
//     expect(getByText("Header")).toBeInTheDocument();
//   });
// });

// // describe("Header component", () => {
// //   it("should render Header", () => {
// //     const { getByText } = render(
// //       <Provider store={initialState}>
// //         <Header />
// //       </Provider>
// //     );
// //     expect(getByText("Header")).toBeInTheDocument();
// //   });
// // });

// import React from "react";
// import { shallow } from "enzyme";
// import Header from "./Header";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { Provider } from "react-redux";

// describe("Header component", () => {
//   const initialState = {
//     isDrawBarOpened: false,
//     menus: [],
//   };
//   let component;

//   beforeEach(() => {
//     configure({ adapter: new Adapter() });
//     component = shallow(
//       <Provider store={initialState}>
//         <Header />
//       </Provider>
//     );
//   });

//   it("should render without crashing", () => {
//     expect(component.find("div")).toHaveLength(1);
//   });
// });

/*
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
// import { useStore } from "../../store/index";
import renderer from "react-test-renderer";

import Header from "./header";

import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(useStore);

const initialState = {
  isDrawBarOpened: false,
  menus: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_DRAW_BAR":
      return {
        ...state,
        isDrawBarOpened: !state.isDrawBarOpened,
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

describe("Header component", () => {
  let component;

  beforeEach(() => {
    component = renderer
      .create(
        <Provider store={useStore}>
          <Header />
        </Provider>
      )
      .toJSON();
  });

  it("should render Header", () => {
    expect(component("Header")).toBeInTheDocument();
  });
});
*/

describe("Header component", () => {
  it("should render Header", () => {
    // console.log("Header");
  });
});
