<template>
  <div class="about">
    <h1>about txt</h1>
    <HelloWorld02 msg="about-view" />
  </div>
</template>

<script setup>
import HelloWorld02 from "@/components/HelloWorld02.vue";
</script>

<script>
export default {
  name: "AboutView",
  components: {
    HelloWorld02,
  },
};
</script>
