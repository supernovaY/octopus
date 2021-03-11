<template>
  <div>
    <g-button @click="$toast('点击弹出$toast提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出$toast提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出$toast提示', {position:'bottom'})">下方弹出</g-button>
  </div>
</template>
<script>
import Vue from 'vue'
import GButton from '../../../src/button'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
  components: { GButton }
}
</script>

<style scoped>
.octopus-toast {
  z-index: 30 ;
}
* {
  box-sizing: border-box;
}
</style>
