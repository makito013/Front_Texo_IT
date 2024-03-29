import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonPropsType } from "@components";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";

const meta = {
  title: "Components/Button",
  component: Button,
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
    variant: {
      options: ["contained", "outlined", "text"],
      control: {
        type: "select",
        labels: ["contained", "outlined", "text"],
      },
    },
    loading: {
      options: [true, false],
      control: {
        type: "select",
        labels: ["true", "false"],
      },
    },
    color: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
        labels: ["primary", "secondary"],
      },
    },
    fullWidth: {
      options: [true, false],
      control: {
        type: "select",
        labels: ["true", "false"],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Test Button",
    color: "primary",
    loading: false,
    fullWidth: false,
  } as ButtonPropsType,
};
