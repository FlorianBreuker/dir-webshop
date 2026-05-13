<script lang="ts">
  import { WebsiteName } from "../../../config.ts"

  const legalSections = [
    {
      title: 'Firmendaten',
      items: [
        { label: 'Firmenname', value: 'PhotoLoom GmbH' },
        { label: 'Firmenbuchnummer', value: 'FN 187187 d' },
        { label: 'Firmenbuchgericht', value: 'Handelsgericht Wien' },
        { label: 'Rechtsform', value: 'GmbH' },
        { label: 'UID-Nummer', value: 'ATU18718769' },
        { label: 'Web', value: 'https://dir-webshop.vercel.app', isLink: true },
        { label: 'E-Mail', value: 'contact@photoloom.io', isEmail: true },
        { label: 'Gewerbebezeichnung', value: 'Dienstleistungen in der Informationstechnik' },
        { label: 'Aufsichtsbehörde', value: 'Magistratisches Bezirksamt 1160 Wien' }
      ]
    },
    {
      title: 'Offenlegung nach Mediengesetz',
      items: [
        { label: 'Medieninhaber', value: 'PhotoLoom GmbH' },
        { label: 'Firmensitz', value: 'Huttengasse 41, Top 21, 1160, Wien' },
        { label: 'Unternehmensgegenstand', value: 'Die Herstellung und der Vertrieb von Software für Fotografen.' },
        { label: 'Geschäftsführer', value: 'Florian Breuker' },
        { label: 'Datenschutzbeauftragter', value: 'Florian Breuker' },
        { label: 'E-Mail', value: 'privacy@photoloom.io', isEmail: true },
        { label: 'Telefon', value: '+43 660 12345678' }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Impressum</title>
  <meta name="description" content="Impressum - {WebsiteName}" />
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
    <h1 class="text-3xl font-bold">Impressum</h1>
    <div class="bg-base-100">
      {#each legalSections as section}
        <div>
          <h2 class="text-2xl font-bold mt-4">
            {section.title}
          </h2>

          <ul class="space-y-2">
            {#each section.items as item}
              <li class="leading-relaxed">
                <span class="font-bold">{item.label}:</span>

                {#if item.isLink}
                  <a href={item.value} target="_blank" class="link hover:underline">
                    {item.value}
                  </a>
                {:else if item.isEmail}
                  <a href="mailto:{item.value}" class="link hover:underline">
                    {item.value}
                  </a>
                {:else}
                  <span class="">{item.value}</span>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
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
    <div class="mb-2">
      Die verwendete Font
      <a class="link"
         target="_blank"
         href="https://fonts.google.com/specimen/Open+Sans">Open Sans
      </a> ist frei verwendbar unter Verwendung ihrer
      <a class="link"
         target="_blank"
         href="https://fonts.google.com/specimen/Open+Sans/license">Lizenz
      </a>.
    </div>
    <div class="mb-2">
      Als Template für diese Website wurde
      <a class="link"
         target="_blank"
         href="https://github.com/scosman/CMSaasStarter">SaaS Starter
      </a> verwendet welches freiverwendbar unter ihrer
      <a class="link"
         target="_blank"
         href="https://github.com/scosman/CMSaasStarter/blob/main/LICENSE">Lizenz
      </a> ist.
    </div>
    <div class="mb-2">
      Anpassungen am Template wurden von
      <a class="link"
         target="_blank"
         href="https://github.com/FlorianBreuker/dir-webshop">Florian Breuker
      </a> vorgenommen.
    </div>
  </div>
</div>
