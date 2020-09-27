<script context="module">
  export async function preload(page, session) {
    const fetch = global.CTF2_fetch;

    return {
      hello: await fetch("hello").then((r) => r.json()),
      CTF2_ENDPOINT: fetch.base,
    };
  }
</script>

<script>
  export let hello;
  export let CTF2_ENDPOINT;

  import { secondAccurate } from "../lib/DateTime";
  let server_uptime;
  $: {
    let delta = $secondAccurate - new Date(hello.START_TIME);
    const seconds = delta / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / (365 / 12);
    const years = months / 12;

    // Did you know JavaScript object keys have a positional index?
    let timeCalc = {
      y: ~~years,
      m: ~~(months % 12),
      d: ~~(days % (365 / 12)),
      hr: ~~(hours % 24),
      min: ~~(minutes % 60),
      s: ~~(seconds % 60),
    };

    let idx = Object.values(timeCalc).findIndex((v) => v);
    idx = idx > -1 ? idx : 5;
    let str = "";
    for (let [key, val] of Object.entries(timeCalc).slice(idx, idx + 3)) {
      str += `${val} ${key} `;
    }
    server_uptime = str.trim();
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
      <div class="hero is-warning is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Project CTF² Client Debug</h1>
          </div>
        </div>
      </div>
      <div class="container">
      </div>
    </section>

    <section>
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
        <div>
          <div class="block">
            <p>Server started: {new Date(hello.START_TIME)}</p>
            <p>Server uptime: {server_uptime}</p>
          </div>
          <div class="block">
            Response from
            <code>{CTF2_ENDPOINT}/hello</code>
            <pre>{JSON.stringify(hello, undefined, 2)}</pre>
          </div>
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
          <div class="block">
            <p>Server started: {new Date(hello.START_TIME)}</p>
            <p>Server uptime: {server_uptime}</p>
          </div>
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
