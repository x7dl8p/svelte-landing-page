<script lang="ts">
  import Terminal from './Terminal.svelte';
  import SectionShell from './SectionShell.svelte';
  import { m } from '$lib/paraglide/messages';
  export let code = `curl -X POST https://api.scale.example/upscale -H \"Authorization: Bearer $TOKEN\" -d '{"image":"data"}'`;
</script>

<SectionShell className="mt-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    <div class="p-8 md:p-16">
      <h3 class="font-semibold">{m.integration_title()}</h3>
      <p class="text-muted mt-2">{m.integration_description()}</p>
      <ul class="mt-4 text-muted font-mono text-sm">
        <li>{m.integration_sdks()}</li>
      </ul>
    </div>
    <div class="p-8 md:p-16 bg-[#080808]">
      <Terminal {code} />
    </div>
  </div>
</SectionShell>
