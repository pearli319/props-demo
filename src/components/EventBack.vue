<template>
    <a href="javascript:;" @click="handleClickFn(100, $event)">Click</a>
</template>

<script>
export default {
    setup(props) {
        const handleClickFn = (num, e) => { // 事件作為參數一定放在最後一項
            console.log("click", e, num);
        }
        return {
            handleClickFn,
        }

    }
}
</script>

<style lang="scss">
a {
    font-size: 50px;
    color: #fff;
}
</style>