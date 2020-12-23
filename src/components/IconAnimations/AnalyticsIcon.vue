<template>
  <svg class="icon icon--analytics" aria-hidden="true" viewBox="0 0 32 32">
    <title>scatter chart</title>
    <path class="axes" d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z" />
    <circle class="circle circle--one" cx="10" cy="22" r="2" />
    <circle class="circle circle--two" cx="14" cy="15" r="2" />
    <circle class="circle circle--three" cx="14" cy="8" r="2" />
    <circle class="circle circle--four" cx="22" cy="15" r="2" />
    <circle class="circle circle--five" cx="26" cy="6" r="2" />
  </svg>
</template>
<script>
export default {
  name: "AnalyticsIcon"
};
</script>
<style lang="scss">
.icon--analytics {
  width: 32px;
  height: 32px;
  transition: 0.2s all;
}
</style>
