<script lang="ts">
  import TickBox from './TickBox.svelte';
</script>

<footer class="mt-12 border-t border-stroke py-8">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h2 class="text-2xl font-semibold">Ready to deploy?</h2>
      <p class="text-muted mt-2">Scale from prototype to production with integrated tooling.</p>
    </div>
    <div>
      <TickBox className="px-4 py-2 inline-block"><button class="font-mono">Create_Account</button></TickBox>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-6 mt-8 border-t border-stroke pt-4 flex items-center justify-between text-muted text-sm">
    <div>© 2025 Scale Engine — All rights reserved</div>
    <div class="flex items-center gap-4">
      <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
      <div>System Operational</div>
    </div>
  </div>
</footer>
