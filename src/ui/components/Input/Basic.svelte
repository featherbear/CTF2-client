<script>
  export let elem;
  export let value;

  export let autofocus = false;
  import { onMount } from 'svelte';
  if (autofocus) {
    onMount(() => {
      elem.focus();
    });
  }
</script>

<style>
  input {
    font-family: Hack, monospace !important;
  }
</style>

<input
  bind:this={elem}
  bind:value
  {...$$props}
  spellcheck={!!$$props.spellcheck}
  class="input has-text-centered has-text-light {$$props.class || ''}"
  on:keydown />
