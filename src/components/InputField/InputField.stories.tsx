import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputField, InputFieldProps } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexible and accessible input field with validation states, variants, sizes, and optional password toggle and clear button.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Type your username...",
    helperText: "Try the input field",
    variant: "outlined",
    size: "md",
    type: "text",
  },
};

export const FilledVariant: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We will not share your email.",
    variant: "filled",
    size: "md",
    type: "email",
  },
};

export const GhostVariant: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    helperText: "Ghost variant example",
    variant: "ghost",
    size: "md",
    type: "text",
  },
};

export const InvalidState: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    errorMessage: "Password is required",
    invalid: true,
    variant: "outlined",
    size: "md",
    type: "password",
  },
};

export const DisabledState: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot type here",
    disabled: true,
    variant: "outlined",
    size: "md",
  },
};

export const PasswordToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    variant: "outlined",
    size: "md",
    type: "password",
  },
};

export const SmallSize: Story = {
  args: {
    label: "Small Input",
    placeholder: "Small size",
    variant: "outlined",
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    label: "Large Input",
    placeholder: "Large size",
    variant: "outlined",
    size: "lg",
  },
};
