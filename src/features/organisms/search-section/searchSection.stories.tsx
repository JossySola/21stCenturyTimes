import type { Meta, StoryObj } from "@storybook/react";
import SearchSection from "./searchSection";

const meta: Meta<typeof SearchSection> = {
    title: "Organisms/Search Section",
    component: SearchSection,
    parameters: {
        layout: "centered"
    }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    
}