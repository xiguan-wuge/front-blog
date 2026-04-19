import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '分类',
    items: [
      { text: 'html', link: '/pages/html/html' },
      { text: 'css', link: '/pages/css/css' },
      { text: 'js', link: '/pages/js/js' },
      { text: '工程化', link: '/pages/engineering/github-wokflow' }
    ]
  },
  { text: 'github', link: 'https://github.com' }
]
