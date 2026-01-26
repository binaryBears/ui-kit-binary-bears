import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Widgets/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const LogIn: Story = {
  name: 'Log In',
  args: {
    isLoginIn: true,
  },
}

export const SignUp: Story = {
  name: 'Sign Up',
  args: {
    isLoginIn: false,
  },
}
