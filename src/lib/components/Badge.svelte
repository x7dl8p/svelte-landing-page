<script lang="ts">
  export let text = '';
</script>

<span class="inline-flex items-center gap-2 py-1 px-2 text-xs border border-stroke rounded font-mono tracking-widest uppercase">
  {text}
</span>

<style>
  :global(.border-stroke) { border-color: var(--stroke); }
</style>
