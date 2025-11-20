<script lang="ts">
  import SectionShell from './SectionShell.svelte';
  import PricingCard from './PricingCard.svelte';

  const plans = [
    { name: 'Basic', monthly: '$0', yearly: '$0', features: ['1GB Storage', 'Up to 100 images', 'Community Support'], cta: 'Start Free' },
    { name: 'Pro', monthly: '$49', yearly: '$39', features: ['50GB Storage', 'Up to 10k images', 'Email Support', 'Priority Queue'], popular: true, cta: 'Start Trial' },
    { name: 'Enterprise', monthly: 'Contact', yearly: 'Contact', features: ['Custom SLA', 'Dedicated Infrastructure', 'SLA & Compliance'], cta: 'Contact Sales' }
  ];
  let billing: 'monthly' | 'yearly' = 'monthly';
</script>

<SectionShell className="mt-8">
  <div class="flex items-center gap-4 mb-6">
    <div class="font-mono text-sm text-muted">Billing:</div>
    <div class="flex items-center gap-2 border border-stroke rounded p-1">
      <button class="px-3 py-1 font-mono text-sm" on:click={() => billing = 'monthly'} class:font-semibold={billing === 'monthly'}>Monthly</button>
      <button class="px-3 py-1 font-mono text-sm" on:click={() => billing = 'yearly'} class:font-semibold={billing === 'yearly'}>Yearly</button>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each plans as p}
      <PricingCard name={p.name} price={(billing === 'monthly' ? p.monthly : p.yearly)} monthlyPrice={p.monthly} yearlyPrice={p.yearly} features={p.features} popular={p.popular} cta={p.cta} billing={billing} />
    {/each}
  </div>
  <div class="mt-12 bg-surface p-6 border border-stroke">
    <div class="font-semibold mb-4">Feature Comparison</div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-stroke">
            <th class="text-left py-2">Feature</th>
            <th class="text-center py-2">Basic</th>
            <th class="text-center py-2">Pro</th>
            <th class="text-center py-2">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-stroke/50">
            <td class="py-2">Storage</td>
            <td class="text-center py-2">1GB</td>
            <td class="text-center py-2">50GB</td>
            <td class="text-center py-2">Unlimited</td>
          </tr>
          <tr class="border-b border-stroke/50">
            <td class="py-2">Images/month</td>
            <td class="text-center py-2">100</td>
            <td class="text-center py-2">10k</td>
            <td class="text-center py-2">Unlimited</td>
          </tr>
          <tr class="border-b border-stroke/50">
            <td class="py-2">Support</td>
            <td class="text-center py-2">Community</td>
            <td class="text-center py-2">Email</td>
            <td class="text-center py-2">Dedicated</td>
          </tr>
          <tr>
            <td class="py-2">SLA</td>
            <td class="text-center py-2">-</td>
            <td class="text-center py-2">-</td>
            <td class="text-center py-2">99.9%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</SectionShell>
