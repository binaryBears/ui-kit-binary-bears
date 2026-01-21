import type { Meta, StoryObj } from '@storybook/react'
import Tabs from './Tabs'

const tabs = [
  { label: 'Tab', content: <p></p> }
]

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: false },
    defaultActiveIndex: { control: false },
    variant: {
      control: 'radio',
      options: ['blue', 'gray'],
    },
    forcedState: { control: false },
    disabled: { control: false },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
  args: {
    tabs,
    defaultActiveIndex: -1,
    forcedState: null,
    disabled: false,
  },
}

export const Active: Story = {
  args: {
    tabs,
    defaultActiveIndex: 0,
    forcedState: null,
    disabled: false,
  },
}

export const Hover: Story = {
  args: {
    tabs,
    defaultActiveIndex: -1,
    forcedState: 'hover',
    disabled: false,
  },
}

export const Focus: Story = {
  args: {
    tabs,
    defaultActiveIndex: -1,
    forcedState: 'focus',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    tabs,
    defaultActiveIndex: 0,
    forcedState: null,
    disabled: true,
  },
}