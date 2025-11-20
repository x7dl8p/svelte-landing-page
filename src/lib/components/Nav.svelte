<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import TickBox from './TickBox.svelte';
  let scrolled = false;

  onMount(() => {
    if (!browser) return;
    const handleScroll = () => {
      scrolled = window.scrollY > 8;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class={`fixed w-full top-0 z-50 py-1 nav-blur border-b border-stroke bg-transparent transition-colors duration-200 ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Top Navigation">
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <div class="font-mono tracking-widest uppercase text-sm">Scale_Engine_API</div>
    </div>
    <div class="flex gap-8 font-mono tracking-widest text-sm text-muted">
      <a href="#specs" class="hover:text-accent">Specs</a>
      <a href="#integration" class="hover:text-accent">Integration</a>
      <a href="#cost" class="hover:text-accent">Cost Basis</a>
    </div>
    <div class="flex items-center gap-4">
      <TickBox className="px-3 py-1 cursor-pointer" ariaLabel='access-token'>
        <button class="bg-transparent font-mono">Access Token</button>
      </TickBox>
    </div>
  </div>
  <div class="absolute left-0 top-0 m-3 crosshair"></div>
  <div class="absolute right-0 top-0 m-3 crosshair"></div>
  <div class="absolute left-0 bottom-0 m-3 crosshair"></div>
  <div class="absolute right-0 bottom-0 m-3 crosshair"></div>
</nav>

<style>
  nav.nav-scrolled { background-color: rgba(10,10,10,0.66); backdrop-filter: blur(4px); }
</style>
