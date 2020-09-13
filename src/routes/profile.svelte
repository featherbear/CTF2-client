<script context="module">
    export async function preload(page, session) {
        const fetch = global.CTF2_fetch;

        let z = await fetch.authHook(this, "auth/me").then(r=>r.json())
        console.log(z);
        // let z = await fetch("auth/me").then(r=>r.json())
        // console.log(z)
        return {a: z, b: 2, c: 3}
        
    }
</script> 

<script>
    export let a;
    export let b;
    export let c;
</script>

{a}