import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  AtSign,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  CreditCard,
  Eye,
  FacebookIcon,
  Github,
  Globe,
  Keyboard,
  LifeBuoy,
  Linkedin,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Moon,
  Plus,
  PlusCircle,
  Search,
  Send,
  Settings,
  SunMedium,
  Twitter,
  User,
  UserPlus,
  Users,
  X,
} from 'lucide-react'

export type LucideIconType = any

// these particular icons doestn't  exist on lucide

const mediumIcon = () => (
  <svg
    width="21"
    height="17"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.09368 3.51644C3.10593 3.39471 3.08952 3.27179 3.04576 3.15754C3.00201 3.04328 2.93211 2.94085 2.84168 2.85844L0.97368 0.591442V0.252441H6.77168L11.2537 10.1574L15.1937 0.252441H20.7217V0.591442L19.1247 2.13244C19.057 2.18469 19.0048 2.25434 18.9736 2.33394C18.9424 2.41355 18.9335 2.50013 18.9477 2.58444V13.9184C18.9335 14.0027 18.9424 14.0893 18.9736 14.1689C19.0048 14.2485 19.057 14.3182 19.1247 14.3704L20.6847 15.9124V16.2524H12.8407V15.9134L14.4567 14.3334C14.6157 14.1734 14.6157 14.1264 14.6157 13.8824V4.72044L10.1237 16.2144H9.51768L4.28768 4.72044V12.4244C4.24468 12.7474 4.35168 13.0744 4.57768 13.3084L6.67868 15.8764V16.2144H0.72168V15.8764L2.82168 13.3084C2.93279 13.1925 3.01526 13.0522 3.06248 12.8987C3.10971 12.7452 3.12039 12.5828 3.09368 12.4244V3.51644Z"
      fill="#040316"
    />
  </svg>
)

const threadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    image-rendering="optimizeQuality"
    fill-rule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 512"
  >
    <path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z" />
    <path
      fill="#fff"
      fill-rule="nonzero"
      d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"
    />
  </svg>
)

// const sendIcon = () => (
//         <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M18.6646 0.969506L0.934606 7.80651C-0.275394 8.29251 -0.268393 8.96751 0.712607 9.26851L5.26461 10.6885L15.7966 4.04351C16.2946 3.74051 16.7496 3.90351 16.3756 4.23551L7.84261 11.9365H7.84061L7.84261 11.9375L7.52861 16.6295C7.98861 16.6295 8.19161 16.4185 8.44961 16.1695L10.6606 14.0195L15.2596 17.4165C16.1076 17.8835 16.7166 17.6435 16.9276 16.6315L19.9466 2.40351C20.2556 1.16451 19.4736 0.603506 18.6646 0.969506Z" fill="#040316"/>
//         </svg>
// )

export const LucideIcons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  cloud: Cloud,
  creditCard: CreditCard,
  github: Github,
  keyboard: Keyboard,
  lifeBuoy: LifeBuoy,
  logOut: LogOut,
  mail: Mail,
  messageSquare: MessageSquare,
  plus: Plus,
  plusCircle: PlusCircle,
  settings: Settings,
  user: User,
  userPlus: UserPlus,
  users: Users,
  eye: Eye,
  close: X,
  check: Check,
  error: AlertCircle,
  warning: AlertTriangle,
  chevronDown: ChevronDown,
  menu: Menu,
  mediumIcon,
  sendIcon: Send,
  arrowLeft: ArrowLeft,
  search: Search,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  facebook: FacebookIcon,
  linkedin: Linkedin,
  threadIcon: AtSign,
  globe: Globe,
  x: X
}
