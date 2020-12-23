<template>
  <button class="demo-button" v-on:click="changeAnimation">
    {{ animationType }}
  </button>
</template>
<script>
export default {
  name: "DemoButton",
  props: {
    animationType: String
    // isSelected: Boolean
  },
  methods: {
    changeAnimation: function(ev) {
      this.$emit("updateAnimation", this.animationType);
      // ev.target.setAttribute('aria-selected', true);
      console.log(ev.target);
    }
  }
};
</script>
<style lang="scss">
.demo-button {
  background-color: #0f62fe;
  border: 2px solid #fff;
  color: #fff;
  padding: 16px 100px 16px 16px;
  margin: 10px;
  font-size: 16px;
  transition: 0.05s all;
  will-change: background-color, border;
}

.demo-button:hover {
  background-color: #0353e9;
  cursor: pointer;
}

.demo-button:focus {
  border: 3px solid #0f62fe;
  box-shadow: inset 0 0 0 1px #fff;
}

// .demo-button--selected,
// .demo-button--selected:hover {
//   background-color:#002d9c;
//   cursor: default;
// }
</style>
