<script>
  let pageState;
  import STATE from "./_components/STATE";
</script>

{#if pageState === STATE.INVITE}
  <section>
    <h1>Your mission, should you choose to accept ...</h1>
    <p class="control">
      <s class="button is-success is-outlined is-large">YEET</s>
    </p>
    <p class="control">
      <a
        class="button is-danger is-outlined is-large"
        href="//www.youtube.com/watch?v=dQw4w9WgXcQ">
        NOPE
      </a>
    </p>
  </section>
{:else if pageState === STATE.METHOD}
  <section>
    <h1 class="is-size-3 has-text-light">Are you new here?</h1>
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <a class="button is-warning is-outlined is-large" name="register">
          REGISTER
        </a>
      </p>
      <p class="control">
        <a class="button is-warning is-outlined is-large" name="login">
          LOGIN
        </a>
      </p>
    </div>
  </section>
{:else if pageState === STATE.LOGIN}
  <section>
    <form autocomplete="off">
      <input
        type="text"
        name="username"
        class="is-size-1 has-text-light minimal has-text-centered"
        spellcheck="false"
        pattern="\w."
        maxlength="20"
        placeholder="username" />

      <input
        class="input blueBox has-text-centered is-size-1 has-text-light"
        name="password"
        type="password"
        placeholder="password" />
    </form>
  </section>
{:else if pageState === STATE.REGISTER}
  <form>
    <div class="page" name="name">
      <style>
        .page[name="name"] input.minimal {
          background-color: transparent;
          outline: none;
          border: none;
          border-bottom: 5px solid white;
          padding: 15px;
        }
      </style>
      <h1 class="is-size-1 has-text-light">
        Good <span class="salutation" />, Agent <input
          type="text"
          name="name"
          class="has-text-light minimal"
          spellcheck="false"
          required
          placeholder="(your display name)"
          maxlength="20" />.
      </h1>
    </div>
    <div class="page" name="username">
      <h1 class="is-size-1 has-text-light">
        Username: <input type="text" name="username" class="has-text-light
            minimal" spellcheck="false" pattern="\w." maxlength="20" placeholder="(your username)" />
      </h1>
    </div>

    <div class="page" name="password">
      <h1 class="is-size-1 has-text-light">password</h1>
      <input
        class="input blueBox has-text-centered is-size-1 has-text-light"
        name="password"
        type="password" />
    </div>

    <div class="page" name="password2">
      <h1 class="is-size-1 has-text-light">confirm</h1>
      <input
        class="input blueBox has-text-centered is-size-1 has-text-light"
        name="password2"
        type="password" />
    </div>
  </form>
{/if}
