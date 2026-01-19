'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import clsx from 'clsx'
import s from './Scrollbar.module.scss'

type ScrollbarProps = {
  orientation?: 'horizontal' | 'vertical'
  state?: 'default' | 'hover'
  className?: string
  children?: React.ReactNode
}

export const Scrollbar = ({
  orientation = 'vertical',
  state = 'default',
  className,
  children,
}: ScrollbarProps) => {
  return (
    <ScrollArea.Root className={clsx(s.root, className)} type="always">
      <ScrollArea.Viewport className={s.viewport}>{children}</ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className={clsx(
          s.scrollbar,
          s[`scrollbar--${orientation}`],
          s[`scrollbar--${state}`]
        )}
        orientation={orientation}
      >
        <ScrollArea.Thumb className={s.thumb} />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
