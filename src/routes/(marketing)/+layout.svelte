<script lang="ts">
  import { WebsiteName } from "../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  let cookie = $state(true);

  const disableCookie = () => {
    cookie = false
  }
</script>

<div class="flex flex-col min-h-screen">

  <div class="navbar container mx-auto z-30">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">
        <img class="w-8 h-8" src="/favicon.svg" alt="PhotoLoom GmbH Logo" />
        {WebsiteName}
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
        <li class="md:mx-2"><a href="/pricing">Preise</a></li>
        <li class="md:mx-2"><a href="/about">Über uns</a></li>
      </ul>
    </div>
  </div>

  <main class="grow font-sans">
    {@render children?.()}
  </main>

  {#if cookie}
    <div class="fixed bottom-4 right-4 z-50">
      <div class="card w-96 bg-base-100 card-md shadow-sm border border-base-200">
        <div class="card-body">
          <h2 class="card-title">Cookies</h2>
          <p>Wir verwenden Cookies auf unserer Website um unsere Website stätig zu verbessern. Hier geht es zur <a
            href="/privacy" class="link">Datenschutzerklärung</a>.</p>
          <div class="justify-end card-actions">
            <button onclick={disableCookie} class="btn">Ablehnen</button>
            <button onclick={disableCookie} class="btn btn-primary">Akzeptieren</button>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <div class="border-t max-w-[1000px] mx-auto w-full"></div>

  <footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
    <aside>
      <img class="w-20 h-20" src="/favicon.svg" alt="PhotoLoom GmbH Logo" />
      <p>
        <b>PhotoLoom GmbH</b>
        <br />
        Skaliere gemeinsam mit uns!
      </p>
    </aside>
    <nav>
      <h2 class="footer-title">Leistungen</h2>
      <a href="/pricing" class="link link-hover">Preise</a>
    </nav>
    <nav>
      <h2 class="footer-title">Unternehmen</h2>
      <a href="/about" class="link link-hover">Über uns</a>
      <a href="/contact" class="link link-hover">Kontakt</a>
    </nav>
    <nav>
      <h2 class="footer-title">Rechtliches</h2>
      <a href="/legal" class="link link-hover">Impressum</a>
      <a href="/license" class="link link-hover">Lizenz</a>
      <a href="/privacy" class="link link-hover">Datenschutzerklärung</a>
      <a href="/accessibility" class="link link-hover">Barrierefreiheitserklärung</a>
    </nav>
  </footer>

  <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - Alle Rechte vorbehalten von PhotoLoom GmbH - Ein fiktives Projekt von
        einem Studenten der TU Wien - Es werden keinerlei Leistungen angeboten</p>
    </aside>
  </footer>

</div>