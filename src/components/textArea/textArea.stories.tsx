import {TextArea} from './TextArea'
import type {StoryObj} from "@storybook/react-vite";

const meta = {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
        docs: {
            theme: 'dark',
        },
    },
    tags: ['autodocs'],

    argTypes: {},
    args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Enter your message',
        name: 'default'
    },
}