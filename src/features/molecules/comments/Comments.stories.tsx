import type { Meta, StoryObj } from "@storybook/react";
import Comments from "./comments";

const meta: Meta<typeof Comments> = {
    title: 'Molecules/Comments Section',
    component: Comments,
    parameters: {
        layout: "fullscreen",
    },
}
export default meta;

type Story = StoryObj<typeof Comments>;

export const Default: Story = {

}
export const Empty: Story = {
    args: {
        status: "fulfilled",
        comments: []
    } 
}
export const LoggedIn: Story = {
    args: {
        status: "fulfilled",
        loggedIn: true,
        comments: [{
            id: "1",
            TEXT: "Our Eclipse Explorer site has the full path as the eclipse passes over North America—and you can learn more about what to expect and how to watch safely on our NASA eclipse page. Most of North America will be able to see at least a partial eclipse, but if you're out of the path, join us on April 8 for eclipse views and updates from scientists along the path of totality!",
            USER_NAME: 'nasa',
            IMAGE_SRC: "https://styles.redditmedia.com/t5_k5gc6/styles/profileIcon_ydyqarnwt7s91.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=77a410a48a906e94c2c113eafe0299c9bccd6d27"
        }, {
            id: "2",
            TEXT: "I hope Trump stares straight at it again.",
            USER_NAME: "sunbleached_anus",
            IMAGE_SRC: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
        }]
    }
}
export const LoggedOut: Story = {
    args: {
        status: "fulfilled",
        loggedIn: false,
        comments: [{
            id: "1",
            TEXT: "Our Eclipse Explorer site has the full path as the eclipse passes over North America—and you can learn more about what to expect and how to watch safely on our NASA eclipse page. Most of North America will be able to see at least a partial eclipse, but if you're out of the path, join us on April 8 for eclipse views and updates from scientists along the path of totality!",
            USER_NAME: 'nasa',
            IMAGE_SRC: "https://styles.redditmedia.com/t5_k5gc6/styles/profileIcon_ydyqarnwt7s91.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=77a410a48a906e94c2c113eafe0299c9bccd6d27"
        }, {
            id: "2",
            TEXT: "I hope Trump stares straight at it again.",
            USER_NAME: "sunbleached_anus",
            IMAGE_SRC: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
        }]
    }
}