<script lang="ts">
  import Terminal from './Terminal.svelte';
  import SectionShell from './SectionShell.svelte';
  export let code = `curl -X POST https://api.scale.example/upscale -H \"Authorization: Bearer $TOKEN\" -d '{"image":"data"}'`;
</script>

<SectionShell className="mt-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    <div class="p-8 md:p-16">
      <h3 class="font-semibold">Designed for Developers</h3>
      <p class="text-muted mt-2">SDKs for Node.js, Python, Go — minimal, composable, and production-ready.</p>
      <ul class="mt-4 text-muted font-mono text-sm">
        <li>Node.js · Python · Go</li>
      </ul>
    </div>
    <div class="p-8 md:p-16 bg-[#080808]">
      <Terminal {code} />
    </div>
  </div>
</SectionShell>
