<script setup>
import chals from "../../data/challenges"
import ChallengeItem from "./challenge-item.vue";
</script>

<template>
  <div class="challenge-list">
    <ChallengeItem v-for="chal in chals" :key="chal.code" :challenge="chal"/>
  </div>
</template>

<style lang="scss">
@import './style.scss';
</style>
