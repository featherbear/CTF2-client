<script>
  import {
    STATE,
    InviteSection,
    MethodSection,
    LoginSection,
    RegisterSection,
  } from "./_components";
  let pageState = STATE.REGISTER;

  const changeState = ({ detail }) => (pageState = detail);

  import Center from "../../ui/components/_Center.svelte";
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>

<Center>
  <section class="has-text-centered">
    {#if pageState === STATE.INVITE}
      <InviteSection on:changeState={changeState} />
    {:else if pageState === STATE.METHOD}
      <MethodSection on:changeState={changeState} />
    {:else if pageState === STATE.LOGIN}
      <LoginSection on:changeState={changeState} />
    {:else if pageState === STATE.REGISTER}
      <RegisterSection on:changeState={changeState} />
    {/if}
  </section>
</Center>
