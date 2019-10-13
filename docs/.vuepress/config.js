module.exports = {
  title: 'AssemblyCss',
  description: 'A library for quickly writing CSS by combining classes',
  themeConfig: {
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '文档', link: '/doc/' },
      { text: '更新日志', link: '/blog/' },
      { text: 'Github', link: 'https://github.com/zj1024/assembly-css' }
    ],
    sidebar: {
      '/guide/': [''],
      '/doc/': [''],
      '/blog/': ['']
    }
  },
  base: '/assembly-css/'
}
