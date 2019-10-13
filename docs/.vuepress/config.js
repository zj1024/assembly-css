module.exports = {
  title: 'QuicklyCss',
  description: 'A library for quickly writing CSS by combining classes',
  themeConfig: {
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '文档', link: '/doc/' },
      { text: '更新日志', link: '/blog/' },
      { text: 'Gitee', link: 'https://gitee.com/zj1024/quickly-css' }
    ],
    sidebar: {
      '/guide/': [''],
      '/doc/': [''],
      '/blog/': ['']
    }
  }
}
