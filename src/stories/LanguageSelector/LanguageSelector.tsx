import React, { useState, type ReactNode } from 'react'
import clsx from 'clsx'
import s from './LanguageSelector.module.scss'
import { FlagRussiaIcon, FlagUnitedKingdomIcon, ChevronDownIcon, ChevronUpIcon } from '../assets/icons'

export type LanguageOption = {
  value: string
  label: string
  flag: ReactNode
}

type Props = {
  options: LanguageOption[]
  value?: string | null
  onChange?: (value: string) => void
  disabled?: boolean
  
  /** Storybook / UI-kit */
  interactive?: boolean
}

export const LanguageSelector = ({
  options,
  value,
  onChange,
  disabled = false,
  interactive = true,
}: Props) => {
  const [open, setOpen] = useState(false)
  
  const selected = options.find(opt => opt.value === value)
  
  const toggle = () => {
    if (!disabled && interactive) {
      setOpen(prev => !prev)
    }
  }
  
  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    setOpen(false)
  }
  
  return (
    <div className={s.wrapper}>
      <button
        type="button"
        disabled={disabled}
        className={clsx(s.selector, {
          [s.open]: open,
          [s.disabled]: disabled,
        })}
        onClick={toggle}
      >
        <div className={s.selected}>
          {selected?.flag}
          <span className={s.label}>{selected?.label}</span>
        </div>
        <div className={s.arrow}>
          {open ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
        </div>
      </button>
      
      {interactive && open && (
        <div className={s.dropdown}>
          {options.map(option => (
            <button
              key={option.value}
              className={clsx(s.option, {
                [s.selectedOption]: option.value === value,
              })}
              onClick={() => handleSelect(option.value)}
            >
              {option.flag}
              <span className={s.optionLabel}>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}