import type { Meta, StoryObj } from "@storybook/react";
import User from "./user.jsx";

const meta: Meta<typeof User> = {
    component: User,
    title: "Molecules/User Badge",
    parameters: {
        layout: "centered",
    },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Badge: Story = {
    args: {

    }
}