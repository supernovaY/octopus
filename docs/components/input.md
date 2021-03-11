---
title: Input - 输入框
sidebarDepth: 0
---
# Input - 输入框
## 预览

<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

## 使用方法
```vue
<div>
<g-input value="默认内容"></g-input>
<g-input disabled value="禁用"></g-input>
<g-input readonly value="只读"></g-input>
<g-input error="错误信息"></g-input>
</div>
```
## 属性
>Input 组件的选项有： disabled, readonly, error。 并且支持数据的双向绑定。

#### 1. disabled
表示是否禁用状态，默认为 false，禁用。

#### 2. readonly
表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，readonly 可以被选中，不能修改。

#### 3. error
给 Input 添加 error 属性，会在该 input 右侧显示一个提示图标与文字，用于提示。

#### 4. v-model
支持v-model双向绑定

<ClientOnly>
  <input-demos2></input-demos2>
</ClientOnly>

### 使用方法
---
``` vue
<template>
<div>
  <g-input v-model="value"></g-input>
  {{value}}
</div>
</template>
<script>
  export default {
    data(){
      return {
        value:'双向绑定'
      }
    }
  }
</script>
```
