export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-xl">🍀</span>
              </div>
              <h3 className="text-xl font-bold text-white">Calcolo Lotto</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Calcolatrice per vincite del Lotto italiano
            </p>
          </div>

          {/* Fonti Ufficiali */}
          <div>
            <div className="text-sm font-bold text-white mb-3">Fonti Ufficiali</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.adm.gov.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  ADM - Agenzia Dogane e Monopoli
                </a>
              </li>
              <li>
                <a
                  href="https://www.lotto-italia.it/lotto/come-dove-giocare/il-gioco/premi-del-lotto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Premi Ufficiali Lotto
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-bold text-white mb-3">Link Rapidi</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Calcolatrice
                </a>
              </li>
              <li>
                <a href="#come-funziona" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Guida
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-orange-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {currentYear} © Calcolo Lotto - Tutti i diritti riservati
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Gioca responsabilmente. Il gioco è vietato ai minori di 18 anni.
          </p>
        </div>
      </div>
    </footer>
  );
}
