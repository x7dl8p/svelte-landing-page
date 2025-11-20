<script lang="ts">
  import SectionShell from './SectionShell.svelte';
  import PricingCard from './PricingCard.svelte';
  import { m } from '$lib/paraglide/messages';

  const plans = [
    {
      name: m.pricing_basic_name(),
      monthly: '$0',
      yearly: '$0',
      features: [
        m.pricing_basic_features_0(),
        m.pricing_basic_features_1(),
        m.pricing_basic_features_2()
      ],
      cta: m.pricing_basic_cta()
    },
    {
      name: m.pricing_pro_name(),
      monthly: '$49',
      yearly: '$39',
      features: [
        m.pricing_pro_features_0(),
        m.pricing_pro_features_1(),
        m.pricing_pro_features_2(),
        m.pricing_pro_features_3()
      ],
      popular: true,
      cta: m.pricing_pro_cta()
    },
    {
      name: m.pricing_enterprise_name(),
      monthly: 'Contact',
      yearly: 'Contact',
      features: [
        m.pricing_enterprise_features_0(),
        m.pricing_enterprise_features_1(),
        m.pricing_enterprise_features_2()
      ],
      cta: m.pricing_enterprise_cta()
    }
  ];
  let billing: 'monthly' | 'yearly' = 'monthly';
</script>

<SectionShell className="mt-8">
  <div class="flex items-center gap-4 mb-6">
    <div class="font-mono text-sm text-muted">{m.pricing_billing()}</div>
    <div class="flex items-center gap-2 border border-stroke rounded p-1">
      <button class="px-3 py-1 font-mono text-sm" on:click={() => billing = 'monthly'} class:font-semibold={billing === 'monthly'}>{m.pricing_monthly()}</button>
      <button class="px-3 py-1 font-mono text-sm" on:click={() => billing = 'yearly'} class:font-semibold={billing === 'yearly'}>{m.pricing_yearly()}</button>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each plans as p}
      <PricingCard name={p.name} price={(billing === 'monthly' ? p.monthly : p.yearly)} monthlyPrice={p.monthly} yearlyPrice={p.yearly} features={p.features} popular={p.popular} cta={p.cta} billing={billing} />
    {/each}
  </div>
  <div class="mt-12 bg-surface p-6 border border-stroke">
    <div class="font-semibold mb-4">{m.pricing_comparison_title()}</div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-stroke">
            <th class="text-left py-2">{m.pricing_comparison_feature()}</th>
            <th class="text-center py-2">{m.pricing_comparison_basic()}</th>
            <th class="text-center py-2">{m.pricing_comparison_pro()}</th>
            <th class="text-center py-2">{m.pricing_comparison_enterprise()}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-stroke/50">
            <td class="py-2">{m.pricing_comparison_storage()}</td>
            <td class="text-center py-2">{m.pricing_comparison_storage_basic()}</td>
            <td class="text-center py-2">{m.pricing_comparison_storage_pro()}</td>
            <td class="text-center py-2">{m.pricing_comparison_storage_enterprise()}</td>
          </tr>
          <tr class="border-b border-stroke/50">
            <td class="py-2">{m.pricing_comparison_images()}</td>
            <td class="text-center py-2">{m.pricing_comparison_images_basic()}</td>
            <td class="text-center py-2">{m.pricing_comparison_images_pro()}</td>
            <td class="text-center py-2">{m.pricing_comparison_images_enterprise()}</td>
          </tr>
          <tr class="border-b border-stroke/50">
            <td class="py-2">{m.pricing_comparison_support()}</td>
            <td class="text-center py-2">{m.pricing_comparison_support_basic()}</td>
            <td class="text-center py-2">{m.pricing_comparison_support_pro()}</td>
            <td class="text-center py-2">{m.pricing_comparison_support_enterprise()}</td>
          </tr>
          <tr>
            <td class="py-2">{m.pricing_comparison_sla()}</td>
            <td class="text-center py-2">{m.pricing_comparison_sla_basic()}</td>
            <td class="text-center py-2">{m.pricing_comparison_sla_pro()}</td>
            <td class="text-center py-2">{m.pricing_comparison_sla_enterprise()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</SectionShell>
