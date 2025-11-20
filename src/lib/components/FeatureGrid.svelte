<script lang="ts">
  import SpecCard from './SpecCard.svelte';
  export let features = [
    {
      icon: 'performance' as const,
      title: 'Performance Metrics',
      metrics: [
        { label: 'Throughput', value: '200 img/s' },
        { label: 'Latency (p50)', value: '18ms' },
        { label: 'Latency (p95)', value: '45ms' }
      ],
      status: 'optimal' as const
    },
    {
      icon: 'quality' as const,
      title: 'Quality Assurance',
      metrics: [
        { label: 'PSNR', value: '38.2 dB' },
        { label: 'SSIM', value: '0.97' },
        { label: 'Upscale Factor', value: '4x' }
      ],
      status: 'optimal' as const
    },
    {
      icon: 'scale' as const,
      title: 'Infrastructure',
      metrics: [
        { label: 'Uptime', value: '99.98%' },
        { label: 'Global CDN', value: '12 regions' },
        { label: 'Auto-scaling', value: 'Enabled' }
      ],
      status: 'good' as const
    }
  ];
</script>

<section class="mt-8 max-w-7xl items-center mx-auto px-6" id="specs">
  <div class="grid grid-cols-3 gap-6">
    {#each features as f}
      <SpecCard icon={f.icon} title={f.title} metrics={f.metrics} status={f.status} />
    {/each}
  </div>
</section>
