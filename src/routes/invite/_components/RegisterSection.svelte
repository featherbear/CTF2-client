<script>
  import { clientFetch, auth } from "../../../lib/ClientUtils";
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

  let nameInUse = false;
  let usernameInUse = false;
  let passwordMismatch = false;
  let registerError = null;

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
      autofocus
      class="is-size-2"
      placeholder="(your display name)"
      maxlength="20"
      varisize={true}
      centered={true}
      bind:elem={displayNameElem}
      bind:value={displayName}
      on:keydown={async ({ keyCode: code }) => {
        let name = (displayName || '').trim();

        if (code === 13 && !!name) {
          nameInUse = false;
          let { data } = await clientFetch(
            '/proxy/auth/nameAvailable',
            'POST',
            { name }
          );

          if (data) {
            page = 1;
          } else {
            nameInUse = true;
          }
        }
      }} />.
  </h1>
  {#if nameInUse}
      Name taken :(
  {/if}
{:else if page === 1}
  <h1 class="is-size-2 has-text-light">
    Username:
    <InputMinimal
      autofocus
      class="is-size-2"
      placeholder="(your username)"
      pattern="\w."
      maxlength="20"
      varisize={true}
      centered={true}
      bind:elem={usernameElem}
      bind:value={username}
      on:keydown={async ({ keyCode: code }) => {
        let value = (username || '').trim();
        if (code === 13 && !!value) {
          usernameInUse = false;
          let { data } = await clientFetch(
            '/proxy/auth/usernameAvailable',
            'POST',
            { username: value }
          );
          if (data) {
            page = 2;
          } else {
            usernameInUse = true;
          }
        }
      }} />
  </h1>
  {#if usernameInUse}
      Username taken :(
  {/if}
{:else if page === 2}
  <h1 class="is-size-1 has-text-light">password</h1>
  <InputBlue
    autofocus
    type="password"
    bind:elem={passwordElem}
    bind:value={password}
    on:keydown={({ keyCode: code }) => {
      if (code === 13 && !!password) {
        page = 3;
      }
    }} />
  {#if passwordMismatch}
      Passwords don't match
  {/if}
{:else if page === 3}
  <h1 class="is-size-1 has-text-light">confirm</h1>
  <InputBlue
    autofocus
    type="password"
    bind:elem={password2Elem}
    bind:value={password2}
    on:keydown={async ({ keyCode: code }) => {
      if (code === 13) {
        if (password !== password2) {
          // Ask for passwords again, go to previous page
          password = '';
          password2 = '';
          passwordMismatch = true;
          page = 2;
          return;
        }

        let { result, data } = await clientFetch(
          '/proxy/auth/register',
          'POST',
          {
            name: displayName,
            username,
            password,
          }
        );
        if (result) {
          console.info(`Got auth token: ${data}`);
          auth.token = data
          window.location = '/'
        } else {
          registerError = data;
        }
      }
    }} />

  {#if registerError}
      Something went wrong :(
      <code>{registerError}</code>
  {/if}
{/if}
