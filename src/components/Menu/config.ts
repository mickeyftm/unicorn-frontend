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
    href: 'https://poocoin.app/tokens/0x1f0548f4f6350e5c853ce8e0af60a5fbe149b228',
  },  
  {
    label: 'Farm Block',
    icon: 'SunIcon',
    href: 'https://bscscan.com/block/countdown/7988888',
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
        href: 'https://docs.salmonswapper.com',
      },
      {
        label: 'Blog',
        href: 'https://salmonswap.medium.com/the-beauty-of-the-salmon-a57589db0a76'
      },
    ],
  },
]

export default config
