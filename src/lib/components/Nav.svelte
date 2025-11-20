<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import TickBox from './TickBox.svelte';
  import { m } from '$lib/paraglide/messages';
  import { setLocale, getLocale } from '$lib/paraglide/runtime';

  let scrolled = false;
  let currentLocale = 'en';

  function toggleLanguage() {
    const newLang = currentLocale === 'en' ? 'ar' : 'en';
    setLocale(newLang);
    currentLocale = newLang;
  }

  onMount(() => {
    if (!browser) return;
    currentLocale = getLocale();
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
      <div class="font-mono tracking-widest uppercase text-sm">{m.nav_brand()}</div>
    </div>
    <div class="flex gap-8 font-mono tracking-widest text-sm text-muted">
      <a href="#specs" class="hover:text-accent">{m.nav_specs()}</a>
      <a href="#integration" class="hover:text-accent">{m.nav_integration()}</a>
      <a href="#cost" class="hover:text-accent">{m.nav_cost()}</a>
    </div>
    <div class="flex items-center gap-4">
      <button
        on:click={toggleLanguage}
        class="px-3 py-1 border border-stroke font-mono text-sm hover:bg-accent hover:text-black transition-colors"
        aria-label="Switch language"
      >
        {currentLocale === 'en' ? 'AR' : 'EN'}
      </button>
      <TickBox className="px-3 py-1 cursor-pointer" ariaLabel='access-token'>
        <button class="bg-transparent font-mono">{m.nav_access_token()}</button>
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
