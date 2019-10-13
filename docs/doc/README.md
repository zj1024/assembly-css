# 文档

> ⚠️文档的源码部分除了当前展示用的css类外, 额外增加的没有提及的css类纯粹是为了展示好看。

> 由于设计规则简单, 建议粗读之后接入自己的项目中体验, 或直接阅读源码

<style src="../.vuepress/public/assembly-css.css"></style>

## background


**设置背景颜色**

`.bg-`
- 参数: white / black / grey / green / blue / yellow / red

<div class="flex flex-wrap">
  <div class="bg-white w-p-33 h-100 flex a-center j-center">.bg-white</div>
  <div class="bg-black w-p-33 h-100 flex a-center j-center text-white">.bg-black</div>
  <div class="bg-grey w-p-33 h-100 flex a-center j-center">.bg-grey</div>
  <div class="bg-green w-p-33 h-100 flex a-center j-center">.bg-green</div>
  <div class="bg-blue w-p-33 h-100 flex a-center j-center">.bg-blue</div>
  <div class="bg-yellow w-p-33 h-100 flex a-center j-center">.bg-yellow</div>
  <div class="bg-red w-p-33 h-100 flex a-center j-center">.bg-red</div>
</div>

```html
<div class="flex flex-wrap">
  <div class="bg-white w-p-33 h-100 flex a-center j-center">.bg-white</div>
  <div class="bg-black w-p-33 h-100 flex a-center j-center text-white">.bg-black</div>
  <div class="bg-grey w-p-33 h-100 flex a-center j-center">.bg-grey</div>
  <div class="bg-green w-p-33 h-100 flex a-center j-center">.bg-green</div>
  <div class="bg-blue w-p-33 h-100 flex a-center j-center">.bg-blue</div>
  <div class="bg-yellow w-p-33 h-100 flex a-center j-center">.bg-yellow</div>
  <div class="bg-red w-p-33 h-100 flex a-center j-center">.bg-red</div>
</div>
```

## border

**设置边框**

`.border`

<div class="border text-center p-5 fs-14 w-100">边框</div>

```html
<div class="border text-center p-5 fs-14 w-100">边框</div>
```

---

`.b-v[-dotted / -dashed]`

<div class="flex j-between">
  <div class="b-v text-center p-10 fs-14">.b-v 上下边框</div>
  <div class="b-v-dotted text-center p-10 fs-14 m-l-10">.b-v-dotted 上下边框dotted</div>
  <div class="b-v-dashed text-center p-10 fs-14 m-l-10">.b-v-dashed 上下边框dashed</div>
</div>

```html
<div class="flex j-between">
  <div class="b-v text-center p-10 fs-14">.b-v 上下边框</div>
  <div class="b-v-dotted text-center p-10 fs-14 m-l-10">.b-v-dotted 上下边框dotted</div>
  <div class="b-v-dashed text-center p-10 fs-14 m-l-10">.b-v-dashed 上下边框dashed</div>
</div>
```

---

`.b-h[-dotted / -dashed]`

<div class="flex j-between">
  <div class="b-h text-center p-10 fs-14">.b-h 左右边框</div>
  <div class="b-h-dotted text-center p-10 fs-14 m-l-10">.b-h-dotted 左右边框dotted</div>
  <div class="b-h-dashed text-center p-10 fs-14 m-l-10">.b-h-dashed 左右边框dashed</div>
</div>

```html
<div class="flex j-between">
  <div class="b-h text-center p-10 fs-14">.b-h 左右边框</div>
  <div class="b-h-dotted text-center p-10 fs-14 m-l-10">.b-h-dotted 左右边框dotted</div>
  <div class="b-h-dashed text-center p-10 fs-14 m-l-10">.b-h-dashed 左右边框dashed</div>
</div>
```

---

`.b-double`

<div class="b-double text-center p-5 fs-14 w-100">两条线边框</div>

```html
<div class="b-double text-center p-5 fs-14 w-100">两条线边框</div>
```

---

`.b-w-thin`

<div class="b-w-thin text-center p-5 fs-14 w-100">半像素边框</div>

```html
<div class="b-w-thin text-center p-5 fs-14 w-100">半像素边框</div>
```

---

`.b-round`

<div class="b-round w-80 h-80 bg-grey flex a-center j-center">圆形</div>

```html
<div class="b-round w-80 h-80 bg-grey flex a-center j-center">圆形</div>
```

---

`.b-none`

<div class="b-none text-center p-5 fs-14 w-100">清除边框</div>

```html
<div class="b-none text-center p-5 fs-14 w-100">清除边框</div>
```

---

`.b-`
- 参数 l[-dotted / dashed] / r[-dotted / dashed] / t[-dotted / dashed] / b[-dotted / dashed]

