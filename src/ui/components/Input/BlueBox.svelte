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

<style lang="scss">
  .blueBox {
    color: whitesmoke;
    background-color: rgba(22, 131, 155, 0.22) !important;
    border-color: rgba(11, 126, 152, 0.22) !important;
    
    &:focus {
      box-shadow: none;
    }

    &::placeholder {
      text-align: center;
      color: whitesmoke;
      font-family: Hack, monospace !important;
    }
  }
</style>

<input
  bind:this={elem}
  bind:value
  {...$$props}
  spellcheck={!!$$props.spellcheck}
  class="input has-text-centered blueBox {$$props.class || ''}"
  on:keydown />
