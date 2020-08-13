import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import utilStyles from "../styles/utils.module.css";

let store;

const initialState = {
  isDrawBarOpened: false,
  menus: [
    {
      id: 1,
      icon: "power-off",
      name: "Logout",
      src: "/",
      color: utilStyles.colorDanger,
      type: "menu",
    },
    {
      id: 2,
      icon: "home",
      name: "Home",
      src: "/",
      color: utilStyles.colorGray,
      type: "menu",
    },
    {
      id: 3,
      icon: "chalkboard-teacher",
      name: "Theoretical Class",
      src: "/",
      color: utilStyles.colorGray,
      type: "service",
    },
    {
      id: 4,
      icon: "car-crash",
      name: "Pratical Class",
      src: "/",
      color: utilStyles.colorGray,
      type: "service",
    },
    {
      id: 5,
      icon: "user-graduate",
      name: "Students",
      src: "/",
      color: utilStyles.colorGray,
      type: "registration",
    },
    {
      id: 6,
      icon: "user-tie",
      name: "Teachers",
      src: "/",
      color: utilStyles.colorGray,
      type: "registration",
    },
    {
      id: 7,
      icon: "car",
      name: "Cars",
      src: "/",
      color: utilStyles.colorGray,
      type: "registration",
    },
    {
      id: 8,
      icon: "info-circle",
      name: "About",
      src: "/about",
      color: utilStyles.colorGray,
      type: "menu",
    },
  ],
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

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

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
