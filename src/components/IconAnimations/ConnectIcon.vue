<template>
  <!-- for customIconAnimations.scss -->
  <!-- <svg class="icon icon--connect" aria-hidden="true">
    <title>connect</title>
    <path
      class="connect--inner"
      d="M15 12H17V30H15zM11.33 18.22a7 7 0 010-10.44l1.34 1.49a5 5 0 000 7.46zM20.67 18.22l-1.34-1.49a5 5 0 000-7.46l1.34-1.49a7 7 0 010 10.44z"
    ></path>
    <path
      class="connect--outer"
      d="M8.4 21.8a11 11 0 010-17.6L9.6 5.8a9 9 0 000 14.4zM23.6 21.8l-1.2-1.6a9 9 0 000-14.4l1.2-1.6a11 11 0 010 17.6z"
    ></path>
  </svg> -->

<svg id="icon icon--connect" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <title>connect</title>
  <rect class="connect__line" x="15" y="12" width="2" height="18"/>
  <g class="connect--inner">
    <path class="inner-left" d="M11.33,18.22a7,7,0,0,1,0-10.44l1.34,1.49a5,5,0,0,0,0,7.46Z"/>
    <path class="inner-right" d="M20.67,18.22l-1.34-1.49a5,5,0,0,0,0-7.46l1.34-1.49a7,7,0,0,1,0,10.44Z"/>
  </g>
  <g class="connect--outer">
    <path class="outer-left" d="M8.4,21.8a11,11,0,0,1,0-17.6L9.6,5.8a9,9,0,0,0,0,14.4Z"/>
    <path class="outer-right" d="M23.6,21.8l-1.2-1.6a9,9,0,0,0,0-14.4l1.2-1.6a11,11,0,0,1,0,17.6Z"/>
  </g>
  <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill="none" width="32" height="32"/>
</svg> 
            
</template>
<script>
export default {
  name: "ConnectIcon"
};
</script>
<style lang="scss">
// .icon--connect {
//   height: 32px;
//   width: 32px;
// }
</style>
