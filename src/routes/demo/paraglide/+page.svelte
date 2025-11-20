<script lang="ts">
  import { setLocale, getLocale } from "$lib/paraglide/runtime";
  import { onMount } from "svelte";
  import { m } from "$lib/paraglide/messages.js";

  onMount(() => {
    try {
      const locale = getLocale();
      if (typeof document !== "undefined") {
        document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      }
    } catch {
      // ignore
    }
  });
</script>

<h1>{m.hello_world({ name: "Mohammad" })}</h1>
<div class="bg-red-100">
  <button on:click={() => setLocale("en")}>en</button>
  <button on:click={() => setLocale("ar")}>ar</button>
</div>
