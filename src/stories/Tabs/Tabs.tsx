'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { useState, type ReactNode } from 'react'
import s from './Tabs.module.scss'

type Tab = {
  label: string
  content: ReactNode
}

type ForcedState = 'hover' | 'focus' | null

type TabsProps = {
  tabs: Tab[]
  defaultActiveIndex?: number | null
  variant?: 'blue' | 'gray'
  disabled?: boolean
  forcedState?: ForcedState
}

export default function Tabs({
  tabs,
  defaultActiveIndex = 0,
  variant = 'blue',
  disabled = false,
  forcedState = null,
}: TabsProps) {
  const initialValue =
    defaultActiveIndex !== null && defaultActiveIndex >= 0
      ? String(defaultActiveIndex)
      : undefined

  const [value, setValue] = useState<string | undefined>(initialValue)

  return (
    <TabsPrimitive.Root
      className={`${s.tabs} ${s[variant]} ${disabled ? s.disabled : ''}`}
      value={value}
      onValueChange={setValue}
    >
      <TabsPrimitive.List className={s.tabsHeader}>
        {tabs.map((tab, index) => {
          const tabValue = String(index)

          return (
            <TabsPrimitive.Trigger
              key={tabValue}
              value={tabValue}
              className={s.tabButton}
              data-hover={forcedState === 'hover' ? true : undefined}
              data-focus={forcedState === 'focus' ? true : undefined}
              disabled={disabled} 
            >
              {tab.label}
            </TabsPrimitive.Trigger>
          )
        })}
      </TabsPrimitive.List>

      {tabs.map((tab, index) => {
        const tabValue = String(index)

        return (
          <TabsPrimitive.Content
            key={tabValue}
            value={tabValue}
            className={s.tabContent}
          >
            {tab.content}
          </TabsPrimitive.Content>
        )
      })}
    </TabsPrimitive.Root>
  )
}