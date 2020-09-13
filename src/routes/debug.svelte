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
