import Vue from 'vue';
import Vuex from 'vuex';

import current from './modules/current';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        current
    }
});