'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <span className="text-xl">🍀</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl">Calcolo Lotto</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-1.5 text-sm text-white hover:text-orange-200 rounded-lg transition-all font-medium"
            >
              Calcolatore
            </Link>
            <Link
              href="#come-funziona"
              className="px-3 py-1.5 text-sm text-white hover:text-orange-200 rounded-lg transition-all font-medium"
            >
              Come Funziona
            </Link>
            <Link
              href="#faq"
              className="px-3 py-1.5 text-sm text-white hover:text-orange-200 rounded-lg transition-all font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 animate-fade-in-down">
            <div className="flex flex-col space-y-1 bg-white rounded-lg p-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium text-center"
              >
                Calcolatore
              </Link>
              <Link
                href="#come-funziona"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium text-center"
              >
                Come Funziona
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium text-center"
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
