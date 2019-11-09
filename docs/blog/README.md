#  更新日志

## V1.1.1

- 减小npm下载体积

## V1.1.0
- 增加对flex样式的扩充
- 增加vw, wh 单位的支持
- 增加flexible字体大小的支持

### 增加对flex样式的扩充

1. 增加了flex-grow的支持

范围值为`0 - 3`

例:
```css
.flex-g-1 {
  flex-grow: 1
}
```

2. 增加了align-content的支持

范围值 `flex-start, flex-end, center, space-between, space-around, stretch`

例:
```css
.a-c-start {
  align-content: flex-start;
}
```

3. 增加了align-self的支持

范围值 `auto, flex-start, flex-end, center, baseline, stretch`

例:
```css
.a-s-start {
  align-self: flex-start;
}
```

### 增加vw, wh 单位的支持
1. margin, padding 可以使用vw, wh 单位

范围值 `1-10`

```css
.m-l-10vh {
  margin-left: 10vh;
}
.m-l-10vw {
  margin-left: 10vw;
}
.p-l-10vh {
  padding-left: 10vh;
}
.p-l-10vw {
  padding-left: 10vw;
}
```

2. width, height 可以使用vw, wh单位

范围值 `1-100`
```css
.w-10vw {
  width: 10vw;
}
.w-10vh {
  width: 10vh;
}
.h-10vw {
  height: 10vw;
}
.h-10vh {
  height: 10vh;
}
```

### 增加flexible字体大小的支持

配合[flexible.js](https://github.com/amfe/lib-flexible) 在375宽度视口下定义rem像素大小

范围值 `12 - 80`
```css
.fs-rem-16px {
  font-size: 0.4266666667rem;
}
```