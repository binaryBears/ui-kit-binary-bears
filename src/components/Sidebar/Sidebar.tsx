import clsx from 'clsx'
import { type ReactNode, type ComponentPropsWithoutRef } from 'react'
import s from './Sidebar.module.scss'

export type SidebarItem = {
  id: string
  label: string
  icon: ReactNode
  href?: string
  className?: string
} & ComponentPropsWithoutRef<'button'> // <- теперь disabled, onClick и др. стандартно

type Props = {
  items: SidebarItem[]
  activeItemId?: string
  onChange?: (id: string) => void
}

export const Sidebar = ({ items, activeItemId, onChange }: Props) => {
  const getItemClass = (
    className: string | undefined,
    isActive: boolean,
    isDisabled: boolean
  ) =>
    clsx(
      s.item,
      className,
      isActive && !isDisabled && s.active,
      isDisabled && s.disabled
    )

  return (
    <nav className={s.root}>
      <ul className={s.list}>
        {items.map(item => {
          const isDisabled = item.disabled === true
          const isActive = activeItemId === item.id && !isDisabled

          const { id, label, icon, href, className, onClick, ...rest } = item

          const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (isDisabled) return
            // Не меняем activeItemId для обычных кликов - элемент остается белым
            onClick?.(e)
            if (href) {
              console.log('Navigate to:', href)
              // router.push(href) // <- для Next.js
            }
          }

          return (
            <li key={id} className={clsx(s.itemWrapper)}>
              <button
                type="button"
                className={getItemClass(className, isActive, isDisabled)}
                disabled={isDisabled}
                aria-current={isActive ? 'page' : undefined}
                tabIndex={isDisabled ? -1 : rest.tabIndex}
                onClick={handleClick}
                {...rest} // <- прокидываем остальные стандартные props кнопки
              >
                <span className={s.content}>
                  <span className={s.icon}>{icon}</span>
                  <span className={s.label}>{label}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}