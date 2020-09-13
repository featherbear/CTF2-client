<style>
  .blueBox {
    background-color: rgba(22, 131, 155, 0.22) !important;
    border-color: rgba(11, 126, 152, 0.22) !important;
  }

  .blueBox:focus {
    box-shadow: none;
  }

  .blueBox::placeholder {
    text-align: center;
    color: #6c6c6c !important;
    font-family: Hack, monospace !important;
  }

</style>

<input 
    {...$$props} 
    spellcheck={!!$$props.spellcheck}
    class="input has-text-centered blueBox {$$props.class || ''}" 
/>
