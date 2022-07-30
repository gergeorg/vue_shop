import Vue from 'vue';
import App from './App.vue';

// import { first, second } from './file1';
// import file2 from './file2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// alert(first);
// alert(second.message);

// file2();
