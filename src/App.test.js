import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  it("renders the title", () => {
    const wrapper = shallow(<App />);
    const headerText = wrapper.find("h1").text();
    expect(headerText).toContain("GitHub Timeline");
  });

  it("renders made by footer", () => {
    const wrapper = shallow(<App />);
    const pageFooter = wrapper.find(".page-footer");
    expect(pageFooter).toBeTruthy();
  });

  it("renders timeline by footer", () => {
    const wrapper = shallow(<App />);
    const madeFooter = wrapper.find(".made-footer");
    expect(madeFooter).toBeTruthy();
  });
});
