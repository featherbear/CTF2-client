<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import STATE from "./STATE";

  import { hourAccurate } from "../../../lib/DateTime";
  import { InputMinimal, InputBlue } from "../../../ui/components/Input";

  let salutation;
  $: {
    let hour = $hourAccurate.getHours();
    if (hour < 12) {
      salutation = "morning";
    } else if (hour < 18) {
      salutation = "afternoon";
    } else {
      salutation = "evening";
    }
  }
</script>

<form>
  <div class="page" name="name">
    Good {salutation}, Agent
    </style>
    <h1 class="is-size-1 has-text-light">
      Good <span class="salutation" />, Agent
      <InputMinimal placeholder="(your display name)" maxlength="20" />.
    </h1>
  </div>
  <div class="page" name="username">
    <h1 class="is-size-1 has-text-light">
      Username:
      <InputMinimal
        pattern="\w."
        maxlength="20"
        placeholder="(your username)" />
    </h1>
  </div>

  <div class="page" name="password">
    <h1 class="is-size-1 has-text-light">password</h1>
    <InputBlue type="password" />
  </div>

  <div class="page" name="password2">
    <h1 class="is-size-1 has-text-light">confirm</h1>
    <InputBlue type="password" />
  </div>
  <span on:click={() => dispatch('changeState', STATE.METHOD)}>back</span>
</form>
