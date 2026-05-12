<script lang="ts">
  import { WebsiteName } from "../../../config.ts"
</script>

<svelte:head>
  <title>Über uns</title>
  <meta name="description" content="Über uns - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] container mx-auto max-w-2xl">
  <h1 class="text-3xl font-bold">Über uns</h1>
  <h2 class="text-2xl mt-4 font-bold mb-3">Die Marke PhotoLoom</h2>
  <h3 class="text-xl mt-4 font-bold mb-2">Wortmarke</h3>
  <div class="mb-2">
    PhotoLoom
  </div>
  <h3 class="text-xl mt-4 font-bold mb-3">Bildmarke</h3>
  <div class="mb-2">
    <img class="w-20 h-20 mb-2" src="/favicon.svg" alt="PhotoLoom GmbH Logo" />
    <p>Darstellung eines Wollknäuel mithilfe von Ellipsen.</p>
  </div>
  <h3 class="text-xl mt-4 font-bold mb-2">Wortbildmarke</h3>
  <div class="mb-2">
    <img class="w-50 h-20 mb-2" src="/wortbildmarke.png" alt="PhotoLoom GmbH Logo" />
    <p>Die Bildmarke von PhotoLoom dargestellt neben der Wortmarke.</p>
  </div>
  <h3 class="text-xl mt-4 font-bold mb-3">Mustermarke</h3>
  <div class="mb-2">
    <img class="w-45 h-20 rounded-xl mb-2" src="/mustermarke.svg" alt="PhotoLoom GmbH Logo" />
    <p>Die Bildmarke von PhotoLoom angeordnet wie gezeigt.</p>
  </div>
</div>