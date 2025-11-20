<script lang="ts">
  export let ariaLabel = '';
  export let className = '';
</script>

<div class={`tick-box ${className}`} aria-label={ariaLabel}>
  <slot />
  <div class="corner-tick tl"></div>
  <div class="corner-tick tr"></div>
  <div class="corner-tick bl"></div>
  <div class="corner-tick br"></div>
</div>

<style>
  .tick-box:hover .corner-tick::before,
  .tick-box:hover .corner-tick::after {
    background: var(--accent);
  }
  .corner-tick { position:absolute; width: 6px; height: 6px; }
  .corner-tick.tl{ left: -4px; top: -4px; }
  .corner-tick.tr{ right: -4px; top: -4px; }
  .corner-tick.bl{ left: -4px; bottom: -4px; }
  .corner-tick.br{ right: -4px; bottom: -4px; }
</style>
