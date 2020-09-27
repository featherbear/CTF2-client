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
</script>

<div>
  <div>
    <p>CTF2_ENDPOINT set to <code>{CTF2_ENDPOINT}</code></p>
  </div>
  <div>
    Response from <code>{CTF2_ENDPOINT}/hello</code>
    <pre>{JSON.stringify(hello, undefined, 2)}</pre>
  </div>
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
