<template>
  <div class="third">
    <h1>third txt</h1>
    <HelloWorld03 msg="third-View" />
  </div>
</template>

<script setup>
import HelloWorld03 from "@/components/HelloWorld03.vue";
</script>

<script>
export default {
  name: "ThirdView",
  components: {
    HelloWorld03,
  },
};
</script>
