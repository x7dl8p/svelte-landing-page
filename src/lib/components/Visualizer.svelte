<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  export let width = 1920;
  export let height = 1080;
  export let visualizerHeight = 420;
  let scannerY = 0;
  let coords = { x: width, y: height };
  const dispatch = createEventDispatcher();

  function handleMouseMove(evt: MouseEvent) {
    const target = evt.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const y = Math.min(Math.max(evt.clientY - rect.top, 1), rect.height - 1);
    const x = Math.min(Math.max(evt.clientX - rect.left, 1), rect.width - 1);
    scannerY = y;
    coords = { x: Math.round((x / rect.width) * width), y: Math.round((y / rect.height) * height) };
    dispatch('coords', coords);
  }

  function handleMouseLeave(){
    scannerY = 0; // or keep last
  }
</script>

<div role="application" aria-label="image visualizer" class="relative bg-[#0b0b0b] border border-stroke flex items-center justify-center overflow-hidden" on:mousemove={handleMouseMove} on:mouseleave={handleMouseLeave} style="height:{visualizerHeight}px;">
  <div class="absolute inset-0 flex items-center justify-center text-muted font-mono uppercase">PROCESSING...</div>
  <div class="absolute bottom-4 left-4 text-muted font-mono text-sm">X: {coords.x} Y: {coords.y}</div>
  <div class="absolute left-0 right-0 h-0.5 bg-accent opacity-70 scanline" style="top: {scannerY}px; transition: top 60ms linear;"></div>
</div>
