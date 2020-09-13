<style>
.minimal {
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 5px solid white;
        padding: 15px;
      }
</style>

<input 
    {...$$props} 
    spellcheck={!!$$props.spellcheck}
    class="input has-text-centered has-text-light minimal {$$props.class || ''}" 
/>
