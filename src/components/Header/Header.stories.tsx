import type { Meta, StoryObj } from '@storybook/react'
import { Header, NotificationBell } from './Header'

const meta = {
  title: 'Widgets/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {
  name: 'Logged In',
  args: {
    isLoggedIn: true,
    notificationsCount: 3,
    language: 'en',
    onLanguageChange: (value) => console.log('Language changed to:', value),
    onNotificationClick: () => alert('Notification bell clicked!'),
  },
}

export const LoggedOut: Story = {
  name: 'Logged Out',
  args: {
    isLoggedIn: false,
    language: 'en',
    onLanguageChange: (value) => console.log('Language changed to:', value),
  },
}

export const NotificationBellWithCount: Story = {
  name: 'Notification Bell With Count',
  render: () => <NotificationBell count={5} onClick={() => alert('Notifications clicked!')} />,
}

export const NotificationBellWithZero: Story = {
  name: 'Notification Bell With Zero',
  render: () => <NotificationBell count={0} onClick={() => alert('Notifications clicked!')} />,
}

export const NotificationBellWithoutCount: Story = {
  name: 'Notification Bell Without Count',
  render: () => <NotificationBell onClick={() => alert('Notifications clicked!')} />,
}
