<script lang="ts">
  export let className = '';
  export let hasCrosshair = false;
</script>

<section class={`w-full border-t border-b border-stroke py-12 ${className}`}>
  {#if hasCrosshair}
    <div class="crosshair absolute -translate-y-1/2 -translate-x-1/2 top-0 left-0"></div>
  {/if}
  <div class="max-w-7xl mx-auto px-6">
    <slot />
  </div>
</section>

<style>
  section { border-color: var(--stroke); position: relative; }
  .crosshair { width: 10px; height: 10px; }
</style>
