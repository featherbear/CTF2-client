<script>
  import Icon from "svelte-awesome";
  import { arrowCircleOLeft } from "svelte-awesome/icons";
  import {
    STATE,
    InviteSection,
    MethodSection,
    LoginSection,
    RegisterSection,
  } from "./_components";

  let pageHistory = [];
  let pageState = STATE.INVITE;

  const changeState = ({ detail }) => {  
    pageHistory.push(pageState)
    pageState = detail;
  };
  const restoreState = () => pageState = pageHistory.pop()
  

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

  .backButtonContainer {
    margin-top: 10px;

    > span {
      cursor: pointer;
      span:last-child {
        margin-left: 5px;
      }
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

    {#if pageState !== STATE.INVITE}
      <p class="control backButtonContainer">
        <span
          class="button is-small is-white is-outlined"
          on:click={restoreState}>
          <Icon data={arrowCircleOLeft} />
          <span>Back</span>
        </span>
      </p>
    {/if}
  </section>

  <div class="background"><canvas bind:this={canvasElem} /></div>
</Center>
