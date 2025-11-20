<script lang="ts">
  import Badge from './Badge.svelte';
  import Visualizer from './Visualizer.svelte';
  import { fade } from 'svelte/transition';
  export let metrics = [
    { label: '4x Scale', value: '4x' },
    { label: 'Inference', value: '0.04s' },
    { label: 'Uptime', value: '99.9%' }
  ];
</script>

<section class="py-16">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 items-start">
    <div class="col-span-7" transition:fade={{ duration: 150 }}>
      <div class="mb-4"><Badge text="SYS.STATUS: ONLINE" /></div>
      <h1 class="text-5xl font-semibold leading-tight tracking-tight text-text-primary">Restore fidelity. Pixel by pixel.</h1>
      <p class="mt-4 text-muted max-w-xl">Engineer-first high-fidelity upscaling with composable APIs. Deterministic behavior, low latency, and production grade runtime features for large scale workloads.</p>
      <div class="mt-6 flex gap-4 items-center">
        <button class="px-4 py-2 rounded bg-accent text-black font-semibold">Upload Source</button>
        <button class="px-4 py-2 rounded border border-stroke font-mono">Read Docs</button>
      </div>
      <div class="mt-6 grid grid-cols-3 gap-4">
        {#each metrics as item}
          <div class="bg-surface p-4 border border-stroke hover:bg-[#121212] transition-colors">
            <div class="text-muted text-xs font-mono tracking-widest">{item.label}</div>
            <div class="text-2xl font-semibold mt-1">{item.value}</div>
          </div>
        {/each}
      </div>
    </div>
    <div class="col-span-5" transition:fade={{ duration: 150 }}>
      <Visualizer />
    </div>
  </div>
</section>
