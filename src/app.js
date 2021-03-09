import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import OctopusButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', OctopusButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
    el: '#app',
    data: {
            loading1: false,
            loading2: true,
            loading3: false,
            message: 'hi'
    },
    methods: {
        inputChange (e) {
            console.log(e)
        }
    }
})
