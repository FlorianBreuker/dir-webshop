<script lang="ts">
  import { WebsiteName } from "../../../config.ts"
</script>

<svelte:head>
  <title>Über uns</title>
  <meta name="description" content="Über uns - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-12 pt-[5vh] container mx-auto max-w-3xl px-4 font-sans ">
  <div class="absolute bottom-100 right-45 w-200 h-200 pointer-events-none opacity-20 sm:opacity-40 -z-10">
    <img
      src="/mustermarke.svg"
      alt=""
      class="w-full h-full object-contain -rotate-45"
    />
  </div>
  <div class="bg-base-100">
    <h1 class="text-4xl font-extrabold tracking-tight mb-8">Über PhotoLoom</h1>

    <p class="mb-6 leading-relaxed">
      PhotoLoom ist ein junges Unternehmen aus Wien und setzt sich als Ziel, Fotografen eine All-in-One Plattform zum
      Organisieren und Verkaufen zu bieten.
    </p>

    <p class="mb-6 leading-relaxed">
      Wir sind fünf Freunde die sich seit ihrer Schulzeit in Vorarlberg kennen und durch ihr Studium an der Technischen
      Univerisät nach Wien gezogen sind.
    </p>

    <h2 class="text-2xl font-bold mb-4">Unsere Markenidentität</h2>
    <p class="mb-6 leading-relaxed">
      Die Marke <b>PhotoLoom</b> steht für die Verbindung von Technik und Handwerk.
      Der "Loom" (Webstuhl) soll dabei dem Handwerk einen besonderen Wert zuweisen.
      Unsere Marke ist gemäß des Nizza-Abkommens der Klasse 42 (SaaS - Software as a Service) zugehörigig.
    </p>

    <h2 class="text-2xl font-bold mb-4">Bildmarke</h2>
    <img class="w-20 h-auto mb-3" src="/favicon.svg" alt="PhotoLoom Bildmarke" />
    <p class="mb-8">Eine Mischung aus der Blende einer Kamera und einem Wollknäuel, geformt aus 18 Ellipsen.
    </p>

    <h2 class="text-2xl font-bold mb-4">Wortbildmarke</h2>
    <img class="w-64 h-auto mb-3" src="/wortbildmarke.png" alt="PhotoLoom Wortbildmarke" />
    <p class="mb-8">
      Die Wortbildmarke ergibt sich durch ein Zusammenspiel von Wort- und Bildmarke.
    </p>


    <h2 class="text-2xl font-bold mb-4">Mustermarke</h2>
    <img class="w-45 h-auto mb-3" src="/mustermarke.svg" alt="PhotoLoom Mustermarke" />
    <p class="mb-8">Ein Muster zusammengesetzt aus versetzten Bildmarken, welches zur Wiedererkennung in unserem Produkt
      verwendet wird.</p>
  </div>
</div>

<style>
    img {
        transition: transform 0.3s ease;
    }

    img:hover {
        transform: scale(1.1);
    }
</style>