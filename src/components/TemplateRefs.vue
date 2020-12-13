<template>
    <!-- 要取得DOM元素的實體，推薦使用ref，確保抓得到此元素 -->
    <input
        v-focus
        v-model="num"
        ref="textInput"
        type="text"
        id="textBar"
        placeholder="input text">
        <!-- v-focus: 在main.js自定義的模板 -->

    <h1 v-price='num'></h1>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
    setup() {
        // 改用自定義模板的方式
        // onMounted(() => {
        //     console.log(textInput);
        //     textInput.value.focus();
        // })
        const textInput = ref(null);
        const num = ref(0)
        return {
            textInput,
            num
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    display: block;
    width: 100%;
    height: 30px;
    background-color: rgb(200, 219, 219);
    pedding-left: 10px;
}
</style>