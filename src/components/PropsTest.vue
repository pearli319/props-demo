<template>
    <div>
        <h1>{{ props.str }}</h1>
        <h1>{{ props.bool }}</h1>
        <h1>{{ props.num }}</h1>
        <h1>{{ props.arr[0] }}</h1>
        <h1>{{ props.obj.cat }}</h1>
        <h1>{{ props.handleFunction() }}</h1>
        <h1>{{ props.txt }}</h1>
        
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: [String, Number],
            default: "Hello Pear"
        },
        str: {
            type: String,
            default: "My name is Pear"
        },
        bool: {
            type: Boolean,
            default: true
        },
        num: {
            type: Number,
            default: 456
        },
        arr: {
            type: Array,
            default: () => ["like", "hobby"]
        },
        obj: {
            type: Object,
            default: () => ({})
        },
        handleFunction: {
            type: Function,
            default: () => {}
        },
        txt: {
            type: String,
            default: "no bind"
        }
    },
    setup(props) {
        return {
            props
        }
    }
    
}
</script>

<style lang="scss" scoped>
h1 {
    color: blue;
}
</style>