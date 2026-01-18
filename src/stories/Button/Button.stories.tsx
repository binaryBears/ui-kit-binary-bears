import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const PrimaryDefault: Story = {
  args: {
    variant: 'primary',
    state: 'default',
    children: 'Button',
  },
}

export const PrimaryHover: Story = {
  args: {
    variant: 'primary',
    state: 'hover',
    children: 'Button',
  },
}

export const PrimaryActive: Story = {
  args: {
    variant: 'primary',
    state: 'active',
    children: 'Button',
  },
}

export const PrimaryFocus: Story = {
  args: {
    variant: 'primary',
    state: 'focus',
    children: 'Button',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    state: 'disabled',
    disabled: true,
    children: 'Button',
  },
}

export const SecondaryDefault: Story = {
  args: {
    variant: 'secondary',
    state: 'default',
    children: 'Button',
  },
}

export const SecondaryHover: Story = {
  args: {
    variant: 'secondary',
    state: 'hover',
    children: 'Button',
  },
}

export const SecondaryActive: Story = {
  args: {
    variant: 'secondary',
    state: 'active',
    children: 'Button',
  },
}

export const SecondaryFocus: Story = {
  args: {
    variant: 'secondary',
    state: 'focus',
    children: 'Button',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    state: 'disabled',
    disabled: true,
    children: 'Button',
  },
}

export const OutlineDefault: Story = {
  args: {
    variant: 'outline',
    state: 'default',
    children: 'Button',
  },
}

export const OutlineHover: Story = {
  args: {
    variant: 'outline',
    state: 'hover',
    children: 'Button',
  },
}

export const OutlineActive: Story = {
  args: {
    variant: 'outline',
    state: 'active',
    children: 'Button',
  },
}

export const OutlineFocus: Story = {
  args: {
    variant: 'outline',
    state: 'focus',
    children: 'Button',
  },
}

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    state: 'disabled',
    disabled: true,
    children: 'Button',
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    state: 'default',
    fullWidth: true,
    children: 'Button',
  },
}

export const TextButtonDefault: Story = {
  args: {
    variant: 'textButton',
    state: 'default',
    children: 'Button',
  },
}

export const TextButtonHover: Story = {
  args: {
    variant: 'textButton',
    state: 'hover',
    children: 'Button',
  },
}

export const TextButtonActive: Story = {
  args: {
    variant: 'textButton',
    state: 'active',
    children: 'Button',
  },
}

export const TextButtonFocus: Story = {
  args: {
    variant: 'textButton',
    state: 'focus',
    children: 'Button',
  },
}

export const TextButtonDisabled: Story = {
  args: {
    variant: 'textButton',
    state: 'disabled',
    disabled: true,
    children: 'Button',
  },
}