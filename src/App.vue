<template>
 <!-- <PropsTest
    :msg="text"
    :str="str"
    :bool="bool"
    :num="num"
    :arr="arr"
    :obj="obj"
    :handleFunction="handleFunction"
    txt="abcdefg"
  /> -->
  
  <!-- <TitleBar :handleListShow="handleListShow" />
  <ListItem :isOpen="isOpen" /> -->
  <!-- <EmitTest @CallBack="handleCallBackFn" /> -->

  <!-- <EventBack /> -->

  <!-- <TemplateRefs/> -->

  <slots-title>
    <p>Mike</p>
  </slots-title>
  <slots-title>
    <p>Pear</p>
  </slots-title>
  <slots-title>
    <p>Monkey</p>
  </slots-title>


  <!-- <TimerBox @TimeOut="handleTimeOut" /> -->

  <!-- <button @click="handleAnimClick">click</button>
  <transition name="fade">
    <div v-if="isAnim" id="box"></div>
  </transition> -->
</template>

<script>
import PropsTest from '@/components/PropsTest.vue';
import TitleBar from '@/components/TitleBar.vue';
import ListItem from '@/components/ListItem.vue';
import EmitTest from '@/components/EmitTest.vue';
import TimerBox from '@/components/TimerBox.vue';
import EventBack from '@/components/EventBack.vue';
import TemplateRefs from '@/components/TemplateRefs.vue';
import SlotsTitle from '@/components/SlotsTitle.vue';

import { ref, reactive } from 'vue';

export default {
  components: {
    PropsTest,
    TitleBar,
    ListItem,
    EmitTest,
    TimerBox,
    EventBack,
    TemplateRefs,
    SlotsTitle
  },
  setup(){
    // const text = ref("I'm Pear");
    // const str = ref("Hello Pear");
    // const bool = ref(true);
    // const num = ref(123);
    // const arr = reactive(["food", "travel"]);
    // const obj = reactive({ dog: 'Peter', cat: 'Kiki'});
    // const handleFunction = () => {
    //   const a = 1;
    //   const b = 2;
    //   return a + b
    // };

    const isOpen = ref(true);
    const handleListShow = () => {
      isOpen.value = !isOpen.value;
    }
    const handleCallBackFn = (num) => {
      console.log(num);
    }

    const handleTimeOut = (num) => {
      console.log("Time is over.", num.value);
    }

    const isAnim = ref(false);
    const handleAnimClick = () => {
      isAnim.value = !isAnim.value;
    }

    return {
      // text,
      // str,
      // bool,
      // num,
      // arr,
      // obj,
      // handleFunction,
      // isOpen,
      // handleListShow,
      // handleCallBackFn,
      // handleTimeOut,
      // isAnim,
      // handleAnimClick
    }
  }
}
</script>

<style lang="scss">
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease;
// }

// .fade-enter-from {
//   opacity: 0;
// }
// .fade-enter-to {
//   opacity: 1;
// }
// .fade-leave-from {
//   opacity: 1;
// }
// .fade-leave-to {
//   opacity: 0;
// }

.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}

#box {
  height: 100px;
  width: 100px;
  background-color: red;
}
</style>
