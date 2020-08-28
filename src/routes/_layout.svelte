<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "style/index.scss";
</style>

{#if segment !== undefined}
  <Nav {segment} />
  <slot />
{:else}
  <slot />
{/if}
