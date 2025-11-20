<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import TrustStrip from '$lib/components/TrustStrip.svelte';
  import FeatureGrid from '$lib/components/FeatureGrid.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import CaseStudies from '$lib/components/CaseStudies.svelte';
  import Benchmarks from '$lib/components/Benchmarks.svelte';
  import Resources from '$lib/components/Resources.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Integration from '$lib/components/Integration.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { GridBackground } from '$lib';
  import { onMount } from 'svelte';
  import { setLocale, getLocale } from '$lib/paraglide/runtime';

  let processing = true;
  const metrics = [
    { label: '4x Scale', value: '4x' },
    { label: 'Inference', value: '0.04s' },
    { label: 'Uptime', value: '99.9%' }
  ];

  onMount(() => {
    // Respect base locale from runtime
    try { setLocale(getLocale(), { reload: false }); } catch {}
    setTimeout(() => { processing = false; }, 300);
  });
</script>

<GridBackground />
<Nav />
<main class="pt-[60px] relative z-10">
  <Hero metrics={metrics} />
  <TrustStrip />
  <FeatureGrid />
  <Pricing />
  <CaseStudies />
  <Benchmarks />
  <Resources />
  <FAQ />
  <Integration />
  <Footer />
</main>