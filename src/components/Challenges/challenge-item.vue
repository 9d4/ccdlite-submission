<script>
export default {
  props: ['challenge'],
  methods: {
    chalOnClick(chalcode) {
      const target = `/ch/${chalcode}`;
      this.$router.push(target)
    },
  },
};
</script>

<template>
  <div class="challenge-item" @click="chalOnClick(challenge.code)">
    <b class="title">{{ challenge.name }}</b>
    <p class="description" title="Description">
      {{ challenge.description || 'empty' }}
    </p>
  </div>
</template>

<style lang="scss">
@import './style.scss';
</style>
