<template>
  <PageHeader />
  <!-- 헤더 컴포넌트 -->
  <router-view />
  <!-- 페이지 이동이 표시될 곳 -->
  <PageFooter />
  <!-- 푸터 컴포넌트 -->
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
  name: "App",
  components: {
    PageFooter,
    PageHeader,
  },
};
</script>
