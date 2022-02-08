<template>
  <div>
    <header-area />

    <router-view />

    <footer-area />
  </div>
</template>

<script>
import headerArea from "@/components/pages/public/widgets/header_menu.vue";
import footerArea from "@/components/pages/public/widgets/main_footer.vue";
export default {
  name: "Home-area",
  components: {
    headerArea,
    footerArea,
  },
};
</script>
