<script>
  // import Nav from "../ui/components/Nav.svelte";
  export let segment;
</script>

<style lang="scss" global>
  @import "../ui/style/index.scss";
</style>

{#if [undefined, 'invite', 'debug'].includes(segment) }
  <slot />
{:else}
  <!-- <Nav {segment} /> -->
  <slot />
{/if}
