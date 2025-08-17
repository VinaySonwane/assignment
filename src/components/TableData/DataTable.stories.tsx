import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DataTable, DataTableProps, Column } from "./DataTable";

type User = { name: string; email: string };

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" }, // only one "email" column
];

const data: User[] = [
  { name: "Vinay", email: "sonwanevinay11@gmail.com" },
  { name: "Rohan", email: "rohansonwane11@gmail.com" },
  { name: "Shubham", email: "shubham@gmail.com" },
];

const meta: Meta<DataTableProps<User>> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A clean, responsive data table with row selection and loading/empty states.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: { data, columns },
};

export const Selectable: Story = {
  args: { data, columns, selectable: true },
};

export const LoadingState: Story = {
  args: { data: [], columns, loading: true },
};

export const EmptyState: Story = {
  args: { data: [], columns },
};
