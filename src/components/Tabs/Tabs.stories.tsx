import type { Meta, StoryObj } from '@storybook/react'
import Tabs, { type TabItem } from './Tabs'

const bothVariants: TabItem[] = [
  { id: 'p', label: 'Tabs', content: null, variantStyle: 'primary' },
  { id: 's', label: 'Tabs', content: null, variantStyle: 'secondary' },
]

const disabledVariants: TabItem[] = [
  { id: 'p', label: 'Tabs', content: null, variantStyle: 'primary', disabled: true },
  { id: 's', label: 'Tabs', content: null, variantStyle: 'secondary', disabled: true },
]

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: false },
    defaultActiveId: { control: false },
    forcedState: { control: false },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
  args: {
    tabs: bothVariants,
  },
}

export const Active: Story = {
  args: {
    tabs: bothVariants,
    defaultActiveId: 'p',
  },
}

export const Hover: Story = {
  args: {
    tabs: bothVariants,
    forcedState: 'hover',
  },
}

export const Focus: Story = {
  args: {
    tabs: bothVariants,
    forcedState: 'focus',
  },
}

export const Disabled: Story = {
  args: {
    tabs: disabledVariants,
  },
}