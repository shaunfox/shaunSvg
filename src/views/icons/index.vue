<template>
  <div class="icons-container">
    <div
      v-for="item of svgIcons"
      :key="item"
    >
      <div class="icon-item">
        <svg-icon :icon-class="item" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import svgIcons from "./svg-icons";

  export default {
    name: "Icons",
    data() {
      return {
        svgIcons
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .icons-container {
    margin: 10px 20px 0;
    overflow: hidden;

    .icon-item {
      margin: 20px;
      height: 85px;
      text-align: center;
      width: 100px;
      float: left;
      font-size: 30px;
      color: #24292e;
    }

    span {
      display: block;
      font-size: 16px;
      margin-top: 10px;
    }
  }
</style>
