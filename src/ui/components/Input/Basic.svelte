<script>
  export let elem;
  export let value;

</script>

<input
  bind:this={elem}
  bind:value
  {...$$props}
  spellcheck={!!$$props.spellcheck}
  class="input has-text-centered has-text-light {$$props.class || ''}"
  on:keydown />
