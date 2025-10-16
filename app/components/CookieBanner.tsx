'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      if (savedPreferences.analytics) {
        enableAnalytics();
      }
    }
  }, []);

  const enableAnalytics = () => {
    // Enable Google Analytics or other analytics tools here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const disableAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    if (prefs.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-orange-500 shadow-2xl">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  🍪 Utilizziamo i cookie
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Questo sito utilizza cookie tecnici necessari per il funzionamento e, previo consenso,
                  cookie analitici per migliorare l&apos;esperienza utente. I tuoi dati sono trattati nel
                  rispetto del GDPR (Regolamento UE 2016/679) e del Codice Privacy italiano (D.Lgs. 196/2003).
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/privacy-policy"
                    className="text-orange-600 hover:text-orange-700 underline"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    href="/cookie-policy"
                    className="text-orange-600 hover:text-orange-700 underline"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  Personalizza
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  Solo necessari
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors whitespace-nowrap"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Impostazioni Cookie
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Chiudi impostazioni"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Seleziona quali cookie desideri autorizzare. I cookie necessari sono sempre attivi
                per garantire il funzionamento del sito.
              </p>

              <div className="space-y-3">
                {/* Necessary Cookies */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="mt-1 w-4 h-4 text-orange-500"
                    aria-label="Cookie necessari"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-gray-900">Cookie Necessari</h4>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                        Sempre attivi
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Cookie tecnici indispensabili per il funzionamento del sito (es. preferenze cookie,
                      sicurezza). Non richiedono consenso secondo il Provvedimento Garante del 10 giugno 2021.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 w-4 h-4 text-orange-500 accent-orange-500"
                    aria-label="Cookie analitici"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900">Cookie Analitici</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Raccolgono dati in forma anonima per comprendere come gli utenti utilizzano il sito
                      e migliorare l&apos;esperienza di navigazione (es. Google Analytics con IP anonimizzato).
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 w-4 h-4 text-orange-500 accent-orange-500"
                    aria-label="Cookie di marketing"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900">Cookie di Marketing</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Utilizzati per mostrare pubblicità pertinenti e misurare l&apos;efficacia delle campagne
                      pubblicitarie. Attualmente non utilizzati su questo sito.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <button
                  onClick={acceptSelected}
                  className="flex-1 px-6 py-2 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                >
                  Salva preferenze
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
