import Vue from 'vue'
import App from './App.vue'

import { handleKeyboardEvent } from './utilities/common';

import { store } from './store/store';
import { mapActions } from 'vuex';

export const eventBus = new Vue();

new Vue({
  el: '#app',
  mounted: function() {
    let vm = this;
    window.addEventListener('keydown', (ev) => {
      vm.onKeyDown(ev);
    });
  },
  beforeDestroy: () => {
    window.removeEventListener('keydown', this.onKeyDown);
  },
  methods: {
    ...mapActions([
        'numberClick',
        'setOperation',
        'execute'
      ]),
      onKeyDown: function (ev) {
        handleKeyboardEvent(ev, this.$store);
      }
  },
  store,
  render: h => h(App)
})
