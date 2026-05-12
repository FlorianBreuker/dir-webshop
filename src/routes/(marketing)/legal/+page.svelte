<script lang="ts">
  import { WebsiteName } from "../../../config.ts"
</script>

<svelte:head>
  <title>Impressum</title>
  <meta name="description" content="Impressum - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] container mx-auto max-w-2xl">
  <h1 class="text-3xl font-bold">Impressum</h1>


  <h2 class="text-2xl mt-4 font-bold mb-2">Urheberrechtshinweise und Lizenzen</h2>
  <div class="mb-2">
    Alle Bilder dieser Website sind von
    <a class="link"
       target="_blank"
       href="https://unsplash.com">Unsplash
    </a>
    und sind frei verwendbar unter Verwendung ihrer
    <a class="link"
       target="_blank"
       href="https://unsplash.com/license">Lizenz
    </a>.
  </div>
  <div class="mb-2">
    Alle verwendeten Icons sind von
    <a class="link"
       target="_blank"
       href="https://lucide.dev/">Lucide
    </a> und sind frei verwendbar unter Verwendung ihrer
    <a class="link"
       target="_blank"
       href="https://github.com/lucide-icons/lucide/blob/main/LICENSE">Lizenz
    </a>.
  </div>
</div>