<div class="flex j-between">
  <div class="b-l p-5">.b-l 左边框</div>
  <div class="b-r p-5">.b-r 右边框</div>
  <div class="b-t p-5">.b-t 上边框</div>
  <div class="b-b p-5">.b-b 下边框</div>
</div>

<div class="flex j-between m-t-20">
  <div class="b-l-dotted p-5">.b-l-dotted 左边框</div>
  <div class="b-r-dotted p-5">.b-r-dotted 右边框</div>
  <div class="b-t-dotted p-5">.b-t-dotted 上边框</div>
  <div class="b-b-dotted p-5">.b-b-dotted 下边框</div>
</div>

<div class="flex j-between m-t-20">
  <div class="b-l-dashed p-5">.b-l-dashed 左边框</div>
  <div class="b-r-dashed p-5">.b-r-dashed 右边框</div>
  <div class="b-t-dashed p-5">.b-t-dashed 上边框</div>
  <div class="b-b-dashed p-5">.b-b-dashed 下边框</div>
</div>

```html
<div class="flex j-between">
  <div class="b-l p-5">.b-l 左边框</div>
  <div class="b-r p-5">.b-r 右边框</div>
  <div class="b-t p-5">.b-t 上边框</div>
  <div class="b-b p-5">.b-b 下边框</div>
</div>

<div class="flex j-between m-t-20">
  <div class="b-l-dotted p-5">.b-l-dotted 左边框</div>
  <div class="b-r-dotted p-5">.b-r-dotted 右边框</div>
  <div class="b-t-dotted p-5">.b-t-dotted 上边框</div>
  <div class="b-b-dotted p-5">.b-b-dotted 下边框</div>
</div>

<div class="flex j-between m-t-20">
  <div class="b-l-dashed p-5">.b-l-dashed 左边框</div>
  <div class="b-r-dashed p-5">.b-r-dashed 右边框</div>
  <div class="b-t-dashed p-5">.b-t-dashed 上边框</div>
  <div class="b-b-dashed p-5">.b-b-dashed 下边框</div>
</div>
```

---

`.border-`
- 参数 dotted / dashed

<div class="flex">
  <div class="border-dotted p-5">.border-dotted</div>
  <div class="border-dashed p-5 m-l-20">.border-dashed</div>
</div>

```html
<div class="flex">
  <div class="border-dotted p-5">.border-dotted</div>
  <div class="border-dashed p-5 m-l-20">.border-dashed</div>
</div>
```

---

`.b-`
- 参数 从0到20的值, 包括0和20

<div class="flex">
  <div class="border b-10 p-5">.b-10</div>
  <div class="border b-20 p-5 m-l-20">.b-20</div>
</div>

```html
<div class="flex">
  <div class="border b-10 p-5">.b-10</div>
  <div class="border b-20 p-5 m-l-20">.b-20</div>
</div>
```

---

`.b-radius-` 或者 `.b-r-`
- 参数 从0到20的值, 包括0和20

<div class="flex">
  <div class="bg-grey text-center text-white b-r-10 p-5 w-100 h-20">.b-r-10</div>
  <div class="bg-grey text-center text-white b-radius-20 p-5 w-100 h-20 m-l-20">.b-radius-20</div>
</div>

```html
<div class="flex">
  <div class="bg-grey text-center text-white b-r-10 p-5 w-100 h-20">.b-r-10</div>
  <div class="bg-grey text-center text-white b-radius-20 p-5 w-100 h-20 m-l-20">.b-radius-20</div>
</div>
```


## box

`.m-auto` 居中显示

<div class="m-auto w-200 bg-grey text-center">123</div>

```html
<div class="m-auto w-200 bg-grey text-center">123</div>
```

`.m-` 居左显示

- 参数  -20 / -15 / -12 / -10 / -8 / -6 / -5 / -4 / -3 / -2 / -1,
  0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <span class="bg-grey p-5 m-l-0">.m-l-0</span>
  <span class="bg-grey p-5 m-l-10">.m-l-10</span>
</div>

```html
<div>
  <span class="bg-grey p-5 m-l-0">.m-l-0</span>
  <span class="bg-grey p-5 m-l-10">.m-l-10</span>
</div>
```

---

`.p-` 或者 `.padding-`

- 参数 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <span class="bg-grey p-5 m-l-0">.m-l-0</span>
  <span class="bg-grey p-10 m-l-10">.m-l-10</span>
  <span class="bg-grey p-20 m-l-10">.m-l-10</span>
</div>

