import * as TabsPrimitive from '@radix-ui/react-tabs'
import { useState, type ReactNode } from 'react'
import s from './Tabs.module.scss'

export type TabItem = {
  id: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean

  variantStyle?: 'primary' | 'secondary' // для управления цветами
}

type ForcedState = 'hover' | 'focus' | null

type TabsProps = {
  tabs: TabItem[]
  defaultActiveId?: string | null
  forcedState?: ForcedState
}

export default function Tabs({
  tabs,
  defaultActiveId = null,
  forcedState = null,
}: TabsProps) {
  const initialValue =
    defaultActiveId === null ? undefined : defaultActiveId

  const [value, setValue] = useState<string | undefined>(initialValue)



  return (
    <TabsPrimitive.Root value={value} onValueChange={setValue} className={s.tabs}>
      <TabsPrimitive.List className={s.tabsHeader}>
        {tabs.map(tab => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={`${s.tabButton} ${s[tab.variantStyle ?? 'primary']}`}
            data-hover={forcedState === 'hover' ? '' : undefined}
            data-focus={forcedState === 'focus' ? '' : undefined}
          >
            <span className={s.label}>{tab.label}</span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>


    </TabsPrimitive.Root>
  )
}
