<template>
  <g-tabs :selected="selectedTab" >
    <g-tabs-head>
      <g-tabs-item name="tab1" >
        <g-icon name="settings"></g-icon>
        标题一
      </g-tabs-item>
      <g-tabs-item name="tab2">
        标题二
      </g-tabs-item>
      <g-tabs-item name="tab3" disabled>
        标题三
      </g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="tab1">
        内容一
      </g-tabs-pane>
      <g-tabs-pane name="tab2">
        内容二
      </g-tabs-pane>
    </g-tabs-body>
  </g-tabs>
</template>

<script>
import Tabs from '../../../src/tabs';
import TabsHead from '../../../src/tabs-head';
import TabsBody from '../../../src/tabs-body';
import TabsItem from '../../../src/tabs-item';
import TabsPane from '../../../src/tabs-pane';
import Icon from "../../../src/icon";
export default {
  components:{
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-body': TabsBody,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
    'g-icon':Icon,
  },
  data(){
    return {
      selectedTab: ['tab1','tab2']
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
