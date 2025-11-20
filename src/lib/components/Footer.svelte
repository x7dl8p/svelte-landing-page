<script lang="ts">
  import TickBox from './TickBox.svelte';
  import { m } from '$lib/paraglide/messages';
</script>

<footer class="mt-12 border-t border-stroke py-8">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h2 class="text-2xl font-semibold">{m.footer_title()}</h2>
      <p class="text-muted mt-2">{m.footer_description()}</p>
    </div>
    <div>
      <TickBox className="px-4 py-2 inline-block"><button class="font-mono">{m.footer_button()}</button></TickBox>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-6 mt-8 border-t border-stroke pt-4 flex items-center justify-between text-muted text-sm">
    <div>{m.footer_copyright()}</div>
    <div class="flex items-center gap-4">
      <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
      <div>{m.footer_status()}</div>
    </div>
  </div>
</footer>
