<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import STATE from "./STATE";

  import { Input, InputBlue } from "../../../ui/components/Input";
</script>

<form autocomplete="off">
  <Input
    type="text"
    pattern="\w."
    maxlength="20"
    placeholder="username" />

  <InputBlue
    type="password"
    placeholder="password" />

  <span on:click={() => dispatch('changeState', STATE.METHOD)}>back</span>
</form>
