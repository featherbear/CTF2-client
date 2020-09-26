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

  import { onMount } from "svelte";
  let canvasElem;
  onMount(async () => {
    let init = (await import("./_components/glitch/")).default;
    init(canvasElem, "/background.jpg");
  });
</script>

<style lang="scss">
  .background {
    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;

    &:after {
        content: "";
        position: absolute;
        width:100vw;
        height: 100vh;
        background-color: rgba(0, 35, 88, 0.7);
        // background-color: rgba(48, 63, 116, 0.6);
    }

    canvas {
      position: absolute;
    }
  }
</style>

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

  <div class="background"><canvas bind:this={canvasElem} /></div>
</Center>
