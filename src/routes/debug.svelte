<script context="module">
  export async function preload(page, session) {
    const fetch = global.CTF2_fetch;

    return {
      hello: await fetch("hello").then((r) => r.json()),
      CTF2_ENDPOINT: fetch.base,
      START_TIME: global.START_TIME,
    };
  }
</script>

<script>
  export let hello;
  export let START_TIME;
  export let CTF2_ENDPOINT;

  import { secondAccurate as currentTime, parseDelta } from "../lib/DateTime";
  let client_uptime, server_uptime;
  $: {
    client_uptime = parseDelta($currentTime - new Date(START_TIME));
    server_uptime = parseDelta($currentTime - new Date(hello.START_TIME));
  }
</script>

<style lang="scss">
  article {
    height: 100%;
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
    }
  }
</style>

<svelte:head>
  <title>Debug</title>
</svelte:head>

<article>
  <main>
    <section>
      <!-- Frontend Server -->
      <div class="hero is-warning is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Project CTF² Client Debug</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <p>Frontend server started: {new Date(START_TIME)}</p>
          <p>Frontend server uptime: {client_uptime}</p>
        </div>
    </section>

    <section>
      <!-- Backend Server -->
      <div class="hero is-info is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Project CTF² Server Debug</h1>
          </div>
        </div>
      </div>

      <div class="container block">
        <div class="block">
          <p>CTF2_ENDPOINT set to <code>{CTF2_ENDPOINT}</code></p>
        </div>
        <div class="block">
          <p>Backend server started: {new Date(hello.START_TIME)}</p>
          <p>Backend server uptime: {server_uptime}</p>
        </div>
        <div class="block">
          Response from
          <code>{CTF2_ENDPOINT}/hello</code>
          <pre>{JSON.stringify(hello, undefined, 2)}</pre>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container content has-text-centered">
      <figure class="image is-128x128" style="margin: 0 auto">
        <img
          src="https://raw.githubusercontent.com/featherbear/CTF2-client/master/src/ui/graphics/ctf2.png"
          alt="Project CTF² Logo" />
      </figure>
      <p>
        <strong><a href="https://github.com/featherbear/CTF2">Project CTF²</a></strong>
        by
        <a href="https://featherbear.cc">Andrew Wong</a>.
      </p>
      <div>
        The source code is licensed under the
        <a href="https://github.com/featherbear/CTF2/blob/master/LICENSE.md">MIT
          License</a>.

        <p>You may not remove this license text.</p>
      </div>
    </div>
  </footer>
</article>
