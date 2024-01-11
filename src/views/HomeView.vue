<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <div01></div01> -->
  </div>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { ref } from "vue";
const count = ref(2);
</script>

<script>
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  // name: "div-01",
  // components: {
  //   div01,
  // },
};
</script>
