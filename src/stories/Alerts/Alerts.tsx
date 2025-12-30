import s from './Alerts.module.scss'
import clsx from 'clsx'
import { type ComponentPropsWithoutRef } from 'react'

export type AlertVariant = 'error' | 'success'

type Props = {
  variant?: AlertVariant
  onClose?: () => void
} & ComponentPropsWithoutRef<'div'>

export const Alert = (props: Props) => {
  const {
    variant = 'error',
    onClose,
    className,
    children,
    ...rest
  } = props

  return (
    <div
      className={clsx(s.alert, s[variant], className)}
      role="alert"
      {...rest}
    >
      <span className={s.alertText}>
        {children}
      </span>

      {onClose && (
        <button
          type="button"
          className={s.closeBtn}
          onClick={onClose}
          aria-label="Close alert"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
          </svg>
        </button>
      )}
    </div>
  )
}
