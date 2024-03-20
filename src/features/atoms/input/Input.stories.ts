import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Atoms/Input Fields',
    component: Input,
    parameters: {
        layout: 'centered'
    }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Search: Story = {
    args: {
        placeholder: 'Search',
        type: 'search'
    }
}

export const Comment: Story = {
    args: {
        placeholder: 'Add a comment...',
        type: 'typeComment'
    }
}