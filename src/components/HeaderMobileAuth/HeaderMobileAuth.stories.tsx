import type { Meta, StoryObj } from '@storybook/react'
import { HeaderMobileAuth } from './HeaderMobileAuth'

const meta = {
  component: HeaderMobileAuth,
  tags: ['autodocs'],
  title: 'Components/HeaderMobileAuth',
} satisfies Meta<typeof HeaderMobileAuth>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderMobile: Story = {
  args: {
    showDots: true,
  },
}

export const HeaderMobileAuthStory: Story = {
  args: {
    showDots: false,
  },
}