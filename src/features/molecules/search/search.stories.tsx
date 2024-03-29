import type { Meta, StoryObj } from "@storybook/react";
import Search from "./search";

const meta: Meta<typeof Search> = {
    title: "Molecules/Search",
    component: Search,
    parameters: {
        layout: "centered"
    }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {

    }
}