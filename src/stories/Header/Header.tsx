'use client'

import React, { type ReactNode } from 'react'
import s from './Header.module.scss'
import BellOutline from '../assets/icons/new-components/BellOutline'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { FlagRussiaIcon, FlagUnitedKingdomIcon } from '../assets/icons'

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

  const Button = ({ children, variant = 'primary', style = {} }: { 
    children: ReactNode, 
    variant?: 'primary' | 'link',
    style?: React.CSSProperties 
  }) => (
    <button 
      style={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0px',
        textAlign: 'center',
        padding: '8px 16px',
        border: variant === 'primary' ? '1px solid #007bff' : 'none',
        backgroundColor: variant === 'primary' ? '#007bff' : 'transparent',
        color: variant === 'primary' ? 'white' : '#007bff',
        borderRadius: '4px',
        cursor: 'pointer',
        ...style
      }}
    >
      {children}
    </button>
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
              <Button variant={'link'}>
                Log in
              </Button>
              <Button variant={'primary'}>
                Sign up
              </Button>
            </div>
            

          </div>
        )}
      </div>
    </header>
  )
}