import React from "react";
import Repo from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Repo",
  component: Repo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    created_at: { control: "time of creation" },
    name: { control: "name" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Repo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  created_at: 11111101001,
  name: "Repo name",
  label: "Default <Repo />",
};
