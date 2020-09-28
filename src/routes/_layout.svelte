<script context="module">
  export function preload() {
    return { ready: global.BACKEND_READY };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  const { error } = $page;

  export let segment;
  export let ready;

  import ErrorLayout from "./_error.svelte";

  // import Nav from "../ui/components/Nav.svelte";
</script>

<style lang="scss" global>
  @import "../ui/style/index.scss";
</style>

{#if error || !ready || [undefined, 'invite', 'debug'].includes(segment)}
  {#if !ready}
    <ErrorLayout
      status="Not ready"
      error={{ message: 'Server still loading' }} />
  {:else}
    <slot />
  {/if}
{:else}
  <!-- <Nav {segment} /> -->
  <slot />
{/if}
