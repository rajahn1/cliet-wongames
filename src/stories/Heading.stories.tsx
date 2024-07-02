import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@/components/Heading";

const meta: Meta<typeof Heading> = {
  component: Heading
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Most popular"
  }
};
