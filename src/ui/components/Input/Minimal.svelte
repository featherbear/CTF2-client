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
    outline: none;
    border: none;
    border-bottom: 5px solid white;
    padding: 15px;
  }
</style>

<input
  {...$$props}
  spellcheck={!!$$props.spellcheck}
  class="input has-text-centered has-text-light minimal {$$props.class || ''}" />
