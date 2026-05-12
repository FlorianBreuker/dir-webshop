<script lang="ts">
  import {
    WebsiteName,
    WebsiteDescription
  } from "./../../config"
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
</svelte:head>

<div class="hero min-h-[50vh]">
  <div class="hero-content text-center py-4">
    <div class="max-w-xl">
      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        Die
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
        >intelligente</span
        >,
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
        >sichere</span
        > und
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
        >verkaufsorientierte</span
        >
        <span> Cloud für Fotografen</span>
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg">
        Verwalte deine Kunden, teile passwortgeschützte Galerien mit Unternehmen oder Einrichtungen und verkaufe deine
        Bilder automatisiert über unseren integrierten Webshop.
      </div>
      <div
        class="mt-6 md:mt-10 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="/login">
          <button class="btn btn-primary px-6">Jetzt 10GB kostenlos sichern</button>
        </a>
        <a
          href="/pricing"
        >
          <button class="btn btn-outline btn-primary px-6">Preise ansehen
          </button
          >
        </a>
      </div>
    </div>
  </div>
</div>
<div class="pb-8 px-7">
  <div
    class="flex gap-6 max-w-[1064px] mx-auto place-content-center flex-wrap"
  >
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1523698120758-030a38a90d16"
          class="max-w-sm rounded-lg shadow-2xl"
          alt="Collection"
        />
        <div>
          <h1 class="text-5xl font-bold">Sichere Smart Galleries</h1>
          <p class="py-6">
            Erstelle für all deine Klienten eine eigene Sammlung und mach sie für deine Kunden öffentlich mithilfe
            unserer passwortgeschützten Smart Galleries.
          </p>
          <button class="btn btn-primary">Mehr</button>
        </div>
      </div>
    </div>
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1522198734915-76c764a8454d"
          class="max-w-sm rounded-lg shadow-2xl"
          alt="Webshop"
        />
        <div>
          <h1 class="text-5xl font-bold">Integrierter Webshop</h1>
          <p class="py-6">
            Deine Kunden können direkt über ihre Smart Galleries Fotos als digitale Downloads oder Prints
            kaufen. Alles über unsere Plattform.
          </p>
          <button class="btn btn-primary">Mehr</button>
        </div>
      </div>
    </div>
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1594810205183-18a8b0ce6c13"
          class="max-w-sm rounded-lg shadow-2xl"
          alt="European Union"
        />
        <div>
          <h1 class="text-5xl font-bold">Cloud Lösungen</h1>
          <p class="py-6">
            Sicher auf unseren europäischen Servern gespeichert. Starte mit 10GB kostenlos und skaliere gemeinsam mit
            uns.
          </p>
          <button class="btn btn-primary">Mehr</button>
        </div>
      </div>
    </div>
  </div>
</div>