<template>
  <div>
    <g-button :loading="true">默认按钮</g-button>
  </div>
</template>
<script>
import Button from '../../../src/button'

export default {
  components: {
    'g-button': Button
  }
}
</script>
