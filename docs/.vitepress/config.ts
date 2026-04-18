import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

export default defineConfig({
  title: 'front-blog',
  description: 'just test vuepress',
  base: '/front-blog/',
  head: [
    ['link', { rel: 'icon', href: '/github-avatar.jpeg' }]
  ],
  themeConfig: {
    logo: '/github-avatar.jpeg',
    // 顶部导航栏
    nav,
    // 侧边栏
    sidebar,
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  },
  markdown: {
    lineNumbers: false
  }
})