```html
<div>
  <span class="bg-grey p-5 m-l-0">.m-l-0</span>
  <span class="bg-grey p-10 m-l-10">.m-l-10</span>
  <span class="bg-grey p-20 m-l-10">.m-l-10</span>
</div>
```

---

`.m-h-` / `.m-v-` 横向 / 纵向margin间距

- 参数 -20 / -15 / -12 / -10 / -8 / -6 / -5 / -4 / -3 / -2 / -1,
  0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <div class="bg-grey m-v-0 m-h-0">.m-v-0 .m-h-0</div>
  <div class="bg-grey m-v-10 m-h-10">.m-v-10 .m-h-10</div>
  <div class="bg-grey m-v-20 m-h-20">.m-v-20 .m-h-20</div>
</div>

```html
<div>
  <div class="bg-grey m-v-0 m-h-0">.m-v-0 .m-h-0</div>
  <div class="bg-grey m-v-10 m-h-10">.m-v-10 .m-h-10</div>
  <div class="bg-grey m-v-20 m-h-20">.m-v-20 .m-h-20</div>
</div>
```

---

`.p-h-` / `.p-v-` 横向 / 纵向padding间距

- 参数 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <div class="bg-grey p-h-0 p-v-0 m-t-10">.p-h-0 .p-v-0</div>
  <div class="bg-grey p-h-10 p-v-10 m-t-10">.p-h-10 .p-v-10</div>
  <div class="bg-grey p-h-20 p-v-20 m-t-10">.p-h-20 .p-v-20</div>
</div>

```html
<div>
  <div class="bg-grey p-h-0 p-v-0 m-t-10">.p-h-0 .p-v-0</div>
  <div class="bg-grey p-h-10 p-v-10 m-t-10">.p-h-10 .p-v-10</div>
  <div class="bg-grey p-h-20 p-v-20 m-t-10">.p-h-20 .p-v-20</div>
</div>
```

---

`.m-[direction]-[size]` / `.p-[direction]-[size]`

> 注意 `.p-[direction]-[size]`中的参数从0开始, padding没有负值

- 参数 direction: t / r / b / l (分别对应 top / right / bottom / left)
- 参数 size: -20 / -15 / -12 / -10 / -8 / -6 / -5 / -4 / -3 / -2 / -1,
  0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <div class="bg-grey m-l-0 p-l-0 m-t-10">.m-l-0 .p-l-0</div>
  <div class="bg-grey m-l-10 p-l-10 m-t-10">.m-l-10 .p-l-10</div>
  <div class="bg-grey m-l-20 p-l-20 m-t-10">.m-l-20 .p-l-20</div>
</div>

```html
<div>
  <div class="bg-grey m-l-0 p-l-0 m-t-10">.m-l-0 .p-l-0</div>
  <div class="bg-grey m-l-10 p-l-10 m-t-10">.m-l-10 .p-l-10</div>
  <div class="bg-grey m-l-20 p-l-20 m-t-10">.m-l-20 .p-l-20</div>
</div>
```

---

`.m-[direction]-[size]` 或 `.l-[direction]-[size]`

- 参数 direction: t / r / b / l (分别对应 top / right / bottom / left)

- 参数 size: 从0到10的值, 包括0和10

<div>
  <div class="bg-grey p-l-2vw p-t-2vw">.p-l-2vw .p-t-2vw</div>
  <div class="bg-grey p-l-2vh p-t-2vh m-t-10">.p-l-2vh .p-t-2vh</div>
  <div class="bg-grey m-l-2vw m-t-2vw">.m-l-2vw .m-t-2vw</div>
  <div class="bg-grey m-l-2vh m-t-2vh">.m-l-2vh .m-t-2vh</div>
</div>

```html
<div>
  <div class="bg-grey p-l-2vw p-t-2vw">.p-l-2vw .p-t-2vw</div>
  <div class="bg-grey p-l-2vh p-t-2vh m-t-10">.p-l-2vh .p-t-2vh</div>
  <div class="bg-grey m-l-2vw m-t-2vw">.m-l-2vw .m-t-2vw</div>
  <div class="bg-grey m-l-2vh m-t-2vh">.m-l-2vh .m-t-2vh</div>
</div>
```


## cursor

`.cursor-`

- 参数 default / auto / crosshair / pointer / move / text / wait / help

<div class="flex flex-wrap">
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-default">default</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-auto">auto</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-crosshair">crosshair</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-pointer">pointer</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-move">move</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-text">text</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-wait">wait</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-help">help</div>
</div>

```html
<div class="flex flex-wrap">
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-default">default</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-auto">auto</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-crosshair">crosshair</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-pointer">pointer</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-move">move</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-text">text</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-wait">wait</div>
  <div class="bg-grey w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-help">help</div>
</div>
```

## display

`.d-`

