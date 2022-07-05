import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "@mui/material";

export default {
  title: "Material/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Hello</Button>;
};

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
};