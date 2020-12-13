<template>
    <h1>{{ num }}</h1>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    emits: {
        CallBack: (num)=>{
            console.log('子元件', num)
            if(num.value === 0) {
                alert("相等");
            } else {
                alert("不等");
            }
        }
    },
    setup(props, context) {
        const num = ref(0);

        onMounted(()=> {
            context.emit("CallBack", num);
            console.log(num.value);
        })
        return {
            num
        }
    }
}
</script>

<style lang="scss">
    
</style>

