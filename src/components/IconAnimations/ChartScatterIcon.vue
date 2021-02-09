<template>
  <svg class="icon--chart--scatter" aria-hidden="true" viewBox="0 0 32 32">
    <title>scatter chart</title>
    <path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z" />
    <circle class="dot--one" cx="10" cy="22" r="2" />
    <circle class="dot--two" cx="14" cy="15" r="2" />
    <circle class="dot--three" cx="14" cy="8" r="2" />
    <circle class="dot--four" cx="22" cy="15" r="2" />
    <circle class="dot--five" cx="26" cy="6" r="2" />
  </svg>
</template>
<script>
export default {
  name: "ChartScatterIcon"
};
</script>
<style lang="scss">
.icon--chart--scatter {
  width: 32px;
  height: 32px;
  transition: 0.2s all;
}
</style>
