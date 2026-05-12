<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { WebsiteName } from "../../../config"
  import { Badge, BadgeCheck } from "lucide-svelte"

  type PlanFeatureRow = {
    name: string
    freeIncluded?: boolean
    proIncluded?: boolean
    studioIncluded?: boolean
    freeString?: string
    proString?: string
    studioString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Cloud",
      header: true
    },
    {
      name: "10 GB",
      freeIncluded: true,
      proIncluded: true,
      studioIncluded: true
    },
    {
      name: "2 TB",
      freeIncluded: false,
      proIncluded: true,
      studioIncluded: true
    },
    {
      name: "Unlimitiert",
      freeIncluded: false,
      proIncluded: false,
      studioIncluded: true
    },
    {
      name: "Support",
      header: true
    },
    {
      name: "Ticket Support",
      freeIncluded: true,
      proIncluded: true,
      studioIncluded: true
    },
    {
      name: "Priority Support",
      freeIncluded: false,
      proIncluded: true,
      studioIncluded: true
    },
    {
      name: "24/7 Support",
      freeIncluded: false,
      proIncluded: false,
      studioIncluded: true
    },
    {
      name: "Verkaufen",
      header: true
    },
    {
      name: "Limitierung",
      freeIncluded: true,
      proIncluded: false,
      studioIncluded: false
    },
    {
      name: "Keine Provision",
      freeIncluded: false,
      proIncluded: false,
      studioIncluded: true
    },
    {
      name: "Branding",
      freeIncluded: false,
      proIncluded: true,
      studioIncluded: true
    }
  ]
</script>

<svelte:head>
  <title>Preise</title>
  <meta name="description" content="Preise - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <h1 class="text-3xl font-bold text-center">Preise</h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
    Starten Sie mit PhotoLoom durch
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="free" />

    <div class="overflow-visible mx-auto max-w-xl mt-16">
      <table class="table">
        <caption class="mb-4">
          <div class="text-2xl font-bold text-center text-base-content">Plan Features</div>
          <div class="text-xl text-center text-slate-500 mt-1 pb-3">Vergleiche unsere Pläne</div>
        </caption>
        <thead
          class="text-lg sticky top-0 bg-base-100 bg-opacity-50 z-10 backdrop-blur-sm"
        >
        <tr>
          <td></td>
          <th class="text-center">Free</th>
          <th class="text-center">Pro</th>
          <th class="text-center">Studio</th>
        </tr>
        </thead>
        <tbody>
        {#each planFeatures as feature}
          {#if feature.header}
            <tr class="bg-base-200 font-bold">
              <td colspan="4">{feature.name} </td>
            </tr>
          {:else}
            <tr class="relative">
              <td>{feature.name} </td>
              <td class="text-center">
                {#if feature.freeString}
                  {feature.freeString}
                {:else if feature.freeIncluded}
                  <BadgeCheck class="w-8 h-8 ml-2 inline text-success"/>
                {:else}
                  <Badge class="w-[26px] h-[26px] inline text-base-200"/>
                {/if}
              </td>
              <td class="text-center">
                {#if feature.proString}
                  {feature.proString}
                {:else if feature.proIncluded}
                  <BadgeCheck class="w-8 h-8 ml-2 inline text-success"/>
                {:else}
                  <Badge class="w-[26px] h-[26px] inline text-base-200"/>
                {/if}
              </td>
              <td class="text-center">
                {#if feature.studioString}
                  {feature.studioString}
                {:else if feature.studioIncluded}
                  <BadgeCheck class="w-8 h-8 ml-2 inline text-success"/>
                {:else}
                  <Badge class="w-[26px] h-[26px] inline text-base-200"/>
                {/if}
              </td>
            </tr>
          {/if}
        {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>