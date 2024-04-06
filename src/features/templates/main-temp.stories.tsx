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
    args: {
        data: [],
        grid: "second"
    }
}

export const ContentTest: Story = {
    args: {
        data: [{
                title: "The Tarantula Nebula, one of the targets of the Hubble Space Telescope's ULLYSES survey",
                POST_ID: "1",
                IMAGE_SRC: "https://i.redd.it/the-tarantula-nebula-one-of-the-targets-of-the-hubble-space-v0-ygy2wqtcy9rc1.png?s=82dec2e03af992f483746f1a798b4061a1e3c345",
                content: "ULLYSES, the Ultraviolet Legacy Library of Young Stars as Essential Standards, was a three-year project to study nearly 500 stars in ultraviolet light. Combining observations from Hubble with data from telescopes around the world, ULLYSES will give astronomers a unique look at how stars form and help us understand the history of some of the first galaxies in the universe.",
                link: "#"
            },
            {
                title: "The Tarantula Nebula, one of the targets of the Hubble Space Telescope's ULLYSES survey",
                POST_ID: "1",
                IMAGE_SRC: "",
                content: "ULLYSES, the Ultraviolet Legacy Library of Young Stars as Essential Standards, was a three-year project to study nearly 500 stars in ultraviolet light. Combining observations from Hubble with data from telescopes around the world, ULLYSES will give astronomers a unique look at how stars form and help us understand the history of some of the first galaxies in the universe.",
                link: "#"
            },
            {
                title: "The Tarantula Nebula, one of the targets of the Hubble Space Telescope's ULLYSES survey",
                POST_ID: "1",
                IMAGE_SRC: "",
                content: "ULLYSES, the Ultraviolet Legacy Library of Young Stars as Essential Standards, was a three-year project to study nearly 500 stars in ultraviolet light. Combining observations from Hubble with data from telescopes around the world, ULLYSES will give astronomers a unique look at how stars form and help us understand the history of some of the first galaxies in the universe.",
                link: "#"
            },
            {
                title: "The Tarantula Nebula, one of the targets of the Hubble Space Telescope's ULLYSES survey",
                POST_ID: "1",
                IMAGE_SRC: "",
                content: "ULLYSES, the Ultraviolet Legacy Library of Young Stars as Essential Standards, was a three-year project to study nearly 500 stars in ultraviolet light. Combining observations from Hubble with data from telescopes around the world, ULLYSES will give astronomers a unique look at how stars form and help us understand the history of some of the first galaxies in the universe.",
                link: "#"
            },
            {
                title: "The Tarantula Nebula, one of the targets of the Hubble Space Telescope's ULLYSES survey",
                POST_ID: "1",
                IMAGE_SRC: "",
                content: "ULLYSES, the Ultraviolet Legacy Library of Young Stars as Essential Standards, was a three-year project to study nearly 500 stars in ultraviolet light. Combining observations from Hubble with data from telescopes around the world, ULLYSES will give astronomers a unique look at how stars form and help us understand the history of some of the first galaxies in the universe.",
                link: "#"
            },
            {
                title: "The Tarantula Nebula, one of the targets of the Hubble Space Telescope's ULLYSES survey",
                POST_ID: "1",
                IMAGE_SRC: "",
                content: "ULLYSES, the Ultraviolet Legacy Library of Young Stars as Essential Standards, was a three-year project to study nearly 500 stars in ultraviolet light. Combining observations from Hubble with data from telescopes around the world, ULLYSES will give astronomers a unique look at how stars form and help us understand the history of some of the first galaxies in the universe.",
                link: "#"
            }
        ],
        grid: "first"
    }
}