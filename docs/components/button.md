---
title: Button - 按钮
sidebarDepth: 0
---
# Button - 按钮

## 预览 

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

## 使用方法
```vue
 <g-button>默认按钮</g-button>
<g-button icon="settings"  icon-position="left">默认按钮</g-button>
 <g-button icon="good" icon-position="right">默认按钮</g-button>
 <g-button :loading="true">默认按钮</g-button>
 <g-button disabled>默认按钮</g-button>
```
## 选项
### 属性
#### 1. 图标
通过设置 `icon` 属性在 Button 内嵌入一个 Icon。

通过设置 `icon-position` 属性改变 Icon 在 Button 中的位置，仅支持"left，right"。
> 共有以下icon
> 
> setting
> 
> loading
> 
> left
> 
> right
> 
> download
> 
> good
#### 2. 加载中状态
通过设置 `loading` 属性为true，可以让按钮处于加载中状态。

#### 3. 不可用状态
通过设置 `disabled` 属性，可将按钮设置为不可用状态。

## 按钮组
## 预览

<ClientOnly>
  <button-group-demos></button-group-demos>
</ClientOnly>

## 使用方法

``` vue
<migu-button-group>
<migu-button icon="left">上一页</migu-button>
<migu-button icon="setting">上一页</migu-button>
<migu-button icon="right" icon-position="right">下一页</migu-button>
</migu-button-group>
```
