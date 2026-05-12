<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { WebsiteName } from "../../../config"

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

    <svg style="display:none">
      <defs>
        <symbol
          id="checkcircle"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
          />
        </symbol>
      </defs>
    </svg>

    <svg style="display:none">
      <defs>
        <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
          />
        </symbol>
      </defs>
    </svg>

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 ml-2 inline text-success"
                  >
                    <use href="#checkcircle" />
                  </svg>
                {:else}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[26px] h-[26px] inline text-base-200"
                  >
                    <use href="#nocircle" />
                  </svg>
                {/if}
              </td>
              <td class="text-center">
                {#if feature.proString}
                  {feature.proString}
                {:else if feature.proIncluded}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 ml-2 inline text-success"
                  >
                    <use href="#checkcircle" />
                  </svg>
                {:else}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[26px] h-[26px] inline text-base-200"
                  >
                    <use href="#nocircle" />
                  </svg>
                {/if}
              </td>
              <td class="text-center">
                {#if feature.studioString}
                  {feature.studioString}
                {:else if feature.studioIncluded}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 ml-2 inline text-success"
                  >
                    <use href="#checkcircle" />
                  </svg>
                {:else}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[26px] h-[26px] inline text-base-200"
                  >
                    <use href="#nocircle" />
                  </svg>
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