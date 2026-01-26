'use client'

import { clsx } from 'clsx'
import s from './HeaderMobileAuth.module.scss'

import ArrowDown from '../assets/icons/components/ArrowDown'
import RussiaFlag from '../assets/icons/components/RussiaFlag'

type HeaderMobileAuthProps = {
  showDots?: boolean
  className?: string
}

export const HeaderMobileAuth = ({ 
  showDots = true, 
  className 
}: HeaderMobileAuthProps) => {
  return (
    <header className={clsx(s.root, className)}>
      <h1 className={s.title}>Inctagram</h1>
      <div className={s.flagContainer}>
        <RussiaFlag className={s.flag} />
        <ArrowDown className={s.arrow} />
      </div>
      {showDots && (
        <div className={s.dots}>
          <div className={s.dot}></div>
          <div className={s.dot}></div>
          <div className={s.dot}></div>
        </div>
      )}
    </header>
  )
}