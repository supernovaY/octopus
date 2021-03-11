<template>
  <div>
  <g-input value="默认内容"></g-input>
  <g-input disabled value="禁用"></g-input>
  <g-input readonly value="只读"></g-input>
  <g-input error="错误信息"></g-input>
  </div>
</template>
<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'g-input': Input
    }
  }
</script>
