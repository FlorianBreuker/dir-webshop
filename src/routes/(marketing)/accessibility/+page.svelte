<script lang="ts">
  import { WebsiteName } from "../../../config.ts"
</script>

<svelte:head>
  <title>Barrierefreiheitserklärung</title>
  <meta name="description" content="Barrierefreiheitserklärung - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] container mx-auto max-w-2xl">
  <div class="absolute bottom-100 right-45 w-200 h-200 pointer-events-none opacity-20 sm:opacity-40 -z-10">
    <img
      src="/mustermarke.svg"
      alt=""
      class="w-full h-full object-contain -rotate-45"
    />
  </div>
  <div class="bg-base-100 px-20">
    <h1 class="text-3xl font-bold">Barrierefreiheitserklärung</h1>

    <div class="w-full my-8 leading-relaxed">
      <p>Die PhotoLoom GmbH ist bestrebt, ihre Website im Einklang mit dem Web-Zugänglichkeits-Gesetz (WZG) barrierefrei
        zugänglich zu machen.
        Diese Erklärung zur Barrierefreiheit gilt für die Website
        <a class="link"
           target="_blank"
           href="https://dir-webshop.vercel.app">dir-webshop.vercel.app
        </a> die im Rahmen eines Universitäts Projekts erstellt wurde.
      </p>
      <h2 class="text-2xl mt-4 font-bold mb-2">Stand der Vereinbarkeit mit den Anforderungen</h2>
      <p>
        Diese Website ist mit der Konformitätsstufe AA der
        „Richtlinien für barrierefreie Webinhalte -
        <a class="link"
           target="_blank"
           href="https://www.w3.org/TR/WCAG22/">WCAG 2.2
        </a>“ und mit dem geltenden Europäischen Standard EN 301 549
        V3.2.1 (2021-03) vereinbar.
      </p>
      <h2 class="text-2xl mt-4 font-bold mb-2">Erstellung der Erklärung zur Barrierefreiheit</h2>
      <p>
        Diese Erklärung wurde am 12. Mai 2026 erstellt. Als Grundlage für diese Erklärung wurde das Tool
        <a class="link"
           target="_blank"
           href="https://wave.webaim.org/">WAVE
        </a> verwendet.
      </p>
      <h2 class="text-2xl mt-4 font-bold mb-2">Feedback und Kontaktangaben</h2>
      <p>
        Falls Ihnen Barrieren auffallen, die eine barrierefreie Benutzung dieser Website verhindern, bitten wir Sie diese
        uns per E-Mail an
        <a class="link"
           target="_blank"
           href="mailto:accessibility@photoloom.io">accessibility@photoloom.io
        </a> zu senden. Ihre Anfrage wird in weiterer Folge von uns bearbeitet und dazu verwendet etwaige Barrieren zu
        beseitigen.
      </p>
      <h2 class="text-2xl mt-4 font-bold mb-2">Durchsetzungsverfahren</h2>
      <div>
        <div class="mb-2">Bei nicht zufriedenstellenden Antworten aus oben genannter
          Kontaktmöglichkeit können Sie sich mittels Beschwerde
          an die Österreichische Forschungsförderungsgesellschaft mbH (FFG) wenden. Die FFG nimmt über das Kontaktformular
          Beschwerden auf elektronischem Weg entgegen. <br>
        </div>
        <div class="mb-2">Das Kontaktformular der Beschwerdestelle finden Sie unter
          <a class="link"
             target="_blank"
             href="https://www.ffg.at/form/kontaktformular-beschwerdestelle">www.ffg.at/form/kontaktformular-beschwerdestelle
          </a>.
        </div>

        <div class="mb-2">
          Diese Beschwerden werden von der FFG dahingehend geprüft, ob sie sich auf Verstöße gegen die
          Vorgaben des
          Web-Zugänglichkeits-Gesetzes, insbesondere Mängel bei der Einhaltung der Barrierefreiheitsanforderungen, durch
          den
          Bund oder einer ihm zuordenbaren Einrichtung beziehen.
        </div>

        <div class="mb-2">
          Sofern die Beschwerde berechtigt ist, hat die FFG dem Bund oder den betroffenen Rechtsträgern
          Handlungsempfehlungen auszusprechen und Maßnahmen vorzuschlagen, die der Beseitigung der vorliegenden Mängel
          dienen.
        </div>

        <div class="mb-2">Weitere Informationen zum Beschwerdeverfahren finden Sie auf
          <a class="link"
             target="_blank"
             href="https://www.ffg.at/barrierefreiheit/beschwerdestelle">www.ffg.at/barrierefreiheit/beschwerdestelle
          </a>.
        </div>
      </div>
    </div>
  </div>
</div>