- 参数 inherit / none / inline / inline-block / block / table / inline-table / table-cell

```html
<div class="d-inherit"></div>
<div class="d-none"></div>
<div class="d-inline"></div>
<div class="d-inline-block"></div>
```

## flex

`.flex`

```html
<div class="flex"></div>
```

`.j-` justify-content设置值

- 参数 start / end / center / between / around

```html
<div class="j-between"></div>
```

`.a-` align-items设置值

- 参数 start / center / end

```html
<div class="a-center"></div>
```

`.flex-` flex-wrap设置值

- 参数 nowrap / wrap / wrap-reverse

```html
<div class="flex-wrap"></div>
```

`.flex-` flex设置值

- 参数 1 / 2 / 3

```html
<div class="flex-1"></div>
```

`.flex-s-` flex-shrink设置值

- 参数 1 / 2 / 3

```html
<div class="flex-s-1"></div>
```

`.flex-g-` flex-grow设置值

- 参数 1 / 2 / 3

```html
<div class="flex-g-1"></div>
```

`a-c-` align-content设置值

- 参数 start / end / center / between / around / stretch

```html
<div class="a-c-center"></div>
```

`a-s-` align-self设置值

- 参数 start / end / auto / center / baseline / stretch

```html
<div class="a-s-center"></div>
```

## float

`.clearfixed` 清除浮动

`.pull-` 浮动

- 参数 left / right

<div class="clearfixed bg-grey">
  <div class="bg-grey p-10 pull-left">.pull-left</div>
  <div class="bg-grey p-10 pull-right">.pull-right</div>
</div>

```html
<div class="clearfixed">
  <div class="pull-left">.pull-left</div>
  <div class="pull-right">.pull-right</div>
</div>
```

## font-size

`fs-em-` 或者 `fs-rem-`

- 参数 从0到10 包括0和10

- 支持浮点数 `0.0`到`5.9`, 从`6-10`只有`.5`的值, 比如6.5, 7.5, 8.5, 9.5, 10.5

<div>
  <span class="fs-em-1 bg-grey">.fs-em-1</span>
  <span class="fs-em-2 bg-grey m-l-10">.fs-em-2</span>
  <span class="fs-em-2 bg-grey m-l-10">.fs-em-3</span>
</div>

<div class="m-t-10">
  <span class="fs-rem-1 bg-grey">.fs-rem-1</span>
  <span class="fs-rem-2 bg-grey m-l-10">.fs-rem-2</span>
  <span class="fs-rem-2 bg-grey m-l-10">.fs-rem-3</span>
</div>

```html
<div>
  <span class="fs-em-1 bg-grey">.fs-em-1</span>
  <span class="fs-em-2 bg-grey m-l-10">.fs-em-2</span>
  <span class="fs-em-2 bg-grey m-l-10">.fs-em-3</span>
</div>

<div class="m-t-10">
  <span class="fs-rem-1 bg-grey">.fs-rem-1</span>
  <span class="fs-rem-2 bg-grey m-l-10">.fs-rem-2</span>
  <span class="fs-rem-2 bg-grey m-l-10">.fs-rem-3</span>
</div>
```

`fs-`

- 参数 从12到80, 包括12和80

<div>
  <span class="fs-12 bg-grey">.fs-12</span>
  <span class="fs-14 bg-grey m-l-10">.fs-14</span>
  <span class="fs-16 bg-grey m-l-10">.fs-16</span>
  <span class="fs-18 bg-grey m-l-10">.fs-18</span>
  <span class="fs-22 bg-grey m-l-10">.fs-22</span>
  <span class="fs-80 bg-grey m-l-10">.fs-80</span>
</div>

```html
<div>
  <span class="fs-12 bg-grey">.fs-12</span>
  <span class="fs-14 bg-grey m-l-10">.fs-14</span>
  <span class="fs-16 bg-grey m-l-10">.fs-16</span>
  <span class="fs-18 bg-grey m-l-10">.fs-18</span>
  <span class="fs-22 bg-grey m-l-10">.fs-22</span>
  <span class="fs-80 bg-grey m-l-10">.fs-80</span>
</div>
```

`.fs-rem-[size]px` 像素的值是基于375宽度来计算(主流的设计稿宽度)

- 参数 从12到80 包括12和80

> 1.1.0 新增

