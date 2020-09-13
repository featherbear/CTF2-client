<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import STATE from "./STATE";

  import { Input, InputBlue } from "../../../ui/components/Input";
</script>

<Input type="text" pattern="\w." maxlength="20" placeholder="username" />
<InputBlue type="password" placeholder="password" />
