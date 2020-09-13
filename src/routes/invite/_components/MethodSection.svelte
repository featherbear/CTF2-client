<script>
  import { createEventDispatcher } from "svelte";
  import STATE from "./STATE";
  const dispatch = createEventDispatcher();
</script>

<h1 class="is-size-3 has-text-light">Are you new here?</h1>
<div class="buttons is-centered">
  <p class="control">
    <span
      class="button is-warning is-outlined is-large"
      on:click={() => dispatch('changeState', STATE.REGISTER)}>REGISTER</span>
  </p>
  <p class="control">
    <span
      class="button is-warning is-outlined is-large"
      on:click={() => dispatch('changeState', STATE.LOGIN)}>
      LOGIN
    </span>
  </p>
</div>
