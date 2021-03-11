module.exports = {
  base: '/octopus/',
  title: 'Octopus-UI',
  description: '一个简易好用的UI框架',
  head:[
    ['link',{ rel: 'icon', href: 'favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '文档', link: '/install/'},
      {text: 'GitHub', link: 'https://github.com/supernovaY/octopus'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        displayAllHeaders: true,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
        ]
      }
    ]
  }
}
