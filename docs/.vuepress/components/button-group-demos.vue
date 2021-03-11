<template>
  <div>
    <bg-button>
      <g-button icon="left">上一页</g-button>
      <g-button>...</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </bg-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      'g-button': Button,
      'bgButton': ButtonGroup
    }
  }
</script>
