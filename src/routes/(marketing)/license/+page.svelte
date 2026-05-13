<script lang="ts">
  import { WebsiteName } from "../../../config.ts"
</script>

<svelte:head>
  <title>Lizenz</title>
  <meta name="description" content="Lizenz - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] container mx-auto max-w-2xl">
  <div class="absolute bottom-100 right-45 w-200 h-200 pointer-events-none opacity-20 sm:opacity-40 -z-10">
    <img
      src="/mustermarke.svg"
      alt=""
      class="w-full h-full object-contain -rotate-45"
    />
  </div>
  <div class="bg-base-100">
    <h1 class="text-3xl font-bold mb-8">Lizenz</h1>
    <p class="leading-relaxed mb-3">Die PhotoLoom GmbH (PhotoLoom), Huttengasse 41, Top 21, 1160 Wien,
      entwickelt, vertreibt und verwaltet Software für selbständige Fotografen und Fotostudios.</p>
    <p class="leading-relaxed">
      Diese Lizenz regelt die Rechte und Pflichten zwischen PhotoBloom dessen Kunden. Kunden von PhotoBloom sind
      Unternehmer im Sinne des § 1 Abs 2 KSchG.</p>

    <div class="w-full my-8">
      <h2 class="text-2xl mt-4 font-bold mb-2">Leistungen von PhotoLoom</h2>
      <p class="mb-3"></p>

      <h2 class="text-2xl mt-4 font-bold mb-2">Nutzungsrechte</h2>
      <p class="mb-3">Alle Rechte an der Software stehen PhotoLoom zu. Dem Kunden wir lediglich das nicht übertragbare
        und nicht
        unterlizenzierbare Recht eingeräumt, die Software im vereinbarten Umfang und während der Vertragsdauer zu
        benutzen.</p>
      <p class="mb-3">Es ist dem Kunden nicht gestattet, die Software an Dritte zu überlassen.</p>
      <p class="mb-3">Sofern keine zusätzliche Vereinbarung getroffen wird, werden dem Kunden keine weitergehenden
        Rechte
        an der Software übertragen. Insbesondere erwirbt der Kunde keine Rechte an der
        Software oder der Marke PhotoLoom.</p>
      <p class="mb-3">Der Kunde kann jederzeit seinen Nutzungsplan zu einem nächst höheren Plan upgraden.</p>
      <p class="mb-3">Bei Überschreitung der im Nutzungsplan inkludierten Leistung (insbesondere Speicherplatz) wird in
        Abstimmung mit dem Kunden eine Anpassung des Nutzungsplans vorgenommen.</p>
      <p class="mb-3"></p>
      <h2 class="text-2xl mt-4 font-bold mb-2">Pflichten des Kunden</h2>

      <h2 class="text-2xl mt-4 font-bold mb-2">Gewährleistung und Haftung</h2>

    </div>
  </div>
</div>