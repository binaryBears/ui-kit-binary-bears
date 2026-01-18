'use client'

import React, { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react'

import clsx from 'clsx'

import s from './Button.module.scss'

export type ButtonState =
  | 'default'
  | 'hover'
  | 'active'
  | 'focus'
  | 'disabled'

export type Props<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'textButton'
  state?: ButtonState
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', state = 'default', disabled, ...rest } = props

  const classes = clsx(
    s.button,
    s[variant],
    state !== 'default' && s[`state-${state}`],
    fullWidth && s.fullWidth,
    className
  )

  return <Component className={classes} {...rest} disabled={disabled} />
}