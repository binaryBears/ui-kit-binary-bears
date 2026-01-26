
'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import clsx from 'clsx'
import s from './Scrollbar.module.scss'

export type ScrollbarOrientation = 'vertical' | 'horizontal' | 'both'

type ScrollbarProps = Readonly<{
  orientation?: ScrollbarOrientation
  className?: string
  children: React.ReactNode
}>

export const Scrollbar = ({
  orientation = 'vertical',
  className,
  children,
}: ScrollbarProps) => {
  const showVertical = orientation === 'vertical' || orientation === 'both'
  const showHorizontal = orientation === 'horizontal' || orientation === 'both'
  
  return (
    <ScrollArea.Root 
      className={clsx(s.root, className)} 
      type="always"
    >
      <ScrollArea.Viewport className={s.viewport} asChild>
        <div>{children}</div>
      </ScrollArea.Viewport>

      {showVertical && (
        <ScrollArea.Scrollbar 
          orientation="vertical" 
          className={clsx(s.scrollbar, s['scrollbar--vertical'])}
        >
          <ScrollArea.Thumb className={s.thumb} />
        </ScrollArea.Scrollbar>
      )}
      
      {showHorizontal && (
        <ScrollArea.Scrollbar 
          orientation="horizontal" 
          className={clsx(s.scrollbar, s['scrollbar--horizontal'])}
        >
          <ScrollArea.Thumb className={s.thumb} />
        </ScrollArea.Scrollbar>
      )}
      
      {orientation === 'both' && (
        <ScrollArea.Corner className={s.corner} />
      )}
    </ScrollArea.Root>
  )
}
