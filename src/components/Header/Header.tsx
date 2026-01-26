'use client'

import React, { type ReactNode } from 'react'
import s from './Header.module.scss'
import BellOutline from '../assets/icons/new-components/BellOutline'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { FlagRussiaIcon, FlagUnitedKingdomIcon } from '../assets/icons'
import { Button } from '../Button'

const HeaderButton = ({ children, variant = 'primary' }: { 
  children: ReactNode, 
  variant?: 'primary' | 'textButton'
}) => (
  <Button variant={variant}>
    {children}
  </Button>
)

type HeaderProps = {
  isLoginIn: boolean
}

export const Header = ({ isLoginIn }: HeaderProps) => {
  
  const NotificationBell = () => (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <BellOutline style={{ width: '24px', height: '24px' }} />
      <span style={{
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        width: '16px',
        height: '16px',
        fontSize: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        3
      </span>
    </div>
  )

  const languageOptions = [
    { 
      value: 'ru', 
      label: 'Russian',
      flag: <FlagRussiaIcon />
    },
    { 
      value: 'en', 
      label: 'English',
      flag: <FlagUnitedKingdomIcon />
    }
  ]

  return (
    <header className={s.container}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Inctagram</div>
      
      <div>
        {isLoginIn ? (
          <div className={s.authorized_notifications}>
            <NotificationBell />
            
            <LanguageSelector 
              options={languageOptions}
              value={'en'}
              onChange={(value) => console.log('Language changed to:', value)}
            />
            

          </div>
        ) : (
          <div className={s.unauthorized_notifications}>
            <LanguageSelector 
              options={languageOptions}
              value={'en'}
              onChange={(value) => console.log('Language changed to:', value)}
            />
            
            <div className={s.button}>
              <HeaderButton variant="textButton">Log in</HeaderButton>
              <HeaderButton variant="primary">Sign up</HeaderButton>
            </div>
            

          </div>
        )}
      </div>
    </header>
  )
}