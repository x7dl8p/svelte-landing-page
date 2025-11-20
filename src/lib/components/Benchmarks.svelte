<script lang="ts">
  import SectionShell from './SectionShell.svelte';

  const benchmarks = [
    {
      metric: 'Processing Speed',
      our: { value: 2.3, unit: 's', label: 'Our Service' },
      competitor: { value: 4.8, unit: 's', label: 'Competitor A' },
      winner: 'our'
    },
    {
      metric: 'Memory Usage',
      our: { value: 128, unit: 'MB', label: 'Our Service' },
      competitor: { value: 256, unit: 'MB', label: 'Competitor A' },
      winner: 'our'
    },
    {
      metric: 'Cost per 1K images',
      our: { value: 0.12, unit: '$', label: 'Our Service' },
      competitor: { value: 0.25, unit: '$', label: 'Competitor A' },
      winner: 'our'
    },
    {
      metric: 'Quality Score (PSNR)',
      our: { value: 38.2, unit: 'dB', label: 'Our Service' },
      competitor: { value: 36.5, unit: 'dB', label: 'Competitor A' },
      winner: 'our'
    }
  ];
</script>

<SectionShell className="mt-8">
  <div class="bg-surface border border-stroke">
    <div class="grid grid-cols-3 gap-px bg-stroke">
      <div class="bg-surface p-4 font-mono text-sm text-muted">Metric</div>
      <div class="bg-surface p-4 font-mono text-sm text-center">Our Service</div>
      <div class="bg-surface p-4 font-mono text-sm text-center">Competitor A</div>
    </div>
    {#each benchmarks as b}
      <div class="grid grid-cols-3 gap-px bg-stroke">
        <div class="bg-surface p-4">
          <div class="font-semibold">{b.metric}</div>
        </div>
        <div class="bg-surface p-4 text-center {b.winner === 'our' ? 'bg-accent/5' : ''}">
          <div class="text-lg font-semibold">{b.our.unit === '$' ? b.our.unit : ''}{b.our.value}{b.our.unit !== '$' ? b.our.unit : ''}</div>
          {#if b.winner === 'our'}
            <div class="text-xs text-accent mt-1">✓ Best</div>
          {/if}
        </div>
        <div class="bg-surface p-4 text-center">
          <div class="text-lg font-semibold text-muted">{b.competitor.unit === '$' ? b.competitor.unit : ''}{b.competitor.value}{b.competitor.unit !== '$' ? b.competitor.unit : ''}</div>
        </div>
      </div>
    {/each}
  </div>
  <div class="mt-4 text-xs text-muted">
    * Benchmarks conducted on standardized datasets. Results may vary based on usage patterns.
  </div>
</SectionShell>
