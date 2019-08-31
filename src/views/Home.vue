<template>
  <div class="home">
    <header-section/>
    <div class="overlay shadow-lg">
      <overlay/>
    </div>
    <footer-section/>
  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/header.vue";
import overlay from "@/components/overlay.vue";
import footerSection from "@/components/footer.vue";

export default {
  name: 'home',
  components: {
    headerSection,
    overlay,
    footerSection
  }
};
</script>

<style lang="scss">
  .overlay{
    background-color: white;
    margin: -150px 30px 0px 30px;
  }
</style>
