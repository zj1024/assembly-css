---
home: true
title: QuicklyCss
heroText: QuicklyCss
heroImage: /images/logo.png
tagline: 通过组合class方式快速书写css的库
actionText: 快速上手 ➡
actionLink: /guide/
meta:
  - name: description
    content: 通过组合class方式快速书写css的库, A library for quickly writing CSS by combining classes
  - name: keywords
    content: quickly-css, css
features:
- title: 方便快捷
  details: 通过npm安装或直接引入css文件, 随时可用, 在大型项目中表现尤为出色
- title: 简单构建
  details: 通过 gulp + scss 的构建，快捷构建出打包后的css文件, 一处引入, 全局使用。
- title: 易于维护
  details: 在团队开发过程中, 修改样式只需要更改DOM上的类即可, 避免了DOM逐级嵌套样式的混乱
footer: MIT Licensed | Copyright © 2019-present 京宇jingyu
---

### 快速开发三栏布局

**使用 quickly-css**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quickly-css/dist/quickly-css.css">
<section class="flex j-between">
  <div class="w-200 bg-green">left</div>
  <div class="flex-1 bg-blue">content</div>
  <div class="w-200 bg-green">right</div>
</section>
```

**渲染结果**

<ClientOnly>
  <style src="./.vuepress/public/quickly-css.css"></style>
  <section class="flex j-between">
    <div class="w-200 bg-green">left</div>
    <div class="flex-1 bg-blue">content</div>
    <div class="w-200 bg-green">right</div>
  </section>
</ClientOnly>