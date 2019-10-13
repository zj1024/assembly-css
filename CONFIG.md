# 配置

[TOC]
<!-- # quickly-css -->

## 1. 初始化scss

### 1.1 [_reset.scss](https://gitee.com/zj1024/quickly-css/blob/master/lib/_reset.scss)
```
浏览器默认样式格式化
```

### 1.2 [_style.scss](https://gitee.com/zj1024/quickly-css/blob/master/lib/_style.scss)
```html
<!-- 
  浏览器设置html字体
  兼容window，mac，mobile
 -->
html {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
```

### 1.3 [_sundry.scss](https://gitee.com/zj1024/quickly-css/blob/master/lib/_sundry.scss)

```html
<!-- 杂项 -->
overlay 覆盖物
layout-auto 居中显示
```

## 2. 全局颜色配置

### 2.1 [_var.scss](https://gitee.com/zj1024/quickly-css/blob/master/lib/_var.scss)

```html
<!-- 
  white black grey green blue yellow red
  上述属性，文字，背景，边框所用色值是一样的
 -->
文字颜色：
white: #ffffff
black: #333
grey: #888
green: #19be6b
blue: #61c3ff
yellow: #ff9900
red: #f35958
title: #17233d
content: #515a6e
disabled: #c5c8ce

背景颜色：
white: #ffffff
black: #333
grey: #888
green: #19be6b
blue: #61c3ff
yellow: #ff9900
red: #f35958

边框颜色：
white: #ffffff
black: #333
grey: #888
green: #19be6b
blue: #61c3ff
yellow: #ff9900
red: #f35958

box-sizes
<!-- 用于padding，margin -->
取值范围
-20, -15, -12, -10, -8, -6, -5, -4, -3, -2, -1,
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
12, 15, 20, 25, 30, 35, 40, 50, 60, 80, 100

sizes
<!-- 用于宽高 -->
取值范围
1, 5, 10, 12, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90,100,
120, 150, 200, 250, 300, 400, 500, 600, 800, 1000, 1200

font-size
取值范围
px: 1-80
em: 20
rem: 20

line-height
取值范围
0-20
px: 0-100
```
