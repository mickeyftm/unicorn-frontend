import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },  
  {
    label: 'Price Chart',
    icon: 'InfoIcon',
    href: '',
  },  
  {
    label: 'Farm Block',
    icon: 'SunIcon',
    href: '',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/SalmonSwap/Contracts',
      },
      {
        label: 'Docs',
        href: 'https://docs.acruxdefi.com/',
      },
      {
        label: 'Blog',
        href: 'https://salmonswap.medium.com/the-beauty-of-the-salmon-a57589db0a76'
      },
    ],
  },
]

export default config
