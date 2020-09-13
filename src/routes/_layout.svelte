

<script>
  // import Nav from "../components/Nav.svelte";

  export let segment;
  console.log("layout PROPS", $$props)

</script>

<style lang="scss" global>
  @import "../ui/style/index.scss";
</style>

{#if [undefined, 'invite'].includes(segment) }
  <slot />
{:else}
  <!-- <Nav {segment} /> -->
  Layout
  <slot />
{/if}
