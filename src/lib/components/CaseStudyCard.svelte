<script lang="ts">
  export let title = '';
  export let excerpt = '';
  export let logo = '';
  export let link = '#';
  export let metricLabel = '';
  export let metricValue = '';
</script>

<div class="bg-surface p-6 border border-stroke hover:bg-[#121212] transition-all h-full flex flex-col">
  <div class="flex items-center gap-4">
    <div class="w-10 h-10 bg-stroke flex items-center justify-center text-sm font-mono">{logo ? logo : 'LOGO'}</div>
    <div class="text-sm font-semibold">{title}</div>
  </div>
  <p class="text-muted text-sm mt-4">{excerpt}</p>
  <div class="mt-2 text-xs text-muted">{metricLabel} {metricValue}</div>
  <div class="mt-auto pt-4">
    <a href={link} class="text-accent hover:underline">Read case study →</a>
  </div>
</div>
