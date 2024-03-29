import type { Meta, StoryObj } from "@storybook/react";

import { Input, InputPropsType } from "@components";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";

const meta = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Test Input",
  } as InputPropsType,
};
