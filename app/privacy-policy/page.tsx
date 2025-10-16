import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Informativa sulla Privacy GDPR',
  description: 'Informativa sulla privacy conforme al GDPR (Regolamento UE 2016/679) e al Codice Privacy italiano. Scopri come trattiamo i tuoi dati personali.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Ultimo aggiornamento: 16 ottobre 2025
            </p>

            <div className="prose prose-sm md:prose max-w-none space-y-6 text-gray-700">
              {/* Introduzione */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduzione</h2>
                <p>
                  La presente Privacy Policy descrive le modalità di raccolta, utilizzo e protezione
                  dei dati personali degli utenti del sito web <strong>www.calcololotto.it</strong> (di seguito &quot;Sito&quot;).
                </p>
                <p>
                  Il Sito rispetta la normativa italiana ed europea in materia di protezione dei dati personali,
                  in particolare:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Regolamento UE 2016/679</strong> (GDPR - General Data Protection Regulation)
                  </li>
                  <li>
                    <strong>D.Lgs. 196/2003</strong> (Codice Privacy italiano) come modificato dal D.Lgs. 101/2018
                  </li>
                  <li>
                    <strong>Provvedimento del Garante Privacy del 10 giugno 2021</strong> in materia di cookie
                  </li>
                </ul>
              </section>

              {/* Titolare del trattamento */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Titolare del Trattamento</h2>
                <p>
                  Il Titolare del trattamento dei dati personali è:
                </p>
                <div className="bg-gray-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="font-semibold">Calcolo Lotto</p>
                  <p>Email: privacy@calcololotto.it</p>
                  <p>Sito web: www.calcololotto.it</p>
                </div>
                <p className="mt-3">
                  Per esercitare i diritti previsti dal GDPR o per qualsiasi informazione relativa
                  al trattamento dei dati personali, potete contattarci all&apos;indirizzo email sopra indicato.
                </p>
              </section>

              {/* Dati raccolti */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Dati Raccolti e Finalità del Trattamento</h2>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.1 Dati di Navigazione</h3>
                <p>
                  Durante la normale navigazione, i sistemi informatici e le procedure software preposte
                  al funzionamento del Sito acquisiscono alcuni dati personali la cui trasmissione è implicita
                  nell&apos;uso dei protocolli di comunicazione Internet.
                </p>
                <p>
                  Questi dati includono:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Indirizzo IP</li>
                  <li>Tipo di browser e dispositivo utilizzato</li>
                  <li>Sistema operativo</li>
                  <li>Orario di accesso</li>
                  <li>Pagine visitate</li>
                  <li>Durata della visita</li>
                </ul>
                <p>
                  <strong>Finalità:</strong> Questi dati sono utilizzati esclusivamente per ottenere informazioni
                  statistiche anonime sull&apos;uso del Sito e per controllarne il corretto funzionamento.
                </p>
                <p>
                  <strong>Base giuridica:</strong> Legittimo interesse del Titolare (art. 6, par. 1, lett. f) GDPR).
                </p>
                <p>
                  <strong>Conservazione:</strong> I dati sono conservati per un periodo massimo di 12 mesi.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.2 Cookie Tecnici</h3>
                <p>
                  Il Sito utilizza cookie tecnici necessari per il funzionamento e la sicurezza del sito,
                  in particolare per memorizzare le preferenze dell&apos;utente relative ai cookie.
                </p>
                <p>
                  <strong>Finalità:</strong> Garantire il corretto funzionamento del Sito e memorizzare
                  le scelte dell&apos;utente.
                </p>
                <p>
                  <strong>Base giuridica:</strong> Non richiedono consenso ai sensi del Provvedimento del
                  Garante del 10 giugno 2021, in quanto strettamente necessari.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.3 Cookie Analitici (Opzionali)</h3>
                <p>
                  Previo consenso esplicito, il Sito può utilizzare cookie analitici (come Google Analytics)
                  per raccogliere dati statistici aggregati e anonimi sul comportamento degli utenti.
                </p>
                <p>
                  <strong>Finalità:</strong> Migliorare l&apos;esperienza utente e ottimizzare le funzionalità del Sito.
                </p>
                <p>
                  <strong>Base giuridica:</strong> Consenso esplicito dell&apos;utente (art. 6, par. 1, lett. a) GDPR).
                </p>
                <p>
                  Per maggiori informazioni sui cookie, consulta la nostra{' '}
                  <a href="/cookie-policy" className="text-orange-600 underline hover:text-orange-700">
                    Cookie Policy
                  </a>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.4 Dati Inseriti dall&apos;Utente</h3>
                <p>
                  Il Sito offre una calcolatrice per il calcolo delle vincite del Lotto. Tutti i dati
                  inseriti dall&apos;utente nella calcolatrice (numeri giocati, importi, ruote) vengono
                  elaborati <strong>esclusivamente lato client</strong> (nel browser dell&apos;utente) e
                  <strong> non vengono mai inviati ai nostri server</strong>.
                </p>
                <p>
                  <strong>Finalità:</strong> Fornire il servizio di calcolo richiesto dall&apos;utente.
                </p>
                <p>
                  <strong>Base giuridica:</strong> Non applicabile, in quanto nessun dato viene raccolto o memorizzato.
                </p>
              </section>

              {/* Modalità del trattamento */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Modalità del Trattamento</h2>
                <p>
                  I dati personali sono trattati con strumenti automatizzati per il tempo strettamente
                  necessario a conseguire gli scopi per cui sono stati raccolti.
                </p>
                <p>
                  Sono adottate specifiche misure di sicurezza per prevenire la perdita dei dati,
                  usi illeciti o non corretti e accessi non autorizzati, in conformità a quanto previsto
                  dagli artt. 32-34 GDPR.
                </p>
              </section>

              {/* Comunicazione e diffusione */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Comunicazione e Diffusione dei Dati</h2>
                <p>
                  I dati personali raccolti potrebbero essere comunicati a:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Fornitori di servizi tecnici:</strong> società che forniscono servizi di hosting,
                    manutenzione e supporto tecnico del Sito
                  </li>
                  <li>
                    <strong>Strumenti di analisi:</strong> Google Analytics (se abilitato dall&apos;utente),
                    con IP anonimizzato
                  </li>
                  <li>
                    <strong>Autorità pubbliche:</strong> quando richiesto dalla legge o per tutelare i diritti del Titolare
                  </li>
                </ul>
                <p>
                  I dati personali non saranno in alcun modo diffusi o venduti a terzi.
                </p>
              </section>

              {/* Trasferimento dati extra-UE */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Trasferimento dei Dati Extra-UE</h2>
                <p>
                  Alcuni dei servizi utilizzati (come Google Analytics) potrebbero comportare il trasferimento
                  di dati verso paesi extra-UE. In tal caso, il trasferimento avviene nel rispetto delle
                  garanzie previste dal Capo V del GDPR e dalle decisioni di adeguatezza adottate dalla
                  Commissione Europea.
                </p>
              </section>

              {/* Diritti dell'interessato */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Diritti dell&apos;Interessato</h2>
                <p>
                  In qualità di interessato, hai il diritto di esercitare, ai sensi degli artt. 15-22 GDPR,
                  i seguenti diritti:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Diritto di accesso (art. 15):</strong> ottenere conferma dell&apos;esistenza di dati personali
                    che ti riguardano e riceverne copia
                  </li>
                  <li>
                    <strong>Diritto di rettifica (art. 16):</strong> ottenere la correzione di dati inesatti
                  </li>
                  <li>
                    <strong>Diritto di cancellazione (art. 17):</strong> ottenere la cancellazione dei dati
                    (&quot;diritto all&apos;oblio&quot;)
                  </li>
                  <li>
                    <strong>Diritto di limitazione (art. 18):</strong> ottenere la limitazione del trattamento
                  </li>
                  <li>
                    <strong>Diritto di portabilità (art. 20):</strong> ricevere i dati in formato strutturato
                    e trasmetterli ad altro titolare
                  </li>
                  <li>
                    <strong>Diritto di opposizione (art. 21):</strong> opporsi al trattamento dei dati per motivi
                    legittimi
                  </li>
                  <li>
                    <strong>Diritto di revoca del consenso:</strong> revocare il consenso in qualsiasi momento,
                    senza pregiudicare la liceitàdel trattamento basato sul consenso prima della revoca
                  </li>
                </ul>
                <p className="mt-4">
                  Per esercitare i tuoi diritti, puoi contattarci all&apos;indirizzo email:{' '}
                  <a href="mailto:privacy@calcololotto.it" className="text-orange-600 underline hover:text-orange-700">
                    privacy@calcololotto.it
                  </a>
                </p>
                <p>
                  Hai inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione
                  dei Dati Personali:
                </p>
                <div className="bg-gray-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="font-semibold">Garante per la Protezione dei Dati Personali</p>
                  <p>Piazza Venezia, 11 - 00187 Roma</p>
                  <p>Tel: (+39) 06.696771</p>
                  <p>Fax: (+39) 06.69677785</p>
                  <p>Email: garante@gpdp.it</p>
                  <p>PEC: protocollo@pec.gpdp.it</p>
                  <p>Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">www.garanteprivacy.it</a></p>
                </div>
              </section>

              {/* Modifiche */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Modifiche alla Privacy Policy</h2>
                <p>
                  Il Titolare si riserva il diritto di modificare o aggiornare la presente Privacy Policy
                  in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione
                  della data di ultimo aggiornamento.
                </p>
                <p>
                  Ti invitiamo a consultare regolarmente questa pagina per essere sempre informato sulle
                  modalità di raccolta e utilizzo dei tuoi dati personali.
                </p>
              </section>

              {/* Contatti */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Contatti</h2>
                <p>
                  Per qualsiasi domanda o richiesta relativa alla presente Privacy Policy o al trattamento
                  dei tuoi dati personali, puoi contattarci:
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p><strong>Email:</strong> privacy@calcololotto.it</p>
                  <p><strong>Sito web:</strong> www.calcololotto.it</p>
                </div>
              </section>

              {/* Consenso */}
              <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Consenso</h2>
                <p>
                  Utilizzando il Sito, accetti la presente Privacy Policy e acconsenti al trattamento
                  dei tuoi dati personali secondo le modalità e per le finalità sopra descritte.
                </p>
                <p className="mt-2">
                  Per i cookie analitici e di marketing, il consenso viene richiesto tramite il banner
                  cookie presente alla prima visita del Sito.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
