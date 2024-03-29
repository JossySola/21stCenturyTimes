import type { Meta, StoryObj } from "@storybook/react";
import Template from "./main-temp";

const meta: Meta<typeof Template> = {
    title: "Templates/Main",
    component: Template,
    parameters: {
        layout: "fullscreen"
    }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const MainLoading: Story = {
    /*decorators: [
        (Story) => {
            return (
                <div style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "20vw 30vw 30vw 20vw",
                    gridTemplateRows: "auto",
                    gridTemplateAreas: `
                        ". logo logo ."
                        ". nav nav ."
                        ". primary primary ."
                        ". a1 a2 ."
                        ". secondary secondary ."
                        ". a3 a4 ."
                        ". a5 a6 ."
                        ". a7 a8 ."
                        ". a9 a10 ."
                        "footer footer footer footer"
                    `,
                    rowGap: "1rem",
                    justifyItems: "stretch",
                    alignItems: "stretch"
                    }}>
                    {Story()}
                </div>
            )
        }
    ],*/
}