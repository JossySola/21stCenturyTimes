import type { Meta, StoryObj } from "@storybook/react";
import PostView from "./postView";

const meta: Meta <typeof PostView> = {
    title: "Organisms/Post Display",
    component: PostView,
    parameters: {
        layout: "fullscreen"
    }
}
export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingDisplay: Story = {
    decorators: [
        (Story) => {
            return (
                <div style={{height: 2000}}>
                    {Story()}
                </div>
            )
        }
    ],
    args: {

    }
}
export const LoadedDisplay: Story = {
    decorators: [
        (Story) => {
            return (
                <div style={{height: 2000}}>
                    {Story()}
                </div>
            )
        }
    ],
    args: {
        dataObject: {
            POST_ID: "2",
            USER_ID: "2",
            USER_NAME: "u/nasa",
            content: "",
            date: "March 13, 2024",
            USER_IMAGE: "https://styles.redditmedia.com/t5_k5gc6/styles/profileIcon_ydyqarnwt7s91.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=77a410a48a906e94c2c113eafe0299c9bccd6d27",
            title: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024",
            IMAGE_SRC: "https://preview.redd.it/the-total-solar-eclipse-is-less-than-a-month-away-heres-v0-zqbtqdd9n4oc1.png?width=640&crop=smart&auto=webp&s=07dfee5d45334cbb9c412095292218b6b7856763",
            
        },
        status: "fulfilled",
        loggedIn: true,
    },
}
export const LoadedWithComments: Story = {
    decorators: [
        (Story) => {
            return (
                <div style={{height: 2000}}>
                    {Story()}
                </div>
            )
        }
    ],
    args: {
        dataObject: {
            POST_ID: "2",
            USER_ID: "2",
            USER_NAME: "u/nasa",
            content: "",
            date: "March 13, 2024",
            USER_IMAGE: "https://styles.redditmedia.com/t5_k5gc6/styles/profileIcon_ydyqarnwt7s91.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=77a410a48a906e94c2c113eafe0299c9bccd6d27",
            title: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024",
            IMAGE_SRC: "https://preview.redd.it/the-total-solar-eclipse-is-less-than-a-month-away-heres-v0-zqbtqdd9n4oc1.png?width=640&crop=smart&auto=webp&s=07dfee5d45334cbb9c412095292218b6b7856763",
            
        },
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
        }],
    },
}