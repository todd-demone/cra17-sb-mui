import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TimePickerControl } from "../components/TimePickerControl";

export default {
  title: "Controls/TimePickerControl",
  component: TimePickerControl,
} as ComponentMeta<typeof TimePickerControl>;

const Template: ComponentStory<typeof TimePickerControl> = (args) => {
  return <TimePickerControl {...args} />
};

export const Default = Template.bind({});
// Default.args = {};

export const Clock = Template.bind({});
Clock.args = {
  label: "Time",
  inputFormat: "HH:mm",
  views: ["hours", "minutes"],
  disableOpenPicker: false,
  width: 110,
};

export const ClockSeconds = Template.bind({});
ClockSeconds.args = {
  label: "Time",
  inputFormat: "HH:mm:ss",
  views: ["hours", "minutes", "seconds"],
  disableOpenPicker: false,
  width: 130,
};
export const ClockMilliseconds = Template.bind({});
ClockMilliseconds.args = {
  label: "Time",
  inputFormat: "HH:mm:ss:SSS",
  views: ["hours", "minutes", "seconds"],
  disableOpenPicker: false,
  width: 160,
};

export const Keyboard = Template.bind({});
Keyboard.args = {
  ...Clock.args,
  disableOpenPicker: true,
  width: 75,
};

export const KeyboardSeconds = Template.bind({});
KeyboardSeconds.args = {
  ...ClockSeconds.args,
  disableOpenPicker: true,
  width: 95,
};

export const KeyboardMilliseconds = Template.bind({});
KeyboardMilliseconds.args = {
  ...ClockMilliseconds.args,
  disableOpenPicker: true,
  width: 130,
};

// export const Default: ComponentStory<typeof TimePickerControl> = () => (
//   <TimePickerControl
//     label="Time (HH:mm)"
//     inputFormat="HH:mm"
//     views={["hours", "minutes"]}
//   />
// );
