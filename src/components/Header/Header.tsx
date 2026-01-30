import s from './Header.module.scss'
import { BellOutline } from '../../../assets/icons'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { FlagRussiaIcon, FlagUnitedKingdomIcon } from '../../../assets/icons'
import { Button } from '../button'

type NotificationBellProps = {
  count?: number
  onClick?: () => void
}

export const NotificationBell = ({ count, onClick }: NotificationBellProps) => (
  <button
    type="button"
    className={s.bell}
    aria-label="Notifications"
    onClick={onClick}
  >
    <BellOutline className={s.bellIcon} />

    {typeof count === 'number' && (
      <span className={s.badge} aria-live="polite">
        {count}
      </span>
    )}
  </button>
)

type HeaderProps = {
  isLoggedIn: boolean
  notificationsCount?: number
  language: string
  onLanguageChange?: (value: string) => void
  onNotificationClick?: () => void
}

export const Header = ({
  isLoggedIn,
  notificationsCount,
  language,
  onLanguageChange,
  onNotificationClick,
}: HeaderProps) => {
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
      <div className={s.logo}>Inctagram</div>
      
      <div>
        {isLoggedIn ? (
          <div className={s.authorizedNotifications}>
            <NotificationBell count={notificationsCount} onClick={onNotificationClick} />
            
            <LanguageSelector 
              options={languageOptions}
              value={language}
              onChange={onLanguageChange}
            />
          </div>
        ) : (
          <div className={s.unauthorizedNotifications}>
            <LanguageSelector 
              options={languageOptions}
              value={language}
              onChange={onLanguageChange}
            />
            
            <div className={s.buttonContainer}>
              <Button variant="textButton">Log in</Button>
              <Button variant="primary">Sign up</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}