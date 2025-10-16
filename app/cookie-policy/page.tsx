import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | Informativa sui Cookie',
  description: 'Informativa completa sui cookie utilizzati da Calcolo Lotto, conforme al GDPR e alle normative italiane.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Cookie Policy
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Ultimo aggiornamento: 16 ottobre 2025
            </p>

            <div className="prose prose-sm md:prose max-w-none space-y-6 text-gray-700">
              {/* Cosa sono i cookie */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Cosa Sono i Cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al suo
                  terminale (computer, tablet, smartphone), dove vengono memorizzati per essere poi
                  ritrasmessi agli stessi siti alla successiva visita.
                </p>
                <p>
                  I cookie servono a diversi scopi: possono essere necessari per il funzionamento del
                  sito, possono servire per migliorare l'esperienza di navigazione, o possono essere
                  utilizzati per finalità di profilazione pubblicitaria.
                </p>
                <p>
                  Il sito <strong>www.calcololotto.it</strong> utilizza cookie in conformità al{' '}
                  <strong>Regolamento UE 2016/679 (GDPR)</strong>, al{' '}
                  <strong>D.Lgs. 196/2003 (Codice Privacy)</strong> e al{' '}
                  <strong>Provvedimento del Garante Privacy del 10 giugno 2021</strong>.
                </p>
              </section>

              {/* Tipologie di cookie */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Tipologie di Cookie Utilizzati</h2>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">2.1 Cookie Tecnici (Necessari)</h3>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                  <p className="font-semibold text-green-800 mb-2">✓ Sempre attivi - Non richiedono consenso</p>
                  <p>
                    Questi cookie sono strettamente necessari per il funzionamento del sito e non possono
                    essere disattivati. Non richiedono il consenso dell'utente ai sensi del Provvedimento
                    del Garante del 10 giugno 2021.
                  </p>
                </div>
                <p>
                  <strong>Finalità:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Memorizzare le preferenze dell'utente relative ai cookie</li>
                  <li>Garantire la sicurezza durante la navigazione</li>
                  <li>Permettere il corretto funzionamento della calcolatrice</li>
                </ul>
                <p>
                  <strong>Durata:</strong> I cookie tecnici hanno una durata di 12 mesi.
                </p>
                <p>
                  <strong>Cookie utilizzati:</strong>
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Finalità</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-mono">cookie-consent</td>
                        <td className="border border-gray-300 px-4 py-2">Memorizza preferenze cookie</td>
                        <td className="border border-gray-300 px-4 py-2">12 mesi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.2 Cookie Analitici</h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                  <p className="font-semibold text-blue-800 mb-2">🔔 Richiedono consenso esplicito</p>
                  <p>
                    Questi cookie raccolgono informazioni su come gli utenti utilizzano il sito, quali
                    pagine visitano e se riscontrano errori. Vengono utilizzati esclusivamente per
                    migliorare il funzionamento del sito.
                  </p>
                </div>
                <p>
                  <strong>Google Analytics:</strong> Utilizziamo Google Analytics con IP anonimizzato per
                  raccogliere dati statistici aggregati sul traffico e sull'utilizzo del sito.
                </p>
                <p>
                  <strong>Finalità:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Comprendere come gli utenti interagiscono con il sito</li>
                  <li>Analizzare le pagine più visitate</li>
                  <li>Migliorare l'esperienza di navigazione</li>
                  <li>Ottimizzare le funzionalità della calcolatrice</li>
                </ul>
                <p>
                  <strong>Durata:</strong> I cookie analitici hanno una durata variabile fino a 24 mesi.
                </p>
                <p>
                  <strong>Base giuridica:</strong> Consenso esplicito dell'utente (art. 6, par. 1, lett. a) GDPR).
                </p>
                <p>
                  <strong>Cookie di terze parti:</strong>
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Provider</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Finalità</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-mono">_ga</td>
                        <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                        <td className="border border-gray-300 px-4 py-2">Distinguere utenti</td>
                        <td className="border border-gray-300 px-4 py-2">24 mesi</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-mono">_ga_*</td>
                        <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                        <td className="border border-gray-300 px-4 py-2">Mantenere stato sessione</td>
                        <td className="border border-gray-300 px-4 py-2">24 mesi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">
                  Per maggiori informazioni su Google Analytics:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 underline hover:text-orange-700"
                  >
                    Privacy Policy Google
                  </a>
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.3 Cookie di Marketing</h3>
                <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded-r-lg mb-4">
                  <p className="font-semibold text-gray-800 mb-2">⚠️ Attualmente non utilizzati</p>
                  <p>
                    Questo sito non utilizza attualmente cookie di marketing o di profilazione.
                    In futuro, qualora decidessimo di utilizzarli, verrà richiesto il consenso esplicito
                    degli utenti.
                  </p>
                </div>
              </section>

              {/* Cookie di terze parti */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Cookie di Terze Parti</h2>
                <p>
                  Alcuni cookie presenti sul sito sono impostati da terze parti. Il sito non ha controllo
                  diretto su questi cookie e non può accedere ai dati da essi raccolti.
                </p>
                <p>
                  Le terze parti che installano cookie tramite questo sito sono:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> per analisi statistiche anonime (se abilitato dall'utente).
                    <br />
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700 text-sm"
                    >
                      Privacy Policy Google →
                    </a>
                  </li>
                </ul>
                <p>
                  Ti invitiamo a consultare le informative privacy delle rispettive terze parti per
                  conoscere come gestiscono i dati personali.
                </p>
              </section>

              {/* Gestione dei cookie */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Come Gestire i Cookie</h2>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">4.1 Banner Cookie</h3>
                <p>
                  Alla prima visita del sito, viene visualizzato un banner che permette di:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Accettare tutti i cookie (tecnici e analitici)</li>
                  <li>Accettare solo i cookie necessari (tecnici)</li>
                  <li>Personalizzare le preferenze selezionando quali categorie autorizzare</li>
                </ul>
                <p>
                  Le tue scelte vengono memorizzate e rispettate per 12 mesi. Puoi modificare le tue
                  preferenze in qualsiasi momento tramite il link presente nel footer del sito.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">4.2 Impostazioni del Browser</h3>
                <p>
                  Puoi gestire o eliminare i cookie anche attraverso le impostazioni del tuo browser.
                  Di seguito i link alle guide ufficiali dei principali browser:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700"
                    >
                      Safari (macOS)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/it-it/105082"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700"
                    >
                      Safari (iOS)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Nota:</strong> La disattivazione dei cookie tecnici potrebbe compromettere il
                  corretto funzionamento del sito o impedire l'accesso ad alcune funzionalità.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">4.3 Opt-out Google Analytics</h3>
                <p>
                  Puoi disattivare Google Analytics installando il componente aggiuntivo fornito da Google:
                </p>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm"
                >
                  Scarica componente aggiuntivo →
                </a>
              </section>

              {/* Diritti dell'utente */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Diritti dell'Utente</h2>
                <p>
                  In conformità al GDPR, hai il diritto di:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Rettificare dati inesatti</li>
                  <li>Richiedere la cancellazione dei dati</li>
                  <li>Limitare il trattamento</li>
                  <li>Opporti al trattamento</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                  <li>Proporre reclamo al Garante Privacy</li>
                </ul>
                <p className="mt-3">
                  Per esercitare questi diritti, contattaci all'indirizzo:{' '}
                  <a href="mailto:privacy@calcololotto.it" className="text-orange-600 underline hover:text-orange-700">
                    privacy@calcololotto.it
                  </a>
                </p>
              </section>

              {/* Aggiornamenti */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Aggiornamenti della Cookie Policy</h2>
                <p>
                  Questa Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultare
                  regolarmente questa pagina per essere informato sulle eventuali modifiche.
                </p>
                <p>
                  La data di ultimo aggiornamento è indicata in alto alla pagina.
                </p>
              </section>

              {/* Contatti */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contatti</h2>
                <p>
                  Per qualsiasi domanda relativa all'utilizzo dei cookie o alla presente Cookie Policy,
                  puoi contattarci:
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p><strong>Titolare del Trattamento:</strong> Calcolo Lotto</p>
                  <p><strong>Email:</strong> privacy@calcololotto.it</p>
                  <p><strong>Sito web:</strong> www.calcololotto.it</p>
                </div>
              </section>

              {/* Link utili */}
              <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Link Utili</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-orange-600 underline hover:text-orange-700 font-semibold"
                    >
                      → Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.garanteprivacy.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700 font-semibold"
                    >
                      → Garante per la Protezione dei Dati Personali
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9677876"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-700 font-semibold"
                    >
                      → Provvedimento Garante sui Cookie (10 giugno 2021)
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
