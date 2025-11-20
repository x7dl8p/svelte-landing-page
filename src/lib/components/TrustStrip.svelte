<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  export let companies = ['Jagran', 'ETV', 'Wired', 'Netflix Eng'];
</script>

<div class="py-6 border-t border-b border-stroke mt-6 text-center space-y-4">
  <h1 class="font-semibold">{m.trust_strip_title()}</h1>
  <div class="max-w-7xl mx-auto px-6 flex justify-center gap-10 opacity-60 font-mono">
    {#each companies as c}
      <div>{c}</div>
    {/each}
  </div>
</div>
