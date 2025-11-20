<script lang="ts">
  export let name = '';
  export let price = '';
  export let billing: 'monthly' | 'yearly' = 'monthly';
  export let monthlyPrice: string | undefined = undefined;
  export let yearlyPrice: string | undefined = undefined;
  export let features: string[] = [];
  export let popular = false;
  export let cta = 'Get Started';
</script>

  <div class={`bg-surface p-6 border border-stroke hover:bg-[#121212] transition-colors h-full flex flex-col justify-between ${popular ? 'border-accent bg-[#0d0d0d]' : ''}`}>
  <div>
    <div class="flex items-center justify-between">
      <div class="font-semibold text-lg">{name}</div>
      {#if popular}
        <div class="text-xs bg-accent text-black px-2 py-1 rounded">Popular</div>
      {/if}
    </div>
    {#if price === 'Contact'}
      <div class="text-2xl font-bold mt-4">{price}</div>
    {:else}
      <div class="text-2xl font-bold mt-4">{price}{billing === 'monthly' ? '/mo' : '/mo billed annually'}</div>
    {/if}
    {#if billing === 'yearly' && monthlyPrice && yearlyPrice}
      {#if !isNaN(parseInt(monthlyPrice.replace(/[^0-9]/g, ''))) && !isNaN(parseInt(yearlyPrice.replace(/[^0-9]/g, '')))}
        <div class="text-sm text-muted">Save ${Math.max(0, parseInt(monthlyPrice.replace(/[^0-9]/g, '')) - parseInt(yearlyPrice.replace(/[^0-9]/g, '')))} when billed annually*</div>
      {/if}
    {/if}
    <ul class="mt-4 space-y-1 text-muted text-sm">
      {#each features as f}
        <li>• {f}</li>
      {/each}
    </ul>
  </div>
  <div class="mt-6">
  <button class="w-full py-3 border border-stroke bg-transparent hover:bg-accent hover:text-black transition-colors">{cta}</button>
  </div>
</div>
