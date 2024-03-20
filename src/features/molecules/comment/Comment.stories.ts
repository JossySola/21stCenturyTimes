import type {Meta, StoryObj} from '@storybook/react';
import Comment from './comment';

const meta: Meta<typeof Comment> = {
    title: 'Molecules/Comment Bubble',
    component: Comment,
    parameters: {
        layout: 'centered'
    }
}
export default meta;

type Story = StoryObj<typeof Comment>;

export const Bubble: Story = {

}