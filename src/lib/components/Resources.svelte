<script lang="ts">
  import SectionShell from './SectionShell.svelte';
  import Terminal from './Terminal.svelte';
  import Badge from './Badge.svelte';
  import { Book, Package, ArrowRight, Zap, List, Users } from 'lucide-svelte';

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
    { title: 'API Reference', description: 'Complete API documentation with examples', icon: Book, href: '/docs/api', type: 'doc' },
    { title: 'SDKs', description: 'Official SDKs for Node.js, Python, Go', icon: Package, href: '/docs/sdks', type: 'sdk' },
    { title: 'Migration Guide', description: 'Upgrade from v1 to v2 seamlessly', icon: ArrowRight, href: '/docs/migrate', type: 'guide' },
    { title: 'Quickstart', description: 'Get up and running in 5 minutes', icon: Zap, href: '/docs/quickstart', type: 'guide' },
    { title: 'Tutorials', description: 'Step-by-step tutorials and best practices', icon: List, href: '/docs/tutorials', type: 'tutorial' },
    { title: 'Community', description: 'Join our Discord and GitHub community', icon: Users, href: '/community', type: 'community' }
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
    <input placeholder="Search resources..." bind:value={query} class="px-3 py-2 bg-black/10 border border-stroke rounded w-full" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each resources.filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase())) as r}
      <a href={r.href} class="bg-surface p-6 border border-stroke hover:bg-[#121212] transition-colors block">
        <svelte:component this={r.icon} class="w-8 h-8 text-accent mb-4" />
        <div class="font-semibold">{r.title}</div>
        <div class="text-muted text-sm mt-2">{r.description}</div>
        <div class="mt-4 text-accent text-sm">Learn more →</div>
      </a>
    {/each}
  </div>
  <div class="mt-8 bg-surface p-6 border border-stroke">
    <div class="font-semibold mb-4">Quick Code Example</div>
    <Terminal code={codeSample} />
    <div class="mt-3 flex gap-2">
      <button class="py-2 px-3 border border-stroke hover:bg-accent hover:text-black transition-colors" on:click={copyCode}>{copied ? 'Copied' : 'Copy'}</button>
      <button class="py-2 px-3 border border-stroke text-accent">Download SDKs →</button>
    </div>
  </div>
</SectionShell>
