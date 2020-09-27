<script context="module">
    export async function preload(page, session) {
        console.log("PRELOAD", this, page, session);
    }
</script> 

<script>
    import {questions} from "../AppData"
</script>

{@debug $questions}
{$questions}