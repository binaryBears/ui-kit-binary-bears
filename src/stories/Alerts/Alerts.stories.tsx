import type { StoryObj } from '@storybook/react-vite'
import { Alert } from './Alerts'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Ui kit Alert component',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['error', 'success'],
    },
    onClose: { action: 'closed' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
    variant: 'error',
    children: (
      <>
        <strong>Error!</strong>
        <span> Server is not available</span>
      </>
    ),
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your settings are saved',
  },
}




