<script>
  export let elem;
  export let value;
</script>

<style>
  .minimal {
    background-color: transparent;
    padding: 0;
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 5px solid white;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .varisize {
    width: auto;
    height: auto;
  }
</style>

<input
  bind:this={elem}
  bind:value
  {...$$props}
  spellcheck={!!$$props.spellcheck}
  class="input has-text-light minimal {$$props.class || ''}"
  class:has-text-centered={!!$$props.centered}
  class:varisize={!!$$props.varisize}
  on:keydown />
