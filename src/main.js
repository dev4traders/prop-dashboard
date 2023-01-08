import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./rounter";
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
createApp(App).use(router).mount('#app')
