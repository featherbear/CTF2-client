<script>
  import { createEventDispatcher } from "svelte";
  import STATE from "./STATE";
  const dispatch = createEventDispatcher();
</script>

<h1 class="is-size-3 has-text-light">Your mission, should you choose to accept ...</h1>
<div class="buttons is-centered">
  <p class="control">
    <span
      class="button is-success is-outlined is-large"
      on:click={() => dispatch('changeState', STATE.METHOD)}>YEET</span>
  </p>
  <p class="control">
    <a
      class="button is-danger is-outlined is-large"
      href="//www.youtube.com/watch?v=dQw4w9WgXcQ">
      NOPE
    </a>
  </p>
</div>
