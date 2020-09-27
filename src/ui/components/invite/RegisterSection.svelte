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

  let page = 0;

  let displayName;
  let username;
  let password;
  let password2;

  let displayNameElem;
  let usernameElem;
  let passwordElem;
  let password2Elem;
</script>

{#if page === 0}
  <h1 class="is-size-2 has-text-light">
    Good {salutation}, Agent
    <InputMinimal
      class="is-size-2"
      placeholder="(your display name)"
      maxlength="20"
      varisize={true}
      centered={true}
      bind:elem={displayNameElem}
      bind:value={displayName}
      on:keydown={({ keyCode: code }) => {
        if (code === 13 && !!displayName) {
          // TODO: Check display name
          page = 1;
        }
      }} />.
  </h1>
{:else if page === 1}
  <h1 class="is-size-2 has-text-light">
    Username:
    <InputMinimal
      class="is-size-2"
      placeholder="(your username)"
      pattern="\w."
      maxlength="20"
      varisize={true}
      centered={true}
      bind:elem={usernameElem}
      bind:value={username}
      on:keydown={({ keyCode: code }) => {
        if (code === 13 && !!username) {
          // TODO: Check username
          page = 2;
        }
      }} />
  </h1>
{:else if page === 2}
  <h1 class="is-size-1 has-text-light">password</h1>
  <InputBlue
    type="password"
    bind:elem={passwordElem}
    bind:value={password}
    on:keydown={({ keyCode: code }) => {
      if (code === 13 && !!password) {
        page = 3;
      }
    }} />
{:else if page === 3}
  <h1 class="is-size-1 has-text-light">confirm</h1>
  <InputBlue
    type="password"
    bind:elem={password2Elem}
    bind:value={password2}
    on:keydown={({ keyCode: code }) => {
      if (code === 13 && password === password2) {
        // TODO: Register
        alert('Not implemented');
      }
    }} />
{/if}
