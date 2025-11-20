<script lang="ts">
  import SectionShell from './SectionShell.svelte';
  import { m } from '$lib/paraglide/messages';

  const benchmarks = [
    {
      metric: m.benchmarks_processing_speed(),
      our: { value: 2.3, unit: 's', label: m.benchmarks_our_service() },
      competitor: { value: 4.8, unit: 's', label: m.benchmarks_competitor() },
      winner: 'our'
    },
    {
      metric: m.benchmarks_memory_usage(),
      our: { value: 128, unit: 'MB', label: m.benchmarks_our_service() },
      competitor: { value: 256, unit: 'MB', label: m.benchmarks_competitor() },
      winner: 'our'
    },
    {
      metric: m.benchmarks_cost_per_1k(),
      our: { value: 0.12, unit: '$', label: m.benchmarks_our_service() },
      competitor: { value: 0.25, unit: '$', label: m.benchmarks_competitor() },
      winner: 'our'
    },
    {
      metric: m.benchmarks_quality_score(),
      our: { value: 38.2, unit: 'dB', label: m.benchmarks_our_service() },
      competitor: { value: 36.5, unit: 'dB', label: m.benchmarks_competitor() },
      winner: 'our'
    }
  ];
</script>

<SectionShell className="mt-8">
  <div class="bg-surface border border-stroke">
    <div class="grid grid-cols-3 gap-px bg-stroke">
      <div class="bg-surface p-4 font-mono text-sm text-muted">{m.benchmarks_metric()}</div>
      <div class="bg-surface p-4 font-mono text-sm text-center">{m.benchmarks_our_service()}</div>
      <div class="bg-surface p-4 font-mono text-sm text-center">{m.benchmarks_competitor()}</div>
    </div>
    {#each benchmarks as b}
      <div class="grid grid-cols-3 gap-px bg-stroke">
        <div class="bg-surface p-4">
          <div class="font-semibold">{b.metric}</div>
        </div>
        <div class="bg-surface p-4 text-center {b.winner === 'our' ? 'bg-accent/5' : ''}">
          <div class="text-lg font-semibold">{b.our.unit === '$' ? b.our.unit : ''}{b.our.value}{b.our.unit !== '$' ? b.our.unit : ''}</div>
          {#if b.winner === 'our'}
            <div class="text-xs text-accent mt-1">{m.benchmarks_best()}</div>
          {/if}
        </div>
        <div class="bg-surface p-4 text-center">
          <div class="text-lg font-semibold text-muted">{b.competitor.unit === '$' ? b.competitor.unit : ''}{b.competitor.value}{b.competitor.unit !== '$' ? b.competitor.unit : ''}</div>
        </div>
      </div>
    {/each}
  </div>
  <div class="mt-4 text-xs text-muted">
    {m.benchmarks_disclaimer()}
  </div>
</SectionShell>
