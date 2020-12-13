import { createApp } from 'vue'
import App from './App.vue'
import { numPrice } from '@/lib/tools.js'

const app = createApp(App)


// 定義模板語法
app.directive('focus', {
    mounted(el) {
        console.log(el);
        el.focus();
    }
    
});

app.directive('price', {
    mounted(el, binding) {
        const p = numPrice(binding.value)
        console.log(el, binding.value);
        el.innerHTML = p;
    },
    updated(el, num) {
        const renderP = numPrice(num.value);
        el.innerHTML = renderP;
    },
    
});


app.mount('#app')
