import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { LanguageSelector, type LanguageOption } from './LanguageSelector'
import { FlagRussiaIcon, FlagUnitedKingdomIcon } from '../assets/icons'

const options: LanguageOption[] = [
  { 
    value: 'ru', 
    label: 'Русский', 
    flag: <FlagRussiaIcon size={20} /> 
  },
  { 
    value: 'en', 
    label: 'English', 
    flag: <FlagUnitedKingdomIcon size={20} /> 
  },
]

const meta = {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    options,
    value: 'en',
  },
} satisfies Meta<typeof LanguageSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'en',
  },
}

export const RussianSelected: Story = {
  args: {
    value: 'ru',
  },
}

export const Disabled: Story = {
  args: {
    value: 'en',
    disabled: true,
  },
}

export const Interactive: Story = {
  args: {
    value: 'en',
    interactive: true,
  },
}

export const Open: Story = {
  args: {
    value: 'en',
    interactive: true,
  },
  render: args => {
    const [value, setValue] = React.useState<string>('en')
    return <LanguageSelector {...args} value={value} onChange={setValue} />
  },
}