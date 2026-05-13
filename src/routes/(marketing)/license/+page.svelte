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

      <!--Leistungen von PhotoLoom-->
      <h2 class="text-2xl mt-4 font-bold mb-2">Leistungen von PhotoLoom</h2>
      <p class="mb-3">PhotoLoom stellt dem Kunden ein System zur Kunden-, Foto- und Verkaufsverwaltung als
        Software-as-a-Service ("SaaS") in der jeweils aktuellen Version zur
        Nutzung über das Internet zur Verfügung (nachfolgend "Software").</p>
      <p class="mb-3">PhotoLoom behält sich vor, die Software jederzeit
        weiterzuentwickeln. Der Kunde profitiert von einer Weiterentwicklung der Software und
        anerkennt im Gegenzug, dass Wartungszeiten auftreten können.</p>
      <p class="mb-3">PhotoLoom ist nur für die von PhotoLoom selbst bereitgestellten Leistungen verantwortlich. Aus
        allfälligen Funktionsstörungen der Software, die auf Eingriffe des Kunden oder beigezogener Dritter zurückführen
        sind, erwachsen dem Kunden keinerlei Ansprüche gegenüber PhotoLoom.</p>
      <p class="mb-3">PhotoLoom sorgt für eine angemessene Sicherung der Bilddaten des Kunden und bietet eine
        unentgeltliche Wiederherstellung von Bilddaten an, sofern der Verlust nicht vom Kunden verursacht wurde.</p>
      <p class="mb-3">Der Kunde hat die Möglichkeit über die kostenfreie Version die Funktion von PhotoLoom unbegrenzt
        zu testen. Alle darüber hinausgehenden Leistungen sind ausschließlich über kostenpflichtige Abonnements zu
        erwerben, welche monatlich (erster Werktag) abgebucht werden. Die Leistungen dieser Pläne sind
        <a class="link"
           href="/pricing"
           target="_blank">hier</a>
        aufgelistet.
      </p>

      <!--Nutzungsrechte-->
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

      <!--Pflichten des Kunden-->
      <h2 class="text-2xl mt-4 font-bold mb-2">Pflichten des Kunden</h2>
      <p class="mb-3">Der Kunde verpflichtet sich, die Software nur im Einklang mit dieser Lizenz zu verwenden und dafür
        zu sorgen, dass sich auch alle seine Nutzer (Mitarbeiter oder
        sonstige ihm zurechenbare Dritte) an die einschlägigen Regelungen halten. Der Kunde haftet PhotoBloom für
        etwaige Schäden aufgrund der Verletzung der den Kunden bzw dessen Nutzer treffenden Pflichten, insbesondere im
        Fall der rechtswidrigen Verwendung der Software.</p>
      <p class="mb-3">Der Kunde wird die Software nicht zur Speicherung oder Verbreitung gesetzeswidriger Inhalte
        verwenden.</p>
      <p class="mb-3">PhotoLoom kann den Zugang des Kunden zur Software bei Verstoß gegen diese Lizenz sperren. Zudem
        hat der Kunde die PhotoLoom im Zusammenhang mit einer solchen Sperre anfallenden Kosten zu ersetzen.</p>

      <!--Gewährleistung und Haftung-->
      <h2 class="text-2xl mt-4 font-bold mb-2">Gewährleistung und Haftung</h2>
      <p class="mb-3">PhotoLoom übernimmt keine Gewährleistung oder Haftung für die durchgehende Verfügbarkeit der
        Software und Softwarefehler. Der Kunde nimmt zur Kenntnis, dass es unmöglich ist, Fehler in der Software
        gänzlich auszuschließen.</p>
      <p class="mb-3">PhotoLoom kann nicht ausschließen, dass es aufgrund der Internetverbindungen des Kunden im Zuge
        von Datentransfer zu Datenverlust kommt. PhotoLoom übernimmt hierfür keine Haftung.</p>
      <p class="mb-3">Der Kunde wird PhotoLoom über allfällige Stöhrungen unverzüglich und in Kenntnis setzen, damit
        eine Behebung möglichst zeitnah durchgeführt werden kann.</p>

      <!--Laufzeit und Kündigung-->
      <h2 class="text-2xl mt-4 font-bold mb-2">Laufzeit und Kündigung</h2>
      <p class="mb-3">Die Mindestvertragslaufzeit wird auf einen Monat festgelegt.</p>
      <p class="mb-3">Nach Ablauf der Mindestvertragslaufzeit verlängert sich der Vertrag automatisch um einen
        Monat.</p>
      <p class="mb-3">Eine Kündigung erfolgt über diese E-Mail Adresse
        <a class="link"
           href="mailto:cancel@photoloom.io"
           target="_blank">cancel@photoloom.io</a>.
      </p>
      <p class="mb-3">Eine Kündigung muss bis am ersten des Folgemonats erfolgen. Eine Gutschrift für die restliche
        Vertragslaufzeit ist ausgeschlossen.</p>
      <p class="mb-3">Bei einer Kündigung werden alle Kundendaten nach Ablauf des letzten Monats unwiederuflich
        gelöscht.</p>
    </div>

    <!--Zahlungsbedingungen-->
    <h2 class="text-2xl mt-4 font-bold mb-2">Zahlungsbedingungen und finanzielle Konditionen</h2>
    <p class="mb-3">Alle Beträge verstehen sich jeweils exklusive der fälligen Umsatzsteuer und sonstiger Abgaben.</p>
    <p class="mb-3">Der Kunde trägt alle mit der Überweisung verbundenen Bankspesen und sonstigen Aufwendungen.</p>
    <p class="mb-3">Verkaufsprovisionen beim Verkauf über PhotoLoom sind aus den
      <a class="link"
         href="/pricing"
         target="_blank">Plänen</a>
      zu entnehmen.</p>
  </div>
</div>
