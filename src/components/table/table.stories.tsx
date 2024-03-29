import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { Column } from "./types";

const tableColumns: Column[] = [
  {
    header: "Id",
    accessor: "id",
    width: 50,
  },
  {
    header: "Teste 1",
    accessor: "teste1",
  },
  {
    header: "Teste 2",
    accessor: "teste2",
  },
];

const data = [
  {
    id: 1,
    teste1: "Teste 1",
    teste2: "Teste 2",
  },
  {
    id: 2,
    teste1: "Teste 1",
    teste2: "Teste 2",
  },
  {
    id: 3,
    teste1: "Teste 1",
    teste2: "Teste 2",
  },
  {
    id: 4,
    teste1: "Teste 1",
    teste2: "Teste 2",
  },
  {
    id: 5,
    teste1: "Teste 1",
    teste2: "Teste 2",
  },
  {
    id: 6,
    teste1: "Teste 1",
    teste2: "Teste 2",
  },
];

const meta = {
  title: "Components/Table",
  component: Table,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    loading: {
      options: [true, false],
      control: {
        type: "select",
        labels: ["true", "false"],
      },
    },
    loadingType: {
      options: ["skeleton", "bar"],
      control: {
        type: "select",
        labels: ["skeleton", "bar"],
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    columns: tableColumns,
    rows: data,
    loading: false,
    loadingType: "bar",
  },
};
