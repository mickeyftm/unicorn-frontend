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
    icon: 'IfoIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'NftIcon',
    href: '/nests',
  },  
  {
    label: 'Price Chart',
    icon: 'InfoIcon',
    href: 'https://poocoin.app/tokens/0x62a6ec9f76e4c5d7a8a172f9a984eaaa880a1ce0',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: '',
      // },

      {
        label: 'Docs',
        href: 'https://docs.acruxdefi.com/',
      },
      {
        label: 'Blog',
        href: 'https://udefi58.medium.com/alpha-crucis-a7de72ce24cd'
      },
    ],
  },
]

export default config