> ⚠️ 该class类是结合[lib-flexible](https://github.com/amfe/lib-flexible)库来使用, flexible.js会根据视口的大小动态改变根节点的font-size值

该节点在375宽会自动计算成12px:
```html
<span class="fs-rem-12px bg-grey">.fs-rem-12px</span>
```


```html
<div>
  <span class="fs-rem-12px bg-grey">.fs-rem-12px</span>
  <span class="fs-rem-14px bg-grey m-l-10">.fs-rem-14px</span>
  <span class="fs-rem-16px bg-grey m-l-10">.fs-rem-16px</span>
  <span class="fs-rem-18px bg-grey m-l-10">.fs-rem-18px</span>
  <span class="fs-rem-22px bg-grey m-l-10">.fs-rem-22px</span>
  <span class="fs-rem-80px bg-grey m-l-10">.fs-rem-80px</span>
</div>
```

## font-weight

`.bold` 字体加粗

---

`.normal` 字体正常

---

`.lighter` 字体更亮

---

`fw-` 字体宽度, 数值表示

- 参数 100, 200, 300, 400, 500, 600, 700, 800, 900

<div>
  <div class="bg-greey fw-100 m-t-20">.fw-100 数值表示字体的粗度</div>
  <div class="bg-greey fw-200 m-t-20">.fw-200 数值表示字体的粗度</div>
  <div class="bg-greey fw-300 m-t-20">.fw-300 数值表示字体的粗度</div>
  <div class="bg-greey fw-400 m-t-20">.fw-400 数值表示字体的粗度</div>
  <div class="bg-greey fw-500 m-t-20">.fw-500 数值表示字体的粗度</div>
  <div class="bg-greey fw-600 m-t-20">.fw-600 数值表示字体的粗度</div>
  <div class="bg-greey fw-700 m-t-20">.fw-700 数值表示字体的粗度</div>
  <div class="bg-greey fw-800 m-t-20">.fw-800 数值表示字体的粗度</div>
  <div class="bg-greey fw-900 m-t-20">.fw-900 数值表示字体的粗度</div>
</div>

```html
<div>
  <div class="bg-greey fw-100 m-t-20">.fw-100 数值表示字体的粗度</div>
  <div class="bg-greey fw-200 m-t-20">.fw-200 数值表示字体的粗度</div>
  <div class="bg-greey fw-300 m-t-20">.fw-300 数值表示字体的粗度</div>
  <div class="bg-greey fw-400 m-t-20">.fw-400 数值表示字体的粗度</div>
  <div class="bg-greey fw-500 m-t-20">.fw-500 数值表示字体的粗度</div>
  <div class="bg-greey fw-600 m-t-20">.fw-600 数值表示字体的粗度</div>
  <div class="bg-greey fw-700 m-t-20">.fw-700 数值表示字体的粗度</div>
  <div class="bg-greey fw-800 m-t-20">.fw-800 数值表示字体的粗度</div>
  <div class="bg-greey fw-900 m-t-20">.fw-900 数值表示字体的粗度</div>
</div>
```

## line-height

`.l-h-`

> 单位为em

- 参数 从0到20的值, 包括0和20

- 支持浮点数 从`0.0` 到 `5.9` 另外有 `6.5`, `7.5`, `8.5`

<div class="h-50 bg-grey flex">
  <div class="l-h-1 bg-grey">.l-h-1</div>
  <div class="l-h-2 bg-grey m-l-10">.l-h-2</div>
</div>

<div class="h-200 bg-grey flex">
  <div class="l-h-1_2 bg-grey">.l-h-1_2</div>
  <div class="l-h-2_5 bg-grey m-l-10">.l-h-2_5</div>
  <div class="l-h-5_9 bg-grey m-l-10">.l-h-5_9</div>
  <div class="l-h-6_5 bg-grey m-l-10">.l-h-6_5</div>
  <div class="l-h-7_5 bg-grey m-l-10">.l-h-7_5</div>
  <div class="l-h-8_5 bg-grey m-l-10">.l-h-8_5</div>
</div>

```html
<div class="h-50 bg-grey flex">
  <div class="l-h-1 bg-grey">.l-h-1</div>
  <div class="l-h-2 bg-grey m-l-10">.l-h-2</div>
</div>
<!-- 浮点数 -->
<div class="h-200 bg-grey flex">
  <div class="l-h-1_2 bg-grey">.l-h-1_2</div>
  <div class="l-h-2_5 bg-grey m-l-10">.l-h-2_5</div>
  <div class="l-h-5_9 bg-grey m-l-10">.l-h-5_9</div>
  <div class="l-h-6_5 bg-grey m-l-10">.l-h-6_5</div>
  <div class="l-h-7_5 bg-grey m-l-10">.l-h-7_5</div>
  <div class="l-h-8_5 bg-grey m-l-10">.l-h-8_5</div>
</div>
```

`.lh-`

> 单位为px

- 参数 从0到100的值, 包括0和100

<div class="h-50 bg-grey flex">
  <div class="lh-10 bg-grey">.lh-10</div>
  <div class="lh-20 bg-grey m-l-10">.lh-20</div>
  <div class="lh-50 bg-grey m-l-10">.lh-50</div>
</div>

```html
<div class="h-50 bg-grey flex">
  <div class="lh-10 bg-grey">.lh-10</div>
  <div class="lh-20 bg-grey m-l-10">.lh-20</div>
  <div class="lh-50 bg-grey m-l-10">.lh-50</div>
</div>
```

## link

`.link-`

- 参数 white / black / grey / green / blue / yellow / red / title / content / disabled

<div class="link-white w-100 h-50 bg-black">.link-white</div>
<div class="link-black w-100 m-t-10">.link-black</div>
<div class="link-grey w-100 m-t-10">.link-grey</div>
<div class="link-green w-100 m-t-10">.link-green</div>
<div class="link-blue w-100 m-t-10">.link-blue</div>
<div class="link-yellow w-100 m-t-10">.link-yellow</div>
<div class="link-title w-100 m-t-10">.link-title</div>
<div class="link-content w-100 m-t-10">.link-content</div>
<div class="link-disabled w-100 m-t-10">.link-disabled</div>

```html
<div class="link-white w-100 h-50 bg-black">.link-white</div>
<div class="link-black w-100 m-t-10">.link-black</div>
<div class="link-grey w-100 m-t-10">.link-grey</div>
<div class="link-green w-100 m-t-10">.link-green</div>
<div class="link-blue w-100 m-t-10">.link-blue</div>
<div class="link-yellow w-100 m-t-10">.link-yellow</div>
<div class="link-title w-100 m-t-10">.link-title</div>
<div class="link-content w-100 m-t-10">.link-content</div>
<div class="link-disabled w-100 m-t-10">.link-disabled</div>
```

## overflow

`.o-` 和 `.o-x-` 和 `.o-y-`

- 参数 visible / hidden / scroll / auto / inherit

```html
<div class="o-visible">o-visible</div>
<div class="o-hidden">.o-hidden</div>
<div class="o-y-scroll">.o-y-scroll</div>
```

`scroll-touch` 在移动IOS设备上平滑滚动

```html
<div class="o-y-scroll scroll-touch">.scroll-touch</div>
```

## position

`.static / .relative / .absolute / .fixed / .sticky`

<div class="w-full h-100 bg-grey relative o-hidden o-y-scroll">
  <div class="h-200">
    <div class="sticky top-0 w-100 h-0 bg-grey z-index-100 m-t-20">
      .sticky
    </div>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
  </div>
</div>

```html
<div class="w-full h-100 bg-grey relative o-hidden o-y-scroll">
  <div class="h-200">
    <div class="sticky top-0 w-100 h-0 bg-grey z-index-100 m-t-20">
      .sticky
    </div>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
  </div>
</div>
```

<div class="relative bg-grey w-full h-200 m-t-10">
  <div class="absolute bg-grey w-100 h-100 left-10 top-10">
    absolute
  </div>
</div>

```html
<div class="relative bg-grey w-full h-200">
  <div class="absolute bg-grey w-100 h-100 left-10 top-10">
    absolute
  </div>
</div>
```

`z-index-`

- 参数 -20 / -15 / -12 / -10 / -8 / -6 / -5 / -4 / -3 / -2 / -1,
  0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

```html
<div class="z-index-10"></div>
```

## size

`.w-full`

<div class="w-full bg-grey">.w-full</div>

```html
<div class="w-full bg-grey">.w-full</div>
```

`.h-full`

<div class="h-50">
  <div class="h-full bg-grey">.h-full</div>
</div>

```html
<div class="h-50">
  <div class="h-full bg-grey">.h-full</div>
</div>
```

`.w-p-`

- 参数 从0到99的值, 包括0和99

<div class="bg-grey">
  <div class="w-p-10 bg-grey">.w-p-10</div>
  <div class="w-p-20 m-t-10 bg-grey">.w-p-20</div>
  <div class="w-p-30 m-t-10 bg-grey">.w-p-30</div>
  <div class="w-p-40 m-t-10 bg-grey">.w-p-40</div>
  <div class="w-p-99 m-t-10 bg-grey">.w-p-99</div>
</div>

```html
<div class="bg-grey">
  <div class="w-p-10 bg-grey">.w-p-10</div>
  <div class="w-p-20 m-t-10 bg-grey">.w-p-20</div>
  <div class="w-p-30 m-t-10 bg-grey">.w-p-30</div>
  <div class="w-p-40 m-t-10 bg-grey">.w-p-40</div>
  <div class="w-p-99 m-t-10 bg-grey">.w-p-99</div>
</div>
```

`.h-p-`

- 参数 参数 从0到99的值, 包括0和99

<div class="h-100 bg-grey flex">
  <div class="h-p-20 bg-grey">.h-p-20</div>
  <div class="h-p-30 m-l-10 bg-grey">.h-p-30</div>
  <div class="h-p-40 m-l-10 bg-grey">.h-p-40</div>
  <div class="h-p-50 m-l-10 bg-grey">.h-p-50</div>
  <div class="h-p-60 m-l-10 bg-grey">.h-p-60</div>
  <div class="h-p-70 m-l-10 bg-grey">.h-p-70</div>
  <div class="h-p-80 m-l-10 bg-grey">.h-p-80</div>
  <div class="h-p-90 m-l-10 bg-grey">.h-p-90</div>
</div>

```html
<div class="h-100 bg-grey flex">
  <div class="h-p-20 bg-grey">.h-p-20</div>
  <div class="h-p-30 m-l-10 bg-grey">.h-p-30</div>
  <div class="h-p-40 m-l-10 bg-grey">.h-p-40</div>
  <div class="h-p-50 m-l-10 bg-grey">.h-p-50</div>
  <div class="h-p-60 m-l-10 bg-grey">.h-p-60</div>
  <div class="h-p-70 m-l-10 bg-grey">.h-p-70</div>
  <div class="h-p-80 m-l-10 bg-grey">.h-p-80</div>
  <div class="h-p-90 m-l-10 bg-grey">.h-p-90</div>
</div>
```

`.h-` 和 `.w-`

- 参数 0 到 30, 包括0和30; 40 / 50 / 60 / 70 / 80 / 90 / 100,
  120 / 150 / 200 / 250 / 300 / 400 / 500 / 600 / 800 / 1000 / 1200

<div class="flex">
.w-1:
  <div class="w-1 bg-grey"></div>
</div>
<div class="flex">
.w-11:
  <div class="w-11 bg-grey"></div>
</div>
<div class="w-100 bg-grey">.w-100</div>
<div class="w-120 bg-grey">.w-120</div>
<div class="w-150 bg-grey">.w-150</div>
<div class="w-200 bg-grey">.w-200</div>
<div class="w-250 bg-grey">.w-250</div>
<div class="w-300 bg-grey">.w-300</div>
<div class="w-500 bg-grey">.w-500</div>

```html
<div class="flex">
.w-1:
  <div class="w-1 bg-grey"></div>
</div>
<div class="flex">
.w-11:
  <div class="w-11 bg-grey"></div>
</div>
<div class="w-100 bg-grey">.w-100</div>
<div class="w-120 bg-grey">.w-120</div>
<div class="w-150 bg-grey">.w-150</div>
<div class="w-200 bg-grey">.w-200</div>
<div class="w-250 bg-grey">.w-250</div>
<div class="w-300 bg-grey">.w-300</div>
<div class="w-500 bg-grey">.w-500</div>
```

`max-w-` 和 `max-h` 和 `min-w` 和 `min-h`

- 参数 40 / 50 / 60 / 70 / 80 / 90 / 100,
  120 / 150 / 200 / 250 / 300 / 400 / 500 / 600 / 800 / 1000 / 1200

```html
<div class="max-w-100"></div>
<div class="max-h-100"></div>
<div class="min-w-100"></div>
<div class="min-h-100"></div>
```

`w-[size]vw` 和 `w-[size]vh` 和 `h-[size]vw` 和 `h-[size]vh`

<div class="w-10vw bg-grey">w-10vw</div>
<div class="w-10vh bg-grey m-t-10">w-10vh</div>
<div class="h-10vw bg-grey m-t-10">h-10vw</div>
<div class="h-10vh bg-grey m-t-10">h-10vh</div>

```html
<div class="w-10vw bg-grey">w-10vw</div>
<div class="w-10vh bg-grey m-t-10">w-10vh</div>
<div class="h-10vw bg-grey m-t-10">h-10vw</div>
<div class="h-10vh bg-grey m-t-10">h-10vh</div>
```

## text-align

`.text-`

- 参数  left / right / center / justify

<div class="flex j-between">
  <p class="w-200 bg-grey text-left">.text-left</p>
  <p class="w-200 bg-grey m-l-10 text-right">.text-right</p>
  <p class="w-200 bg-grey m-l-10 text-center">.text-center</p>
  <p class="w-200 bg-grey m-l-10 text-justify">.text-justify</p>
</div>

## text-color

`.text-`

- 参数  white / black / grey / green / blue / yellow / red / title / content / disabled

<div class="flex flex-wrap">
  <div class="text-white bg-black p-10">.text-white</div>
  <div class="text-black p-10">.text-black</div>
  <div class="text-grey p-10">.text-grey</div>
  <div class="text-green p-10">.text-green</div>
  <div class="text-blue p-10">.text-blue</div>
  <div class="text-yellow p-10">.text-yellow</div>
  <div class="text-red p-10">.text-red</div>
  <div class="text-title p-10">.text-title</div>
  <div class="text-content p-10">.text-content</div>
  <div class="text-disabled p-10">.text-disabled</div>
</div>

```html
<div class="flex flex-wrap">
  <div class="text-white bg-black p-10">.text-white</div>
  <div class="text-black p-10">.text-black</div>
  <div class="text-grey p-10">.text-grey</div>
  <div class="text-green p-10">.text-green</div>
  <div class="text-blue p-10">.text-blue</div>
  <div class="text-yellow p-10">.text-yellow</div>
  <div class="text-red p-10">.text-red</div>
  <div class="text-title p-10">.text-title</div>
  <div class="text-content p-10">.text-content</div>
  <div class="text-disabled p-10">.text-disabled</div>
</div>
```

## vertical-align

`.v-a-`

- 参数 baseline / sub / super / top / text-top / middle / bottom / text-bottom / inherit

<div class="flex flex-wrap">
  <div class="bg-grey">
    <img class="v-a-baseline" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-baseline
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-sub" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-sub
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-super" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-super
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-top" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-top
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-text-top" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-text-top
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-middle" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-middle
  </div>
  <div class="m-t-10 bg-grey">
    <img class="v-a-bottom" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-bottom
  </div>
  <div class="m-t-10 m-l-10 bg-grey">
    <img class="v-a-text-bottom" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-text-bottom
  </div>
</div>

```html
<div class="flex flex-wrap">
  <div class="bg-grey">
    <img class="v-a-baseline" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-baseline
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-sub" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-sub
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-super" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-super
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-top" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-top
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-text-top" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-text-top
  </div>
  <div class="m-l-10 bg-grey">
    <img class="v-a-middle" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-middle
  </div>
  <div class="m-t-10 bg-grey">
    <img class="v-a-bottom" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-bottom
  </div>
  <div class="m-t-10 m-l-10 bg-grey">
    <img class="v-a-text-bottom" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32" />.v-a-text-bottom
  </div>
</div>
```

## visbility

`.visible`

<div class="visible">.visible</div>
<div class="hidden">.hidden</div>

```html
<div class="visible">.visible</div>
<div class="hidden">.hidden</div>
```


## white-space

`.text-`

- 参数 normal / nowrap / pre / pre-wrap / pre-line

<div class="flex flex-nowrap">
  <div class="w-100 bg-grey text-nowrap">
   .text-nowrap this is test
  </div>
  <div class="w-100 bg-grey m-l-100 text-normal">
   .text-normal this is test
  </div>
  <div class="w-100 bg-grey m-l-20 text-pre">
   .text-pre
   this is test
  </div>
  <div class="w-100 bg-grey m-l-20 text-pre-wrap">
   .text-pre-wrap
   this is test
  </div>
  <div class="w-100 bg-grey m-l-20 text-pre-line">
   .text-pre-line
   this is test
  </div>
</div>

```html
<div class="flex flex-nowrap">
  <div class="w-100 bg-grey text-nowrap">
   .text-nowrap this is test
  </div>
  <div class="w-100 bg-grey m-l-100 text-normal">
   .text-normal this is test
  </div>
  <div class="w-100 bg-grey m-l-20 text-pre">
   .text-pre
   this is test
  </div>
  <div class="w-100 bg-grey m-l-20 text-pre-wrap">
   .text-pre-wrap
   this is test
  </div>
  <div class="w-100 bg-grey m-l-20 text-pre-line">
   .text-pre-line
   this is test
  </div>
</div>
```

## 杂项

`.overflow-omit` 单行文本溢出省略

`.overflow-` 多行文本溢出省略

- 参数 1 / 2 / 3

<div class="w-100 m-t-10 bg-grey overflow-1">1行文本溢出省略</div>
<div class="w-100 m-t-10 bg-grey overflow-2">2行文本溢出省略, 2行文本溢出省略</div>
<div class="w-100 m-t-10 bg-grey overflow-3">3行文本溢出省略, 3行文本溢出省略, 3行文本溢出省略</div>

```html
<div class="w-100 m-t-10 bg-grey overflow-1">1行文本溢出省略</div>
<div class="w-100 m-t-10 bg-grey overflow-2">2行文本溢出省略, 2行文本溢出省略</div>
<div class="w-100 m-t-10 bg-grey overflow-3">3行文本溢出省略, 3行文本溢出省略, 3行文本溢出省略</div>
```