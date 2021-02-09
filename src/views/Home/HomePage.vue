<template>
  <div>
    <cv-content class="main-content">
      <div class="bx--grid bx--grid--full-width landing-page">
        <div class="bx--row row--one">
          <h1 class="landing-page__heading">Icon Animations Demo</h1>
          <div class="header">
            <h2>Select an icon animation effect</h2>
            <h3>then hover over the tiles to view it:</h3>
            <div class="demo-buttons">
              <DemoButton
                animationType="Custom"
                @updateAnimation="updateAnimation($event)"
                :class="{ selectedButton: animationType == 'Custom' }"
                aria-selected="false"
              />
              <DemoButton
                animationType="Pop"
                @updateAnimation="updateAnimation($event)"
                :class="{ selectedButton: animationType == 'Pop' }"
                aria-selected="false"
              />
              <DemoButton
                animationType="Twist"
                @updateAnimation="updateAnimation($event)"
                :class="{ selectedButton: animationType == 'Twist' }"
                aria-selected="false"
              />
              <DemoButton
                animationType="Spin"
                @updateAnimation="updateAnimation($event)"
                :class="{ selectedButton: animationType == 'Spin' }"
                aria-selected="false"
              />
              <DemoButton
                animationType="None"
                @updateAnimation="updateAnimation($event)"
                :class="{ selectedButton: animationType == 'None' }"
                aria-selected="false"
              />
            </div>
          </div>
        </div>
        <div class="bx--row row--two">
          <div
            class="bx--col bx--grid bx--grid--full-width bx--grid--condensed"
          >
            <div class="bx--row row--tiles-container">
              <InfoTile
                v-for="(tile, index) in tileDetails"
                :title="tile.title"
                :info="tile.info"
                :key="index"
                :icon="tile.icon"
                class="animated-tile"
                :class="$data.animationType"
              />
            </div>
          </div>
        </div>
      </div>
    </cv-content>
  </div>
</template>
<script>
import InfoTile from "../../components/InfoTile";
import DemoButton from "../../components/DemoButton";
import { tileDetails } from "../../data/tileDetails.js";

export default {
  name: "LandingPage",
  components: {
    InfoTile,
    DemoButton
  },
  data: function() {
    return {
      tileDetails,
      animationType: "Custom"
    };
  },
  methods: {
    updateAnimation(ev) {
      this.$data.animationType = ev;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/_carbon-utils";
@import "../../styles/customIconAnimations";
@import "../../styles/blanketAnimations";
@import "./_mixins.scss";

.selectedButton,
.selectedButton:hover {
  background-color: #002d9c;
}

.main-content {
  width: calc(100% - #{$spacing-09});
  height: 150vh;
  margin-left: $spacing-09;
  @include gray-background;
}

.row--one {
  display: flex;
  flex-direction: column;
}

.landing-page__heading {
  @include carbon--type-style("productive-heading-06");
  font-weight: 400;
  text-align: center;
  padding-top: 96px;
  font-size: 40px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 24px;
  font-weight: 555;
  margin: 32px 0 2px 0;
}

h3 {
  font-size: 20px;
  margin-bottom: 32px;
}

.demo-buttons {
  margin-bottom: 96px;
}

.row--two {
  padding-bottom: $spacing-07;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.row--tiles-container {
  width: 100%;
  margin: 0 !important;
}

.animated-tile {
  opacity: 0;
  transform: scale(0.6);
  animation: 0.2s fade-in forwards cubic-bezier(0.2, 0, 1, 0.9);
  will-change: opacity, transform;
}

.animated-tile:nth-of-type(1),
.animated-tile:nth-of-type(5) {
  animation-delay: 0.2s;
}

.animated-tile:nth-of-type(2),
.animated-tile:nth-of-type(6) {
  animation-delay: 0.3s;
}

.animated-tile:nth-of-type(3),
.animated-tile:nth-of-type(7) {
  animation-delay: 0.4s;
}

.animated-tile:nth-of-type(4),
.animated-tile:nth-of-type(8) {
  animation-delay: 0.5s;
}

@keyframes fade-in {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
