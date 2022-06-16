import './bootstrap';

import { createApp } from 'vue';

const app = createApp({});

import example from './components/example.vue';

app.component('example', example);

app.mount("#app");


