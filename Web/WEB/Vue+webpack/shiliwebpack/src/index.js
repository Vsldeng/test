import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
import Vue from 'vue'
import App from './components/App.vue'


$(function () {
  $('li:even').css('backgroundColor', 'lightblue')
  $('li:odd').css('backgroundColor', 'green')
})

new Vue({
  el: '#app',
  components: {
    App,
  },
  template: '<App/>'
})