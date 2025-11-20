<script lang="ts">
  import SectionShell from './SectionShell.svelte';
  import CaseStudyCard from './CaseStudyCard.svelte';

  const studies = [
    { title: 'Jagran', excerpt: 'Large news publishing with archival demands and low-latency upscaling', logo: 'J', link: '#', metricLabel: 'Uptime', metricValue: '99.98%', quote: 'Upgrading to Pro reduced our processing time and improved video grading for broadcast.' },
    { title: 'ETV Bharat', excerpt: 'Regional broadcast upscaling for HDR restoration workflows', logo: 'E', link: '#', metricLabel: 'Latency', metricValue: '<30ms', quote: 'The edge acceleration made our regional broadcasts seamless.' },
    { title: 'Wired', excerpt: 'Editorial image restoration for print-quality results', logo: 'W', link: '#', metricLabel: 'Quality', metricValue: 'High', quote: 'Print-quality restorations that our editors love.' }
  ];
  let currentIndex = 0;

  function next() {
    currentIndex = (currentIndex + 1) % studies.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + studies.length) % studies.length;
  }
</script>

<SectionShell className="mt-8">
  <div class="relative">
    <div class="bg-surface p-6 border border-stroke flex flex-col justify-between min-h-[300px]">
      <div>
        <div class="text-2xl font-bold">{studies[currentIndex].title}</div>
        <div class="text-muted mt-2">{studies[currentIndex].excerpt}</div>
      </div>
      <div class="mt-4 flex items-center gap-4">
        <div class="w-12 h-12 bg-stroke flex items-center justify-center">{studies[currentIndex].logo}</div>
        <div class="text-muted">"{studies[currentIndex].quote}"</div>
      </div>
      <div class="mt-6"><a href={studies[currentIndex].link} class="text-accent hover:underline">Read full case study →</a></div>
      <div class="text-xs text-muted mt-2">Pro tip: use the Pro plan for high throughput and low tail latency.</div>
    </div>
    <div class="flex justify-between mt-4">
      <button on:click={prev} class="px-4 py-2 border border-stroke font-mono text-sm">← Previous</button>
      <div class="flex gap-2">
        {#each studies as _, i}
          <button on:click={() => currentIndex = i} aria-label="Go to slide {i + 1}" class="w-3 h-3 rounded-full {i === currentIndex ? 'bg-accent' : 'bg-stroke'}"></button>
        {/each}
      </div>
      <button on:click={next} class="px-4 py-2 border border-stroke font-mono text-sm">Next →</button>
    </div>
  </div>
</SectionShell>
