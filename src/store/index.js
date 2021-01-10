/* eslint-disable*/

import Vue from 'vue';
import Vuex from 'vuex';

import blogs from '@/store/modules/blogs';

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    blogs,
  },
});

export { store };
