import type { Meta, StoryObj } from '@storybook/react';
import Submit from './Submit';

const meta: Meta<typeof Submit> = {
    title: 'Atoms/Buttons',
    component: Submit,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        backgroundColor: { control: 'color'},
    }
};
export default meta;

type Story = StoryObj<typeof Submit>;

export const Primary: Story = {
    args: {
        primary: true,
        text: 'Submit'
    },
};
export const Secondary: Story = {
    args: {
        text: 'Comment'
    }
}