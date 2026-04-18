import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/pages/html/': [
    {
      text: 'html',
      collapsed: false,
      items: [
        { text: 'html', link: '/pages/html/html' },
        { text: 'websocket', link: '/pages/html/websocket' },
        { text: 'tags', link: '/pages/html/tags' }
      ]
    }
  ],
  '/pages/js/': [
    {
      text: 'js',
      collapsed: false,
      items: [
        { text: 'js', link: '/pages/js/js' },
        { text: 'base64详解', link: '/pages/js/base64详解' },
        {
          text: '继承',
          collapsed: true,
          items: [
            { text: '寄生式继承', link: '/pages/js/继承/寄生式继承' },
            { text: '寄生组合式继承', link: '/pages/js/继承/寄生组合式继承' }
          ]
        }
      ]
    }
  ]
}
