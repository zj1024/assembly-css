<div style="text-align:center;"><img src="https://zj1024.github.io/assembly-css/images/logo.png" /></div>

![MIT](https://img.shields.io/badge/license-MIT-green) ![SIZE](https://img.shields.io/badge/size-60%20kb-blue) ![VERSION](https://img.shields.io/badge/version-1.1.0-orange)

<div style="text-align:center; font-weight: bold; font-size: 30px;">AssemblyCss</div>

<div style="text-align:center;">A library for quickly writing CSS by combining classes</div>

---

## Introduction

QuicklyCSS is a CSS library built with `sass`, `gulp` and provides basic CSS style classes to avoid writing repetitive CSS styles on large projects.

**overthink** It is not recommended for small projects because of the small amount of code and the size of the library

## Documentation

English | [中文](https://github.com/zj1024/assembly-css/blob/master/README.md)

## Installation

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/assembly-css/dist/assembly-css.css">
```

The production environment use a compressed version

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/assembly-css/dist/assembly-css.min.css">
```

### NPM

```Shell
$ npm install assembly-css
```

```js
import 'assembly-css/lib/index.scss'
```

### Quickly develop a three-column layout

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/assembly-css/dist/assembly-css.css">
<section class="flex j-between">
  <div class="w-200 bg-green">left</div>
  <div class="flex-1 bg-blue">content</div>
  <div class="w-200 bg-green">right</div>
</section>
```

Result

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/assembly-css/dist/assembly-css.css">
<section class="flex j-between">
  <div class="w-200 bg-green">left</div>
  <div class="flex-1 bg-blue">content</div>
  <div class="w-200 bg-green">right</div>
</section>

## Advantages ##

- Easy to install or directly introduce CSS files through NPM, ready to use, especially in large projects
- The code style logic is clearer
- Easy maintenance during team development, changing styles only requires changing classes on the DOM, avoiding the confusion of hierarchical nested DOM styles

## Issues

You can ask questions here [issues](https://github.com/zj1024/assembly-css/issues)

## Last

If you are interested in this project, welcome to PR