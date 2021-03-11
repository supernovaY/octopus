---
title: Layout - 布局
sidebarDepth: 0
---
# Layout - 布局
## 预览
### 示例1
---
<ClientOnly>
  <layout-demos></layout-demos>
</ClientOnly>

### 示例2
---
<ClientOnly>
  <layout-demos2></layout-demos2>
</ClientOnly>

### 示例3
---
<ClientOnly>
  <layout-demos3></layout-demos3>
</ClientOnly>

### 使用方法

``` vue
<div>
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
</div>
```
  ``` vue
  <div>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </g-sider>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
</div>
```
``` vue
<div>
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
  </div>
```
## 属性
提供基础布局，样式自定义。

## 组件概述
* i-layout ：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

* i-header ：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

* i-sider ：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

* i-content ：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

* i-footer ：底部布局，其下可嵌套任何元素，只能放在 Layout 中。
