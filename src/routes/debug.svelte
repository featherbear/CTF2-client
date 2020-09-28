<!--
  Project CTF² Page
  Note: Do not add any sensitive or critical data
-->
<script context="module">
  export async function preload(page, session) {
    const fetch = global.CTF2_fetch;

    return {
      CTF2_ENDPOINT: fetch.base,
      BACKEND_DATA: await fetch("hello").then((r) => r.json()),
      FRONTEND_DATA: {
        START_TIME: global.START_TIME,
        GIT_COMMIT: global.GIT_COMMIT,
      },
    };
  }
</script>

<script>
  export let CTF2_ENDPOINT;
  export let BACKEND_DATA;
  export let FRONTEND_DATA;

  import { secondAccurate as currentTime, parseDelta } from "../lib/DateTime";
  let client_uptime, server_uptime;
  $: {
    client_uptime = parseDelta(
      $currentTime - new Date(FRONTEND_DATA.START_TIME)
    );
    server_uptime = parseDelta(
      $currentTime - new Date(BACKEND_DATA.START_TIME)
    );
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

    details {
      summary {
        cursor: pointer;
      }
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
      <div class="container my-3">
        <div class="block">
          <p>Frontend server started: {new Date(FRONTEND_DATA.START_TIME)}</p>
          <p>Frontend server uptime: {client_uptime}</p>
          {#if FRONTEND_DATA.GIT_COMMIT}
            <p>Frontend server version: {FRONTEND_DATA.GIT_COMMIT}</p>
          {/if}
        </div>
        <!-- <div class="block">
          :: Questions
          - Time of last question data update
          - hash of questions

        </div> -->

        <!-- <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {#each Object.entries(process.env) as [key, val]}
              <tr>
                <th>{key}</th>
                <td>{val}</td>
              </tr>
            {/each}
          </tbody>
        </table> -->
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

      <div class="container my-3">
        <div class="block">
          <p>CTF2_ENDPOINT set to <code>{CTF2_ENDPOINT}</code></p>
        </div>
        <div class="block">
          <p>Backend server started: {new Date(BACKEND_DATA.START_TIME)}</p>
          <p>Backend server uptime: {server_uptime}</p>
          {#if BACKEND_DATA.GIT_COMMIT}
            <p>Backend server version: {BACKEND_DATA.GIT_COMMIT}</p>
          {/if}
        </div>
        <div class="block">
          <details>
            <summary>
              Raw response from
              <code>{CTF2_ENDPOINT}/hello</code>
            </summary>
            <pre>{JSON.stringify(BACKEND_DATA, undefined, 2)}</pre>
          </details>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer pb-6">
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
