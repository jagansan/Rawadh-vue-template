import {
  CircleIcon,
  WindmillIcon,
  TypographyIcon,
  ShadowIcon,
  PaletteIcon,
  KeyIcon,
  BugIcon,
  DashboardIcon,
  BrandChromeIcon,
  HelpIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [

  { header: 'Pages' },
  {
    title: 'Project',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera 1',
        icon: CircleIcon,
        to: '/project'
      },
      {
        title: 'Camera 2',
        icon: CircleIcon,
        to: '/auth/register'
      },
      {
        title: 'Camera 3',
        icon: CircleIcon,
        to: '/auth/register'
      }
    ]
  },
  {
    title: 'Authentication',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Login',
        icon: CircleIcon,
        to: '/auth/login'
      },
      {
        title: 'Register',
        icon: CircleIcon,
        to: '/auth/register'
      }
    ]
  },
  {
    title: 'Error 404',
    icon: BugIcon,
    to: '/pages/error'
  },
  { divider: true },
  { header: 'Utilities' },
  {
    title: 'Icons',
    icon: WindmillIcon,
    to: '/forms/radio',
    children: [
      {
        title: 'Tabler Icons',
        icon: CircleIcon,
        to: '/icons/tabler'
      },
      {
        title: 'Material Icons',
        icon: CircleIcon,
        to: '/icons/material'
      }
    ]
  },
  { divider: true },

  {
    title: 'Documentation',
    icon: HelpIcon,
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  }
];

export default sidebarItem;
