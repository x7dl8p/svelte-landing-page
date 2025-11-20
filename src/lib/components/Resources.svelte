<script lang="ts">
  import SectionShell from './SectionShell.svelte';
  import Terminal from './Terminal.svelte';
  import Badge from './Badge.svelte';
  import { Book, Package, ArrowRight, Zap, List, Users } from 'lucide-svelte';
  import { m } from '$lib/paraglide/messages';

  let query = '';
  let copied = false;
  const quickLinks = [
    { title: 'API Reference', href: '/docs/api' },
    { title: 'SDKs', href: '/docs/sdks' },
    { title: 'Migration Guide', href: '/docs/migrate' },
    { title: 'Quickstart', href: '/docs/quickstart' }
  ];
  const codeSample = `curl -X POST https://api.scale.example/upscale -H "Authorization: Bearer $TOKEN" -d '{"image":"https://example.com/image.jpg","scale":4}'`;

  const resources = [
    { title: m.resources_api_title(), description: m.resources_api_description(), icon: Book, href: '/docs/api', type: 'doc' },
    { title: m.resources_sdks_title(), description: m.resources_sdks_description(), icon: Package, href: '/docs/sdks', type: 'sdk' },
    { title: m.resources_migration_title(), description: m.resources_migration_description(), icon: ArrowRight, href: '/docs/migrate', type: 'guide' },
    { title: m.resources_quickstart_title(), description: m.resources_quickstart_description(), icon: Zap, href: '/docs/quickstart', type: 'guide' },
    { title: m.resources_tutorials_title(), description: m.resources_tutorials_description(), icon: List, href: '/docs/tutorials', type: 'tutorial' },
    { title: m.resources_community_title(), description: m.resources_community_description(), icon: Users, href: '/community', type: 'community' }
  ];

  async function copyCode() {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(codeSample);
        copied = true;
        setTimeout(() => copied = false, 2000);
      }
    } catch (e) {
      // ignore
    }
  }
  function matchesQuery(item: { title: string; href: string }) {
    return item.title.toLowerCase().includes(query.toLowerCase());
  }
</script>

<SectionShell className="mt-8">
  <div class="mb-6">
    <input placeholder={m.resources_search_placeholder()} bind:value={query} class="px-3 py-2 bg-black/10 border border-stroke rounded w-full" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each resources.filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase())) as r}
      <a href={r.href} class="bg-surface p-6 border border-stroke hover:bg-[#121212] transition-colors block">
        <svelte:component this={r.icon} class="w-8 h-8 text-accent mb-4" />
        <div class="font-semibold">{r.title}</div>
        <div class="text-muted text-sm mt-2">{r.description}</div>
        <div class="mt-4 text-accent text-sm">{m.resources_learn_more()}</div>
      </a>
    {/each}
  </div>
  <div class="mt-8 bg-surface p-6 border border-stroke">
    <div class="font-semibold mb-4">{m.resources_quick_code_example()}</div>
    <Terminal code={codeSample} />
    <div class="mt-3 flex gap-2">
      <button class="py-2 px-3 border border-stroke hover:bg-accent hover:text-black transition-colors" on:click={copyCode}>{copied ? m.resources_copied() : m.resources_copy()}</button>
      <button class="py-2 px-3 border border-stroke text-accent">{m.resources_download_sdks()}</button>
    </div>
  </div>
</SectionShell>
