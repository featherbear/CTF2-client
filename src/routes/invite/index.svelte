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

  import {onMount} from "svelte";
  let canvas;
  onMount(async ()=> {
    let init = (await import("./_components/glitch/")).default
    init(canvas, 'background.jpg')
  })
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>
<div class="background">
  <canvas bind:this={canvas} id="backgroundCanvas"></canvas>
</div>
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
