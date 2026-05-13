<script lang="ts">
  import { WebsiteName } from "../../../config.ts"
</script>

<svelte:head>
  <title>Datenschutzerklärung</title>
  <meta name="description" content="Datenschutzerklärung - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] container mx-auto max-w-2xl">
  <div class="absolute bottom-100 right-45 w-200 h-200 pointer-events-none opacity-20 sm:opacity-40 -z-10">
    <img
      src="/mustermarke.svg"
      alt=""
      class="w-full h-full object-contain -rotate-45"
    />
  </div>
  <div class="bg-base-100 p-20">
    <h1 class="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
    <div class="w-full my-8">
      <p class="mb-3 leading-relaxed">Uns als PhotoLoom GmbH (PhotoLoom) liegt der Schutz Ihrer Daten am Herzen. Im
        Rahmen
        unserer Datenschutzerklärung informieren wir Sie darüber wie wir als Anbieter von Software as a Service (SaaS)
        Ihre personenbezognenen Daten verarbeiten und speichern.</p>
      <p class="mb-3 leading-relaxed">Wir als PhotoLoom erheben und verarbeiten Ihre Daten nur auf Grundlage der
        Datenschutzgrundverordnung (DSGVO) und des Datenschutzgesetz (DSG).</p>
      <p class="mb-3 leading-relaxed">Bereits beim Zugriff auf unsere Website werden Daten zu Ihrer Verbindungen (IP
        Adresse und Dauer
        der Sitzung) erfasst und ist technisch notwendig. Rechtsgrundlage dafür ist unser berechtigtes Interesse
        (Artikel 6 Absatz 1f DSGVO) an der Analyse des Betriebs unserer Software.</p>

      <!--Kontaktdaten-->
      <h2 class="text-2xl font-bold mb-3">Kontaktdaten</h2>
      <p class="mb-3">PhotoLoom GmbH, Huttengasse 41 Top 21, 1160 Wien</p>
      <p class="mb-3">Anfragen zum Thema Datenschutz richten Sie bitte an unseren Verantwortlichen Florian Breuker per
        Email an
        <a
          class="link"
          target="_blank"
          href="mailto:privacy@photoloom.io">privacy@photoloom.io
        </a>.
      </p>

      <!--Datenverarbeitung nach Kontakt-->
      <h2 class="text-2xl font-bold mb-3">Datenverarbeitung nach Kontakt</h2>
      <p class="mb-3">Bei Kontakt mit uns über das
        <a class="link"
           target="_blank"
           href="/contact">Kontaktformular
        </a> oder per E-Mail, werden Ihre E-Mail Adresse, Name und Firmenstammdaten zwecks der weiteren
        Kontaktaufnahme und Bearbeitung Ihrer Anfragen für
        sechs Monate von uns gespeichert.
      </p>

      <!--Datenverarbeitung durch Vertragsabschluss-->
      <h2 class="text-2xl font-bold mb-3">Datenverarbeitung durch Vertragsabschluss</h2>
      <p class="mb-3">Im Rahmen des Vertragsabschluss werden folgende Daten von Ihnen bei uns abgespeichert: Anschrift,
        Kontaktdaten, Bankdaten und Vertragsdaten basierend auf (Artikel 6 Absatz 1b DSGVO) von uns gespeichert.
      </p>

      <!--Datenverarbeitung durch Nutzung als Kunde-->
      <h2 class="text-2xl font-bold mb-3">Datenverarbeitung durch Nutzung als Kunde</h2>
      <p class="mb-3">Im Rahmen der Nutzung werden folgende Daten von Ihnen bei uns abgespeichert: IP Adresse und
        Kommunikationsdaten basierend auf unserem berechtigten Interessen des fehlerfreien Betriebs (Crashreports)
        unserer Software (Artikel 6 Absatz 1f DSGVO) von uns gespeichert.
      </p>
      <p class="mb-3">Zudem werden hochgeladene Inhalte unserer Kunden und deren Verkaufszahlen nach Ihrer
        Einwilligung (Artikel 6 Absatz 1a DSGVO) abgespeichert.</p>

      <!--Datenverarbeitung durch Nutzung der Verkaufsplattform-->
      <h2 class="text-2xl font-bold mb-3">Datenverarbeitung durch Nutzung der Verkaufsplattform</h2>
      <p class="mb-3">Im Rahmen der Nutzung werden folgende Daten von Ihnen bei uns abgespeichert: IP Adresse und
        Kommunikationsdaten basierend auf unserem berechtigten Interessen des fehlerfreien Betriebs (Crashreports)
        unserer Software (Artikel 6 Absatz 1f DSGVO) von uns gespeichert.
      </p>
      <p class="mb-3">Zudem werden werden beim Kauf Name, Bankdaten und Anschrift an den externen Zahlungsdienstleister
        Stripe weitergegeben.</p>

      <!--Cookies-->
      <h2 class="text-2xl font-bold mb-3">Cookies</h2>
      <p class="mb-3">
        Die Website von PhotoLoom verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die mit
        Hilfe des Browsers auf Ihrem Gerät abgelegt werden. Sie ermöglichen es uns, Sie beim nächsten Besuch
        wiederzuerkennen und eine nutzungsfreundliche Oberfläche zu bieten. Wenn Sie dies nicht wünschen, so können Sie
        die Cookies beim Besuch dieser Website ablehnen. Bei der Ablehnung von Cookies kann die Funktionalität
        unserer Website eingeschränkt sein. Als rechtliche Grundlage dafür dient die Einwillung (Artikel 6 Absatz 1a
        DSGVO).
      </p>

      <!--Google Fonts-->
      <h2 class="text-2xl font-bold mb-3">Google Fonts</h2>
      <p class="mb-3">
        Die Website von PhotoLoom verwendet "Open Sans" als Schriftart, welche von Google zur Verfügung gestellt
        wird.
      </p>
      <p class="mb-3">
        Beim Aufrufen von PhotoLoom lädt Ihr Gerät Schriftarten (Fonts) und speichert diese auf Ihrem Gerät ab.
      </p>
      <p class="mb-3">
        Die Nutzung von "Open Sans" dient der einheitlichen Darstellung von Inhalten, kann jedoch dazu folgen, dass
        Google Cookies auf Ihrem Gerät speichert. Rechtliche Grundlage dafür ist berechtigtes
        Interesse an einem einheitlichen Gesamtbild der Website (Artikel 6 Absatz 1f DSGVO).
      </p>
      <p class="mb-3">
        Informationen zu Google:
      </p>
      <ul class="list-disc pl-6 mb-3">
        <li><a class="link"
               target="_blank"
               href="https://developers.google.com/fonts/faq">developers.google.com/fonts/faq
        </a></li>
        <li><a class="link"
               target="_blank"
               href="https://policies.google.com/privacy">policies.google.com/privacy
        </a></li>
      </ul>

      <!--Speicherdauer-->
      <h2 class="text-2xl font-bold mb-3">Speicherdauer</h2>
      <p class="mb-3">
        Die Speicherdauer von Log-Dateien beträgt 3 Monate.
      </p>
      <p class="mb-3">
        Daten, die zur Bearbeitung von Anfragen und zur Kontaktaufnahme mit Ihnen erforderlich sind, werden
        spätestens 3 Jahre nach Ende der Vertragsbeziehung oder dem letzten Kontakt mit Ihnen gelöscht.
      </p>
      <p class="mb-3">
        Bei personenbezogene Daten die zum Zeitpunkt des Vertragsabschlusses gespeichert wurden erfolgt die Löschung
        aufgrund steuerrechtlichen Vorschriften nach 10 Jahre.
      </p>
      <p class="mb-3">
        Auf Basis Ihrer Einwilligung gespeicherte Daten speichern wir bis zum Widerruf der Einwilligung oder bis zur
        Beendigung des Vertragsverhältnisses.
      </p>


      <!--Betroffenenrechte-->
      <h2 class="text-2xl font-bold mb-3">Betroffenenrechte</h2>
      <p class="mb-3">Als Nutzer unserer Website haben sie folgende Rechte aufgrund der DSGVO:</p>
      <ul class="list-disc pl-6 mb-3">
        <li>Auskunft</li>
        <li>Berichtigung</li>
        <li>Löschung</li>
        <li>Einschränkung</li>
        <li>Datenübertragbarkeit</li>
        <li>Widerspruch</li>
      </ul>

      <!--Beschwerderecht-->
      <h2 class="text-2xl font-bold mb-3">Beschwerderecht</h2>
      <p class="mb-3">Wenn Sie der Ansicht sind, dass PhotoLoop gegen die Bestimmungen der DSGVO verstößt, haben Sie das
        Recht auf Beschwerde bei der österreichischen
        <a class="link"
           target="_blank"
           href="https://www.dsb.gv.at">Datenschutzbehörde
        </a>.</p>
    </div>
  </div>
</div>