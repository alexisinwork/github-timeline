import React from "react";
import { shallow } from "enzyme";

import Search from "./index";
import AppContext from "src/AppContext";

describe("Search", () => {
  let wrapper,
    searchInput,
    setUsername = jest.fn(),
    onSearch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <AppContext.Provider value={{ username: "", setUsername }}>
        <Search onSearch={onSearch} />
      </AppContext.Provider>
    );

    searchInput = wrapper.find("input");
  });

  afterEach(() => {
    wrapper.unmount();
  });
  it("is rendered", () => {
    expect(wrapper).toBeTruthy();
  });

  describe("has an input that", () => {
    it("renders", () => {
      expect(searchInput).toBeTruthy();
    });

    xit("updates the username", () => {
      console.log(wrapper.html());
      console.log(wrapper.find(".search"));
      searchInput.simulate("change", { target: { value: "alexisinwork" } });

      expect(wrapper.context().username).toEqual("alexisinwork");
    });
    xit("triggers onSearch call when Search button clicked", () => {
      searchInput.simulate("change", { target: { value: "alexisinwork" } });

      const searchBtn = wrapper.find(".searchBtn");
      searchBtn.simulate("click");

      expect(onSearch).toHaveBeenCalled();
      expect(onSearch).toHaveBeenCalledWith("alexisinwork");
    });

    xit("triggers onReset call when Reset button clicked", () => {
      const resetBtn = wrapper.find(".resetBtn");
      resetBtn.simulate("click");

      expect(wrapper.context().username).toEqual("");
    });
  });
});
