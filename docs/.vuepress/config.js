module.exports = {
  title: 'front-blog',
  description: 'just test vuepress',
  base: '/front-blog/',
  themeConfig: {
    logo: '/github-avatar.jpeg', // 首页左上角logo
    // 顶部导航栏
    nav: [
      // 格式一：直接跳转内部页面
      { text: '首页', link: '/'},
      // 格式二： 下拉菜单
      {
        text: '分类',
        ariaLabel: '分类', // 用于识别的label
        items: [
          { text: 'html', link: '/pages/html/html.md' },
          { text: 'css', link: '/pages/css/css.md' },
          { text: 'js', link: '/pages/js/js.md' },
        ]
      },
      // 格式三： 跳转到外部网页
      { text: 'github', link: 'https:github.com'}
    ],
    // 侧边导航栏, 根据当前路径是否匹配，自行判断显示/隐藏
    sidebar: {
      '/pages/html/': [
        // 'html', 'websocket', 'tags'
        {
          title: 'html', // 一级菜单
          collapsable: false, // 是否折叠, false-展开，true-折叠
          sidebarDepth: 1,
          children: [
            'html',
            'websocket',
            'tags'

          ]
        }
      ],
      '/pages/js/': [
        {
          title: 'js', // 一级菜单
          collapsable: false, // 是否折叠, false-展开，true-折叠
          sidebarDepth: 1,
          children: [
            'js',
            'base64详解',
            {
              title: '继承', // 一级菜单
              children: [
                '寄生式继承',
                '寄生组合式继承'
              ]
            }
          ]
        }
      ]
    }
  }

}