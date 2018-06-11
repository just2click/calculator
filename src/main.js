import Vue from 'vue'
import App from './App.vue'

import { keyboardLayout } from './settings/keyboard';
import { findInJaggedArray } from './utilities/common';

import { store } from './store/store';
import { mapActions } from 'vuex';

export const eventBus = new Vue();

new Vue({
  el: '#app',
  mounted: function() {
    let vm = this;
    window.addEventListener('keyup', (ev) => {
      vm.onKeyup(ev);
    });
  },
  beforeDestroy: () => {
    window.removeEventListener('keyup', this.onKeyup);
  },
  methods: {
    ...mapActions([
        'numberClick',
        'setOperation',
        'execute'
      ]),
      onKeyup: function (ev) {
        const key = findInJaggedArray(keyboardLayout, ev.key);
        switch (key.type) {
          case 'number':
              this.$store.dispatch('numberClick', key.value);
              break;
          case 'operation':
              this.$store.dispatch('setOperation', key.value);
              break;
          case 'execute':
              this.$store.dispatch('execute', key.value);
              break;
      }
      }
  },
  store,
  render: h => h(App)
})
