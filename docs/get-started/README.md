---
title: 快速上手
sidebarDepth: 10
---

# 快速上手
快速上手
## 引入必要资源
``` vue
<script>
import {Button} from "octopus-ui";
import "octopus-ui/dist/index.css";
</script>
```
## 注册组件
``` vue
<script>  
export default {
name: "ComponentName",
components: {
"g-button": Button,
    },
}
</script>
```
## 使用代码

``` vue
<template>
  <div>
    <g-button :loading="true">默认按钮</g-button>
  </div>
</template>
```

示例代码：

<ClientOnly>
  <button-demos2></button-demos2>
</ClientOnly>
