<script context="module">
    export async function preload(page, session) {
        let z = await this.fetch(session.CTF2_ENDPOINT + "/hello").then(r=>r.json())
        
        return {a: z, b: 2, c: 3}
        
    }
</script> 

<script>
    export let a;
    export let b;
    export let c;
</script>

{a}