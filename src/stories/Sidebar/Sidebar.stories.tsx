import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar, type SidebarItem } from './Sidebar'


import {
  Home,
  HomeOutline,
  PlusSquare,
  PlusSquareOutline,
  Person,
  PersonOutline,
  MessageCircle,
  MessageCircleOutline,
  Bookmark,
  BookmarkOutline,
  Search,
  TrendingUp,
  LogOut,
} from '../assets/icons/components'


const getDefaultItems = (): SidebarItem[] => [
  { id: 'feed', label: 'Feed', icon: <HomeOutline />, href: '/feed' },
  { id: 'create', label: 'Create', icon: <PlusSquareOutline />, href: '/create' },
  { id: 'profile', label: 'My Profile', icon: <PersonOutline />, href: '/profile' },
  { id: 'messages', label: 'Messenger', icon: <MessageCircleOutline />, href: '/messages' },
  { id: 'search', label: 'Search', icon: <Search />, href: '/search' },
  { id: 'spacer1', label: '', icon: null, disabled: true, className: 'group-spacer' }, // Отступ между группами 1 и 2
  { id: 'stats', label: 'Statistics', icon: <TrendingUp />, href: '/statistics' },
  { id: 'favorites', label: 'Favorites', icon: <BookmarkOutline />, href: '/favorites' },
  { id: 'spacer2', label: '', icon: null, disabled: true, className: 'group-spacer large' }, // Отступ между группами 2 и 3
  { id: 'logout', label: 'Log Out', icon: <LogOut />, onClick: () => console.log('Redirect to Sign In') },
]

const getActiveItems = (): SidebarItem[] => [
  { id: 'feed', label: 'Feed', icon: <Home />, href: '/feed' },
  { id: 'create', label: 'Create', icon: <PlusSquare />, href: '/create' },
  { id: 'profile', label: 'My Profile', icon: <Person />, href: '/profile' },
  { id: 'messages', label: 'Messenger', icon: <MessageCircle />, href: '/messages' },
  { id: 'search', label: 'Search', icon: <Search />, href: '/search' },
  { id: 'spacer1', label: '', icon: null, disabled: true, className: 'group-spacer' }, // Отступ между группами 1 и 2
  { id: 'stats', label: 'Statistics', icon: <TrendingUp />, href: '/statistics' },
  { id: 'favorites', label: 'Favorites', icon: <Bookmark />, href: '/favorites' },
  { id: 'spacer2', label: '', icon: null, disabled: true, className: 'group-spacer large' }, // Отступ между группами 2 и 3
  { id: 'logout', label: 'Log Out', icon: <LogOut />, onClick: () => console.log('Redirect to Sign In') },
]

const getFocusItems = (): SidebarItem[] => [
  { id: 'feed', label: 'Feed', icon: <HomeOutline />, href: '/feed' },
  { id: 'create', label: 'Create', icon: <PlusSquareOutline />, href: '/create' },
  { id: 'profile', label: 'My Profile', icon: <PersonOutline />, href: '/profile' },
  { id: 'messages', label: 'Messenger', icon: <MessageCircleOutline />, href: '/messages' },
  { id: 'search', label: 'Search', icon: <Search />, href: '/search' },
  { id: 'spacer1', label: '', icon: null, disabled: true, className: 'group-spacer' }, 
  { id: 'stats', label: 'Statistics', icon: <TrendingUp />, href: '/statistics' },
  { id: 'favorites', label: 'Favorites', icon: <BookmarkOutline />, href: '/favorites' },
  { id: 'spacer2', label: '', icon: null, disabled: true, className: 'group-spacer large' }, 
  { id: 'logout', label: 'Log Out', icon: <LogOut />, onClick: () => console.log('Redirect to Sign In') },
]

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: { 
    layout: 'centered',
    docs: {
      description: {
        component: 'A vertical navigation sidebar using proper icon components via index export'
      }
    }
  },
  argTypes: {
    activeItemId: {
      control: 'radio',
      options: ['', 'feed', 'create', 'profile', 'messages', 'search', 'stats', 'favorites', 'logout']
    }
  }
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: getDefaultItems(),
    activeItemId: '', 
    disableHover: true, 
  },
  argTypes: {
    activeItemId: {
      control: false 
    },
    disableHover: {
      control: false 
    }
  }
}

export const Active: Story = {
  args: {
    items: getActiveItems(),
    activeItemId: 'feed',
  },
}

export const Hover: Story = {
  args: {
    items: getDefaultItems(),
    activeItemId: '', 
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover state showing item hover effects (background highlight)'
      }
    }
  }
}

export const Focus: Story = {
  args: {
    items: getFocusItems(),
    activeItemId: 'feed', 
    showFocusBorder: true, 
  },
  parameters: {
    docs: {
      description: {
        story: 'Focus state showing the feed item with blue border around white icon and white text'
      }
    }
  }
}

export const Disabled: Story = {
  args: {
    items: getDefaultItems(),
    activeItemId: 'feed',
    navigationDisabled: true, // 👈 Используем правильную навигационную блокировку
  },
  argTypes: {
    activeItemId: {
      control: 'radio',
      options: ['', 'feed', 'create', 'profile', 'messages', 'search', 'stats', 'favorites', 'logout']
    },
    navigationDisabled: {
      control: 'boolean'
    }
  }
}