<template>
  <div
    class="bx--col-sm-1 bx--col-md-2 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4"
  >
    <cv-tile
      kind="clickable"
      aria-label="develop APIs and products"
      theme="light"
      class="info-tile"
    >
      <div class="top">
        <component :is="icon" />
        <p class="tile__heading">{{ title }}</p>
      </div>
      <p class="tile__info">
        {{ info }}
      </p>
    </cv-tile>
  </div>
</template>
<script>
export default {
  name: "InfoTile",
  props: {
    title: String,
    info: String,
    icon: Object
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/_carbon-utils";
.info-tile {
  display: flex;
  padding: $spacing-06;
  flex-direction: column;
  justify-content: space-between;
  height: 232px;
}
.tile__heading {
  @include carbon--type-style("productive-heading-03");
  margin-top: $spacing-04;
}
.tile__info {
  @include carbon--type-style("body-long-01");
}
</style>
