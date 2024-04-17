import type { Meta, StoryObj } from "@storybook/react";
import PostPreview from "./postPreview";

const meta: Meta<typeof PostPreview> = {
    title: "Molecules/Post Preview",
    component: PostPreview,
}
export default meta;

type Story = StoryObj<typeof meta>;

export const PreviewWithImage: Story = {
    args: {
        style: "big image",
        IMAGE_SRC_LARGE: "https://preview.redd.it/the-total-solar-eclipse-is-less-than-a-month-away-heres-v0-zqbtqdd9n4oc1.png?width=640&crop=smart&auto=webp&s=07dfee5d45334cbb9c412095292218b6b7856763",
        link: "test",
        title: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024",
        content: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024"
    }
}
export const PreviewBig: Story = {
    args: {
        style: "big",
        IMAGE_SRC_MEDIUM: "https://preview.redd.it/the-total-solar-eclipse-is-less-than-a-month-away-heres-v0-zqbtqdd9n4oc1.png?width=640&crop=smart&auto=webp&s=07dfee5d45334cbb9c412095292218b6b7856763",
        link: "test",
        title: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024",
        content: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024"
    }
}
export const PreviewSmall: Story = {
    args: {
        style: "small",
        IMAGE_SRC_SMALL: "https://preview.redd.it/the-total-solar-eclipse-is-less-than-a-month-away-heres-v0-zqbtqdd9n4oc1.png?width=640&crop=smart&auto=webp&s=07dfee5d45334cbb9c412095292218b6b7856763",
        link: "test",
        title: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024",
        content: "The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024The total solar eclipse is less than a month away. Here's where you'll be able to see it on April 8, 2024"
    }
}