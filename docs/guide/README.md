# 指南

## 介绍

通过组合 class 方式快速书写 css 的库.

开发 quickly-css 的目的就是为了在写 css 时简化开发的步骤, 传统开发方式将 css 单独拆成文件引入, `Vue`中在 template 文件最下方书写, `React`中可以通过把 css All in js. 上述的方案都是通过 DOM 中定义 class 来连接 css 与 html.

我们通过一个例子-`三栏布局`来直观感受 quickly-css 带来的便捷:

**传统开发方式**

```css
.wrapper {
  display: flex;
}
.left,
.right {
  width: 200px;
  background: #19be6b;
}
.center {
  flex: 1;
  background: #61c3ff;
}
```

```html
<section class="wrapper">
  <div class="left">left</div>
  <div class="center">content</div>
  <div class="right">right</div>
</section>
```

**渲染结果**

<ClientOnly>
  <style>
  .wrapper {
    display: flex;
  }
  .left,
  .right {
    width: 200px;
    background: #19be6b;
  }
  .center {
    flex: 1;
    background: #61c3ff;
  }
  </style>
  <section class="wrapper">
    <div class="left">left</div>
    <div class="center">content</div>
    <div class="right">right</div>
  </section>
</ClientOnly>

**使用 quickly-css**

```html
<section class="flex j-between">
  <div class="w-200 bg-green">left</div>
  <div class="flex-1 bg-blue">content</div>
  <div class="w-200 bg-green">right</div>
</section>
```

**渲染结果**

<ClientOnly>
  <style src="../.vuepress/public/quickly-css.css"></style>
  <section class="flex j-between">
    <div class="w-200 bg-green">left</div>
    <div class="flex-1 bg-blue">content</div>
    <div class="w-200 bg-green">right</div>
  </section>
</ClientOnly>

没错, 在书写过程中直接跳过了连接html和css的环节, 取而代之的是引入我们提前写好的库, 通过class类名之间的组合来生成样式, 而`quickly-css`就是具备了组合类产生样式的能力.

在设计quickly-css时, 选取了最常用的19个大类别, `background`, `border`, `box`, `cursor`, `display`, `flex`, `float`, `font-size`, `font-weight`, `line-height`, `link`, `overflow`, `position`, `size`, `text-align`, `text-color`, `vertical-align`, `visibility`, `white-space`, 在[文档](/doc/)中都会详细说明

## 安装

### CDN 引入

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quickly-css/dist/quickly-css.css">
```

生产环境使用压缩版本

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quickly-css/dist/quickly-css.min.css">
```

### NPM 引入

```Shell
# 最新稳定版
$ npm install quickly-css
```

```js
import 'quickly-css/lib/index.scss'
```


## 目录结构

```js
.
├── dist // 打包输出的文件
│   ├── quickly-css.css
│   └── quickly-css.min.css
├── lib
│   ├── _reset.scss // 格式化css
│   ├── _style.scss // 全局样式
│   ├── _sundry.scss // 杂项样式
│   ├── _var.scss // 全局scss变量
│   ├── background.scss
│   ├── border.scss
│   ├── box.scss // margin padding
│   ├── cursor.scss // 鼠标样式相关
│   ├── display.scss
│   ├── flex.scss
│   ├── float.scss
│   ├── font-size.scss
│   ├── font-weight.scss
│   ├── index.scss
│   ├── line-height.scss
│   ├── link.scss
│   ├── overflow.scss
│   ├── position.scss
│   ├── size.scss // width height
│   ├── text-align.scss
│   ├── text-color.scss
│   ├── vertical-align.scss
│   ├── visibility.scss
│   └── white-space.scss
```

## 构建

使用scss + gulp构建, 简单快捷, 配置文件在 `/gulpfile.js`

## 下一步

开始了解quickly-css提供的样式[文档](/doc/)