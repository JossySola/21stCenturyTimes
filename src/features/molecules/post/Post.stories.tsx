import type {Meta, StoryObj} from '@storybook/react';
import Post from './post';

const meta: Meta<typeof Post> = {
    component: Post,
    title: "Molecules/Post Display",
    parameters: {
        layout: "fullscreen",
    },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

}
export const Loaded: Story = {
    args: {
        status: "fulfilled",
        USER_NAME: "u/nasa",
        date: "March 13, 2024",
        USER_IMAGE: "https://styles.redditmedia.com/t5_k5gc6/styles/profileIcon_ydyqarnwt7s91.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=77a410a48a906e94c2c113eafe0299c9bccd6d27",
        title: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024",
        IMAGE_SRC: "https://preview.redd.it/the-total-solar-eclipse-is-less-than-a-month-away-heres-v0-zqbtqdd9n4oc1.png?width=640&crop=smart&auto=webp&s=07dfee5d45334cbb9c412095292218b6b7856763"
    },
}