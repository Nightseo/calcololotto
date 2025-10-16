'use client';

import { useState } from 'react';

interface BetType {
  name: string;
  multiplier: number;
  amount: number;
}

export default function LottoCalculator() {
  const [numeriGiocati, setNumeriGiocati] = useState<number>(1);
  const [ruota, setRuota] = useState<'tutte' | 'ruota-fissa'>('ruota-fissa');
  const [numeriEstratti, setNumeriEstratti] = useState<number>(1);

  const [betTypes, setBetTypes] = useState<BetType[]>([
    { name: 'Ambata', multiplier: 11.23, amount: 0 },
    { name: 'Ambo', multiplier: 250, amount: 0 },
    { name: 'Terno', multiplier: 4500, amount: 0 },
    { name: 'Quaterna', multiplier: 120000, amount: 0 },
    { name: 'Cinquina', multiplier: 6000000, amount: 0 },
    { name: 'Determinato', multiplier: 55, amount: 0 },
  ]);

  const [showResults, setShowResults] = useState<boolean>(false);
  const [calculatedResults, setCalculatedResults] = useState<{winnings: number; total: number}[]>([]);
  const [totalWinnings, setTotalWinnings] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const updateBetAmount = (index: number, value: string) => {
    const amount = parseFloat(value) || 0;
    const newBetTypes = [...betTypes];
    newBetTypes[index].amount = amount;
    setBetTypes(newBetTypes);
    setShowResults(false); // Hide results when user changes input
  };

  const calculateWinnings = () => {
    // Simulate calculation delay for better UX and more page interaction
    setIsCalculating(true);

    setTimeout(() => {
      const results = betTypes.map(bet => ({
        winnings: bet.amount * bet.multiplier,
        total: bet.amount * bet.multiplier
      }));

      const total = results.reduce((sum, result) => sum + result.winnings, 0);

      setCalculatedResults(results);
      setTotalWinnings(total);
      setShowResults(true);
      setIsCalculating(false);
    }, 800); // Small delay to create engagement
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const resetCalculator = () => {
    setBetTypes(betTypes.map(bet => ({ ...bet, amount: 0 })));
    setNumeriGiocati(1);
    setNumeriEstratti(1);
    setShowResults(false);
    setCalculatedResults([]);
    setTotalWinnings(0);
  };

  const hasValidInput = betTypes.some(bet => bet.amount > 0);

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 max-w-4xl mx-auto border border-gray-100">
      {/* Pre-fields - Compact */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
        <div>
          <label htmlFor="numeri-giocati" className="block text-xs font-semibold text-gray-700 mb-1">
            Numeri Giocati
          </label>
          <input
            type="number"
            id="numeri-giocati"
            min="1"
            max="10"
            value={numeriGiocati}
            onChange={(e) => setNumeriGiocati(parseInt(e.target.value) || 1)}
            className="w-full px-2 py-2 text-sm font-semibold border border-gray-300 bg-white rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
            placeholder="1-10"
          />
        </div>

        <div>
          <label htmlFor="ruota" className="block text-xs font-semibold text-gray-700 mb-1">
            Tipo Ruota
          </label>
          <select
            id="ruota"
            value={ruota}
            onChange={(e) => setRuota(e.target.value as 'tutte' | 'ruota-fissa')}
            className="w-full px-2 py-2 text-sm font-semibold border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white cursor-pointer"
          >
            <option value="ruota-fissa">Ruota Fissa</option>
            <option value="tutte">Tutte le Ruote</option>
          </select>
        </div>

        <div>
          <label htmlFor="numeri-estratti" className="block text-xs font-semibold text-gray-700 mb-1">
            Numeri Estratti
          </label>
          <input
            type="number"
            id="numeri-estratti"
            min="1"
            max="5"
            value={numeriEstratti}
            onChange={(e) => setNumeriEstratti(parseInt(e.target.value) || 1)}
            className="w-full px-2 py-2 text-sm font-semibold border border-gray-300 bg-white rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
            placeholder="1-5"
          />
        </div>
      </div>

      {/* Bet Types - Compact Cards */}
      <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
        {betTypes.map((bet, index) => (
          <div
            key={bet.name}
            className="bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 hover:border-orange-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Bet Type Name */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">{bet.name}</h3>
                  <p className="text-xs text-gray-600">x {bet.multiplier.toLocaleString('it-IT')}</p>
                </div>
              </div>

              {/* Input Amount */}
              <div className="w-24 sm:w-32">
                <div className="relative">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">€</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={bet.amount || ''}
                    onChange={(e) => updateBetAmount(index, e.target.value)}
                    className="w-full pl-5 pr-2 py-1.5 text-sm font-semibold border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Result - Only shown after calculation */}
              {showResults && (
                <div className="w-24 sm:w-32 animate-fade-in">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-2 py-1.5">
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      {formatCurrency(calculatedResults[index]?.winnings || 0)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Calculate Button - Compact */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <button
          onClick={calculateWinnings}
          disabled={!hasValidInput || isCalculating}
          className={`w-full px-4 py-3 text-base font-bold rounded-xl shadow-md transition-all ${
            hasValidInput && !isCalculating
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg active:scale-98 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isCalculating ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>Calcolo in corso...</span>
            </span>
          ) : (
            'Calcola le Vincite'
          )}
        </button>

        {!hasValidInput && (
          <p className="text-xs text-gray-500 text-center">
            Inserisci almeno un importo per calcolare
          </p>
        )}
      </div>

      {/* Results Section - Compact */}
      {showResults && (
        <div className="animate-fade-in-up mb-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white shadow-lg p-4 text-center">
            <div className="text-xs font-semibold opacity-90 mb-1 uppercase tracking-wide">
              Vincita Totale Potenziale
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-2">
              {formatCurrency(totalWinnings)}
            </div>
            <div className="text-xs opacity-80">
              Basato sui coefficienti ufficiali ADM
            </div>
          </div>
        </div>
      )}

      {/* Reset Button - Compact */}
      {(showResults || hasValidInput) && (
        <div className="flex justify-center mb-3">
          <button
            onClick={resetCalculator}
            className="px-4 py-2 text-sm bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Azzera</span>
          </button>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-6 p-5 bg-blue-900 border-l-4 border-blue-500 rounded-lg">
        <p className="text-sm text-white leading-relaxed">
          <strong className="text-blue-100">💡 Nota:</strong> I calcoli sono basati sui{' '}
          <a
            href="https://www.lotto-italia.it/lotto/come-dove-giocare/il-gioco/premi-del-lotto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-blue-200 hover:text-white transition-colors"
          >
            coefficienti ufficiali del Lotto italiano
          </a>
          . Le vincite effettive possono variare in base al numero di ruote giocate e alle combinazioni specifiche.
          Per maggiori informazioni consultare il sito ufficiale{' '}
          <a
            href="https://www.adm.gov.it"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-blue-200 hover:text-white transition-colors"
          >
            ADM (Agenzia delle Dogane e dei Monopoli)
          </a>.
        </p>
      </div>
    </div>
  );
}
