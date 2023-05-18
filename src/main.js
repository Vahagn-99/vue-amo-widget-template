// import css
import './assets/amocrm.css';
// import vue componets
import { createApp } from 'vue';
import App from './App.vue';
import store from './stores/index';

const app = createApp(App);
app.use(store);
app.mount('#app');
