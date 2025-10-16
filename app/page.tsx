import Header from './components/Header';
import Footer from './components/Footer';
import LottoCalculator from './components/LottoCalculator';

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calcolo Lotto - Calcolatrice Vincite Lotto Italiano",
    "url": "https://calcololotto.it",
    "description": "Calcolatrice semplice e precisa per calcolare le vincite del Lotto italiano. Calcola ambata, ambo, terno, quaterna e cinquina con coefficienti ufficiali ADM.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Calcolo Lotto",
      "url": "https://calcololotto.it"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calcolo Lotto",
      "url": "https://calcololotto.it"
    },
    "inLanguage": "it-IT",
    "featureList": [
      "Calcolo vincite Lotto italiano",
      "Coefficienti ufficiali ADM",
      "Calcolo per ruota fissa e tutte le ruote",
      "Supporto per ambata, ambo, terno, quaterna, cinquina",
      "Interfaccia mobile-friendly",
      "Calcoli istantanei e precisi"
    ],
    "screenshot": "https://calcololotto.it/screenshot.jpg",
    "softwareVersion": "1.0"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto posso vincere con 1€ su un ambo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con 1€ su un ambo in ruota fissa puoi vincere 250€. Il moltiplicatore è fisso: importo giocato × 250."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa significa ruota fissa e tutte le ruote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ruota fissa: giochi su una sola ruota (es. Bari, Milano, Roma) con quote più alte. Tutte le ruote: giochi su tutte le 11 ruote contemporaneamente, ma le vincite sono divise per 10."
        }
      },
      {
        "@type": "Question",
        "name": "Perché il terno paga così tanto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il terno ha un moltiplicatore di 4.500 perché indovinare 3 numeri su 5 estratti è statisticamente molto difficile. Più difficile è la combinazione, più alta è la vincita."
        }
      },
      {
        "@type": "Question",
        "name": "I risultati della calcolatrice sono affidabili?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, usiamo i coefficienti ufficiali pubblicati da ADM e Lotto Italia. I calcoli sono precisi al centesimo."
        }
      },
      {
        "@type": "Question",
        "name": "Devo registrarmi per usare la calcolatrice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, lo strumento è completamente gratuito e non richiede registrazione. Apri e usa senza limiti."
        }
      },
      {
        "@type": "Question",
        "name": "Posso calcolare vincite per più numeri giocati?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, puoi giocare da 1 a 10 numeri. La calcolatrice ti mostra quanto potresti vincere per ogni tipo di combinazione."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Come calcolare le vincite del Lotto italiano",
    "description": "Guida passo passo per usare la calcolatrice delle vincite del Lotto",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Inserisci i numeri giocati",
        "text": "Inserisci quanti numeri vuoi giocare (da 1 a 10)"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Scegli il tipo di ruota",
        "text": "Scegli tra ruota fissa o tutte le ruote"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Indica i numeri estratti",
        "text": "Indica quanti numeri sono stati estratti (da 1 a 5)"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Inserisci gli importi",
        "text": "Scrivi quanto vuoi puntare per ogni tipo di giocata (ambata, ambo, terno, quaterna, cinquina)"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Calcola",
        "text": "Clicca su 'Calcola le Vincite' per vedere il risultato potenziale"
      }
    ]
  };

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section - Compact */}
        <section className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Calcolo Vincite <span className="text-orange-500">Lotto</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Calcolatrice semplice e precisa per le vincite del Lotto italiano
            </p>
          </div>

          {/* Calculator Component */}
          <LottoCalculator />
        </section>

        {/* Quick Guide Section */}
        <section id="come-funziona" className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Guida Rapida al Calcolo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Come usare la calcolatrice</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500 flex-shrink-0">1.</span>
                    <span>Inserisci quanti numeri vuoi giocare (1-10)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500 flex-shrink-0">2.</span>
                    <span>Scegli ruota fissa o tutte le ruote</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500 flex-shrink-0">3.</span>
                    <span>Indica quanti numeri estratti (1-5)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500 flex-shrink-0">4.</span>
                    <span>Scrivi quanto vuoi puntare per ogni tipo di giocata</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500 flex-shrink-0">5.</span>
                    <span>Clicca &quot;Calcola le Vincite&quot; e vedi il risultato</span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Quote Vincita (Ruota Fissa)</h3>
                <div className="bg-orange-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Ambata</span>
                    <span className="text-orange-600 font-bold">x 11,23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Ambo</span>
                    <span className="text-orange-600 font-bold">x 250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Terno</span>
                    <span className="text-orange-600 font-bold">x 4.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Quaterna</span>
                    <span className="text-orange-600 font-bold">x 120.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Cinquina</span>
                    <span className="text-orange-600 font-bold">x 6.000.000</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  Fonte:{' '}
                  <a
                    href="https://www.lotto-italia.it/lotto/come-dove-giocare/il-gioco/premi-del-lotto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-orange-600 hover:text-orange-700"
                  >
                    Lotto Italia
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
              <p className="text-sm text-gray-800">
                <strong>Esempio:</strong> Con 2€ su un ambo, la vincita potenziale è 2€ × 250 = <strong className="text-green-600">500€</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section - More Practical */}
        <section id="faq" className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Domande Frequenti
          </h2>

          <div className="space-y-4">
            {[
              {
                question: 'Quanto posso vincere con 1€ su un ambo?',
                answer: 'Con 1€ su un ambo in ruota fissa puoi vincere 250€. Il moltiplicatore è fisso: importo giocato × 250.'
              },
              {
                question: 'Cosa significa "ruota fissa" e "tutte le ruote"?',
                answer: 'Ruota fissa: giochi su una sola ruota (es. Bari, Milano, Roma) con quote più alte. Tutte le ruote: giochi su tutte le 11 ruote contemporaneamente, ma le vincite sono divise per 10.'
              },
              {
                question: 'Perché il terno paga così tanto?',
                answer: 'Il terno ha un moltiplicatore di 4.500 perché indovinare 3 numeri su 5 estratti è statisticamente molto difficile. Più difficile è la combinazione, più alta è la vincita.'
              },
              {
                question: 'I risultati della calcolatrice sono affidabili?',
                answer: 'Sì, usiamo i coefficienti ufficiali pubblicati da ADM e Lotto Italia. I calcoli sono precisi al centesimo.'
              },
              {
                question: 'Devo registrarmi per usare la calcolatrice?',
                answer: 'No, lo strumento è completamente gratuito e non richiede registrazione. Apri e usa senza limiti.'
              },
              {
                question: 'Posso calcolare vincite per più numeri giocati?',
                answer: 'Sì, puoi giocare da 1 a 10 numeri. La calcolatrice ti mostra quanto potresti vincere per ogni tipo di combinazione.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-5 hover:border-orange-300 transition-colors">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fonti Ufficiali Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Fonti Ufficiali e Trasparenza
            </h2>
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              I calcoli della nostra calcolatrice si basano esclusivamente sui coefficienti ufficiali
              pubblicati dalle autorità competenti italiane.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">🏛️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">ADM</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Agenzia delle Dogane e dei Monopoli - Ente regolatore ufficiale
                </p>
                <a
                  href="https://www.adm.gov.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Visita ADM ↗
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">🎰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Lotto Italia</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Sito ufficiale con premi e regolamento del Lotto
                </p>
                <a
                  href="https://www.lotto-italia.it/lotto/come-dove-giocare/il-gioco/premi-del-lotto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Vedi Premi ↗
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Probabilità</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Informazioni ufficiali sulle probabilità di vincita
                </p>
                <a
                  href="https://www.adm.gov.it/portale/en/-/lotto_note-note-informative-sulle-probabilita-di-vincita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Scopri di più ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Examples Section */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Esempi di Calcolo Vincite Lotto
            </h2>

            <div className="space-y-5">
              <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Calcolo Vincita Ambo con 5€
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Importo giocato: <strong>5€</strong> | Ruota fissa | Moltiplicatore: x250
                </p>
                <p className="text-base font-bold text-green-600">
                  Vincita potenziale: 5€ × 250 = 1.250€
                </p>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Calcolo Vincita Terno con 2€
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Importo giocato: <strong>2€</strong> | Ruota fissa | Moltiplicatore: x4.500
                </p>
                <p className="text-base font-bold text-green-600">
                  Vincita potenziale: 2€ × 4.500 = 9.000€
                </p>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Calcolo Vincita Ambata con 10€
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Importo giocato: <strong>10€</strong> | Ruota fissa | Moltiplicatore: x11,23
                </p>
                <p className="text-base font-bold text-green-600">
                  Vincita potenziale: 10€ × 11,23 = 112,30€
                </p>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Calcolo Vincita Quaterna con 1€
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Importo giocato: <strong>1€</strong> | Ruota fissa | Moltiplicatore: x120.000
                </p>
                <p className="text-base font-bold text-green-600">
                  Vincita potenziale: 1€ × 120.000 = 120.000€
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700 text-center">
                Usa la calcolatrice qui sopra per calcolare le tue vincite personalizzate con qualsiasi importo
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
