import clsx from 'clsx'
import { type ReactNode } from 'react'
import s from './Sidebar.module.scss'

export type SidebarItem = {
  id: string
  label: string
  icon: ReactNode
  disabled?: boolean
  href?: string
  onClick?: () => void
  className?: string
}

type Props = {
  items: SidebarItem[]
  activeItemId?: string
  disableHover?: boolean
  showFocusBorder?: boolean
  navigationDisabled?: boolean 
}

export const Sidebar = ({ items, activeItemId, disableHover = false, showFocusBorder = false, navigationDisabled = false }: Props) => {
  return (
    <nav className={clsx(s.root, disableHover && s.disableHover)}>
      <ul className={s.list}>
        {items.map(item => (
          <li key={item.id} className={s.itemWrapper}>
            {(() => {
              const isLocked = navigationDisabled && activeItemId !== item.id;
              
              const Component = item.href ? 'a' : item.onClick ? 'button' : 'div' as any;
              const commonProps = {
                className: clsx(
                  s.item,
                  item.className,
                  (item.disabled || isLocked) && s.disabled,
                  !showFocusBorder && activeItemId === item.id && s.active,
                  showFocusBorder && activeItemId === item.id && s.focused
                ),
                'aria-current': activeItemId === item.id ? 'page' : undefined,
              };
              
              const props = item.href 
                ? {
                    ...commonProps,
                    href: isLocked ? undefined : item.href,
                    'aria-disabled': isLocked || item.disabled,
                    tabIndex: isLocked || item.disabled ? -1 : undefined,
                    onClick: isLocked || item.disabled ? (e: React.MouseEvent) => e.preventDefault() : undefined,
                  }
                : item.onClick
                ? {
                    ...commonProps,
                    type: 'button' as const,
                    disabled: isLocked || item.disabled,
                    onClick: isLocked || item.disabled ? undefined : item.onClick,
                  }
                : {
                    ...commonProps,
                    disabled: isLocked || item.disabled,
                  };
              
              return (
                <Component {...props}>
                  <span className={s.content}>
                    <span className={s.icon}>{item.icon}</span>
                    <span className={s.label}>{item.label}</span>
                  </span>
                </Component>
              );
            })()}
          </li>
        ))}
      </ul>
    </nav>
  )
}