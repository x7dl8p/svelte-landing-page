<script lang="ts">
  import SectionShell from './SectionShell.svelte';
  import { m } from '$lib/paraglide/messages';

  const faqs = [
    { q: m.faq_q1(), a: m.faq_a1(), cat: 'getting-started' },
    { q: m.faq_q2(), a: m.faq_a2(), cat: 'technical' },
    { q: m.faq_q3(), a: m.faq_a3(), cat: 'billing' },
    { q: m.faq_q4(), a: m.faq_a4(), cat: 'billing' },
    { q: m.faq_q5(), a: m.faq_a5(), cat: 'technical' },
    { q: m.faq_q6(), a: m.faq_a6(), cat: 'technical' }
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
