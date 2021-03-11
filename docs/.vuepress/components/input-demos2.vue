<template>
  <div>
  <g-input v-model="value"></g-input>
  <br>
  {{value}}
  </div>
</template>
<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'g-input': Input
    },
    data(){
      return {
        value:'双向绑定'
      }
    }
  }
</script>

