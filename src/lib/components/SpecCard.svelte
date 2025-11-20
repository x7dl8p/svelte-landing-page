<script lang="ts">
  import { Zap, Star, BarChart3 } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';

  export let icon: 'performance' | 'quality' | 'scale' = 'performance';
  export let title = '';
  export let metrics: Array<{label: string, value: string}> = [];
  export let status: 'optimal' | 'good' | 'degraded' = 'optimal';

  const iconComponents: Record<string, ComponentType> = {
    performance: Zap,
    quality: Star,
    scale: BarChart3
  };

  const statusColors = {
    optimal: 'text-green-400',
    good: 'text-accent',
    degraded: 'text-orange-400'
  };
</script>

<div class="bg-surface p-6 border border-stroke hover:border-accent/50 transition-all h-full flex flex-col">
  <div class="flex items-start justify-between mb-4">
    <svelte:component this={iconComponents[icon]} class="w-8 h-8 text-accent" />
    <div class="w-2 h-2 rounded-full {statusColors[status]}"></div>
  </div>
  <div class="font-mono text-sm text-muted mb-2">{title}</div>
  <div class="space-y-2 mt-auto">
    {#each metrics as m}
      <div class="flex justify-between items-baseline">
        <span class="text-xs text-muted">{m.label}</span>
        <span class="font-semibold">{m.value}</span>
      </div>
    {/each}
  </div>
</div>
