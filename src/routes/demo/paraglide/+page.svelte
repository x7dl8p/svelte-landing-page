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
      if (locale !== "ar") {
        // set default locale to 'ar' without reloading
        void setLocale("ar", { reload: false });
      }
    } catch {
      // ignore
    }
  });
</script>

<h1>{m.hello_world({ name: "Mohammad" })}</h1>
<div>
  <button on:click={() => setLocale("en")}>en</button>
  <button on:click={() => setLocale("ar")}>ar</button>
</div>
