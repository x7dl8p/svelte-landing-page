<script lang="ts">
  import SectionShell from './SectionShell.svelte';

  const faqs = [
    { q: 'How do I get started?', a: 'Sign up and use our SDKs or call the API with your access key. Example code is available in the integration section.', cat: 'getting-started' },
    { q: 'What image formats do you support?', a: 'We support PNG, JPEG, WebP and more. We also preserve EXIF metadata on request.', cat: 'technical' },
    { q: 'How do I get an API key?', a: 'Create an account and request a key from the dashboard. For enterprise plans, contact sales.', cat: 'billing' },
    { q: 'Is there a free tier?', a: 'Yes, our Basic plan is free forever with 100 images/month.', cat: 'billing' },
    { q: 'How secure is my data?', a: 'We use end-to-end encryption and comply with SOC 2. Images are processed securely.', cat: 'technical' },
    { q: 'Can I upscale videos?', a: 'Currently we focus on images, but video support is coming soon.', cat: 'technical' }
  ];
  let query = '';
  let category: 'all' | 'getting-started' | 'technical' | 'billing' = 'all';

  function matches(faq: { q: string; a: string; cat: string }) {
    const q = faq.q.toLowerCase();
    const a = faq.a.toLowerCase();
    const term = query.trim().toLowerCase();
    if (category !== 'all' && faq.cat !== category) return false;
    return !term || q.includes(term) || a.includes(term);
  }
</script>

<SectionShell className="mt-8">
  <div class="mb-6">
    <input placeholder="Search FAQ..." bind:value={query} class="px-3 py-2 bg-black/10 border border-stroke rounded w-full" />
  </div>
  <div class="flex gap-2 mb-6">
    <button on:click={() => category = 'all'} class="px-4 py-2 border border-stroke font-mono text-sm {category === 'all' ? 'bg-accent text-black' : ''}">All</button>
    <button on:click={() => category = 'getting-started'} class="px-4 py-2 border border-stroke font-mono text-sm {category === 'getting-started' ? 'bg-accent text-black' : ''}">Getting Started</button>
    <button on:click={() => category = 'technical'} class="px-4 py-2 border border-stroke font-mono text-sm {category === 'technical' ? 'bg-accent text-black' : ''}">Technical</button>
    <button on:click={() => category = 'billing'} class="px-4 py-2 border border-stroke font-mono text-sm {category === 'billing' ? 'bg-accent text-black' : ''}">Billing</button>
  </div>
  <div class="space-y-4">
    {#each faqs.filter(matches) as f}
      <details class="bg-surface p-4 border border-stroke hover:bg-[#121212] transition-colors">
        <summary class="font-semibold cursor-pointer">{f.q}</summary>
        <div class="mt-2 text-muted text-sm">{f.a}</div>
      </details>
    {/each}
  </div>
  <div class="mt-6 flex justify-end">
    <button class="px-4 py-2 border border-stroke font-mono text-sm text-accent">Contact Support</button>
  </div>
</SectionShell>
