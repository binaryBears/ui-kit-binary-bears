import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Sidebar, type SidebarItem } from './Sidebar'

import {
  Home,
  HomeOutline,
  PlusSquareOutline,
  Person,
  PersonOutline,
  MessageCircleOutline,
  BookmarkOutline,
  Search,
  TrendingUp,
  LogOut,
} from '../assets/icons/components'

// --- функции для генерации items ---
const getDefaultItems = (): SidebarItem[] => [
  { id: 'feed', label: 'Feed', icon: <HomeOutline />, href: '/feed' },
  { id: 'create', label: 'Create', icon: <PlusSquareOutline />, href: '/create' },
  { id: 'profile', label: 'My Profile', icon: <PersonOutline />, href: '/profile' },
  { id: 'messages', label: 'Messenger', icon: <MessageCircleOutline />, href: '/messages' },
  { id: 'search', label: 'Search', icon: <Search />, href: '/search' },
  { id: 'spacer1', label: '', icon: null, disabled: true, className: 'group-spacer' },
  { id: 'stats', label: 'Statistics', icon: <TrendingUp />, href: '/statistics' },
  { id: 'favorites', label: 'Favorites', icon: <BookmarkOutline />, href: '/favorites' },
  { id: 'spacer2', label: '', icon: null, disabled: true, className: 'group-spacer large' },
  {
    id: 'logout',
    label: 'Log Out',
    icon: <LogOut />,
    onClick: () => console.log('redirect → /sign-in'),
  },
]

const getActiveItems = (): SidebarItem[] =>
  getDefaultItems().map(item => ({
    ...item,
    icon: item.id === 'profile' ? <Person /> : item.icon, // активная иконка
  }))

const getDisabledItems = (): SidebarItem[] =>
  getDefaultItems().map(item => ({
    ...item,
    disabled: true, // теперь стандартный пропс кнопки
    onClick: () => console.log(`${item.label} clicked`), // можно оставить клики для теста
  }))

// --- Storybook meta ---
const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

// --- STORIES ---

// DEFAULT: все элементы белые, нет активного
export const Default: Story = {
  render: args => {
    const [active, setActive] = useState<string | undefined>(undefined)
    return <Sidebar {...args} activeItemId={active} onChange={setActive} />
  },
  args: {
    items: getDefaultItems(),
  },
}

// ACTIVE: один элемент синий (bold), activeItemId = 'profile'
export const Active: Story = {
  render: args => {
    const [active, setActive] = useState<string | undefined>('profile')
    return <Sidebar {...args} activeItemId={active} onChange={setActive} />
  },
  args: {
    items: getActiveItems(),
  },
}

// DISABLED: все элементы серые, disabled: true
export const Disabled: Story = {
  render: args => {
    const [active, setActive] = useState<string | undefined>('profile')
    return <Sidebar {...args} activeItemId={active} onChange={setActive} />
  },
  args: {
    items: getDisabledItems(),
  },
}