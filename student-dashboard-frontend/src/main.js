import './assets/main.css'
import 'tailwindcss/tailwind.css';
import axios from 'axios';

import { createApp } from 'vue'
import App from './App.vue'
Vue.prototype.$http = axios;

const app = createApp(App);

app.mount('#app');
