<p align="center">
  <a href="https://zj1024.github.io/assembly-css/">
    <img width="200" src="https://zj1024.github.io/assembly-css/images/logo.png">
  </a>
</p>

<h1 align="center">AssemblyCss</h1>

<div align="center">

通过组合class方式快速书写css的库

![MIT](https://img.shields.io/badge/license-MIT-green) ![SIZE](https://img.shields.io/badge/size-60%20kb-blue) ![VERSION](https://img.shields.io/badge/version-1.1.1-orange)

</div>

---

## 介绍

assembly-css 是一个通过`sass`, `gulp` 构建完成的css库, 提供了基础的css样式类, 在开发大型项目避免书写重复的css样式。

**过多的考虑** 在小型项目中由于代码量不大, 加上库的体积, 反而不建议使用

## 文档

中文 | [English](https://github.com/zj1024/assembly-css/blob/master/README-en.md)

## 安装

### CDN 引入

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/assembly-css/dist/assembly-css.css">
```

生产环境使用压缩版本

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/assembly-css/dist/assembly-css.min.css">
```

### NPM 引入

```Shell
# 最新稳定版
$ npm install assembly-css
```

```js
import 'assembly-css/lib/index.scss'
```

### 快速开发三栏布局

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/assembly-css/dist/assembly-css.css">
<section class="flex j-between">
  <div class="w-200 bg-green">left</div>
  <div class="flex-1 bg-blue">content</div>
  <div class="w-200 bg-green">right</div>
</section>
```

你可以直接拷贝到自己的demo文件里尝试下运行效果, 也可以点击[这里](https://zj1024.github.io/assembly-css/)查看写好的例子

## 优点 ##

- 方便快捷 通过npm安装或直接引入css文件, 随时可用, 在大型项目中表现尤为出色
- 代码样式逻辑更加清晰
- 易维护 在团队开发过程中, 修改样式只需要更改DOM上的类即可, 避免了DOM逐级嵌套样式的混乱

## 提问

你可以在[issues](https://github.com/zj1024/assembly-css/issues)直接提问

## 最后

如果你对这个项目有兴趣, 欢迎PR