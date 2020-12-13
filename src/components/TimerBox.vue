<template>
    <h1>{{ num }}</h1>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    setup(props, { emit }) {
        const num = ref(5);
        let timer = null;

        onMounted(()=>{
            timer = setInterval(()=>{
                num.value--;
                if(num.value === 0) {
                    clearInterval(timer);
                    emit("TimeOut", num);
                }
            }, 1000)
        })
        return {
            num
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: #fff;
    font-size: 50px;
    left: 50px;
    top: 50px;
    position: fixed;
}
</style>