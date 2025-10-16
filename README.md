# 🎲 Calcolo Vincite Lotto - Calcolatrice Professionale

Applicazione Next.js 15 ottimizzata per il SEO per calcolare le vincite del Lotto italiano. Progettata per rankare #1 su Google per keywords come "calcolo vincite lotto", "calcolatrice lotto", e varianti correlate.

## 🚀 Caratteristiche Principali

### SEO & Performance
- ✅ **Next.js 15 App Router** con Server Components
- ✅ **Metadata API completa** con Open Graph e Twitter Cards
- ✅ **Schema.org JSON-LD** (WebApplication markup)
- ✅ **Sitemap.xml e robots.txt dinamici**
- ✅ **Core Web Vitals ottimizzati**
- ✅ **PWA ready** con manifest.json
- ✅ **Headers di sicurezza** (CSP, HSTS, etc.)
- ✅ **Compressione e ottimizzazione immagini**

### UX/UI
- ✅ **Design moderno** con Tailwind CSS
- ✅ **Font Rubik** da Google Fonts
- ✅ **Tema arancione personalizzato** (#FF6B35)
- ✅ **Responsive design** mobile-first
- ✅ **Animazioni e transizioni fluide**
- ✅ **Accessibilità WCAG 2.1**

### Funzionalità
- ✅ **Calcolatrice avanzata** con calcolo in tempo reale
- ✅ **Supporto tutte le combinazioni** (Ambata, Ambo, Terno, Quaterna, Cinquina, Determinato)
- ✅ **Coefficienti ufficiali 2025**
- ✅ **Formattazione valuta italiana**
- ✅ **Reset rapido**
- ✅ **FAQ e contenuti SEO-friendly**

### Analytics & Tracking
- ✅ **Google Analytics 4** integrato
- ✅ **Google Tag Manager** pronto
- ✅ **Event tracking** configurabile

## 📋 Requisiti

- Node.js 18.x o superiore
- npm o yarn

## 🛠️ Installazione

1. **Clona il repository o naviga nella cartella**

```bash
cd calcololotto
```

2. **Installa le dipendenze**

```bash
npm install
```

3. **Configura le variabili d'ambiente**

Copia `.env.example` in `.env.local`:

```bash
cp .env.example .env.local
```

Modifica `.env.local` con i tuoi dati:

```env
NEXT_PUBLIC_GA_ID=G-TUO-ID-GA4
NEXT_PUBLIC_SITE_URL=https://www.calcololotto.it
```

4. **Avvia il server di sviluppo**

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 🏗️ Build per Produzione

```bash
npm run build
npm start
```

## 📁 Struttura del Progetto

```
calcololotto/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Header con navigazione
│   │   ├── Footer.tsx          # Footer con links
│   │   ├── LottoCalculator.tsx # Calcolatrice principale
│   │   └── Analytics.tsx       # Google Analytics
│   ├── layout.tsx              # Layout root con metadata
│   ├── page.tsx                # Homepage con SEO content
│   ├── globals.css             # Stili globali
│   ├── sitemap.ts              # Generatore sitemap
│   └── robots.ts               # Generatore robots.txt
├── public/
│   └── manifest.json           # PWA manifest
├── next.config.ts              # Configurazione Next.js
├── tailwind.config.ts          # Configurazione Tailwind
├── .env.example                # Template variabili ambiente
└── README.md
```

## 🎯 Strategia SEO Implementata

### On-Page SEO
1. **Title ottimizzato**: Include keywords primarie e anno corrente
2. **Meta Description**: Descrizione persuasiva con CTA
3. **H1 unico** con keyword principale
4. **Struttura H2-H3** semantica
5. **Internal linking** ottimizzato
6. **URL canonico** configurato
7. **Keywords density** ottimale (2-3%)

### Technical SEO
1. **Core Web Vitals** ottimizzati
2. **Mobile-first responsive**
3. **HTTPS e security headers**
4. **Structured data** Schema.org
5. **Sitemap XML** dinamica
6. **Robots.txt** ottimizzato
7. **PWA** con service worker ready

### Content SEO
1. **2000+ parole** di contenuto originale
2. **FAQ section** con long-tail keywords
3. **Esempi pratici** di utilizzo
4. **Tabelle e liste** per scannabilità
5. **LSI keywords** naturalmente integrate

### Local SEO (Italia)
1. **hreflang="it-IT"** configurato
2. **Geo-targeting** per Italia
3. **Valuta EUR** e formato italiano
4. **Content localizzato** 100%

## 🔧 Personalizzazione

### Modificare i Colori

Edita `tailwind.config.ts`:

```typescript
colors: {
  orange: {
    500: '#FF6B35', // Colore primario
    // ...
  },
}
```

### Aggiornare Google Analytics

1. Ottieni il tuo ID GA4 da Google Analytics
2. Aggiungi a `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-TUO-ID-REALE
```

### Verificare Google Search Console

Nel file `app/layout.tsx`, aggiorna:

```typescript
verification: {
  google: 'tuo-codice-verifica-google',
}
```

## 📊 Monitoraggio Performance

### Strumenti Consigliati
- **Google Search Console** - Monitora posizionamento
- **Google Analytics 4** - Analizza traffico
- **PageSpeed Insights** - Verifica Core Web Vitals
- **Ahrefs/SEMrush** - Traccia keywords

### KPIs da Monitorare
- Posizione per "calcolo vincite lotto"
- CTR organico
- Tempo sulla pagina
- Bounce rate
- Core Web Vitals (LCP, FID, CLS)

## 🚀 Deploy

### Vercel (Consigliato)

```bash
npm install -g vercel
vercel
```

### Altri provider
Il progetto può essere deployato su qualsiasi piattaforma che supporta Next.js 15:
- Netlify
- Railway
- Digital Ocean
- AWS Amplify

## 📝 TODO Post-Launch

- [ ] Registrare Google Search Console
- [ ] Configurare Google Analytics
- [ ] Creare backlinks di qualità
- [ ] Pubblicare articoli di supporto
- [ ] Ottimizzare immagini OG
- [ ] Configurare sitemap in GSC
- [ ] Monitorare competitors
- [ ] A/B testing CTA

## 🎯 Keywords Target

**Primarie:**
- calcolo vincite lotto
- calcolatrice vincite lotto
- calcolo lotto online

**Secondarie:**
- quanto si vince al lotto
- calcolo ambo lotto
- calcolo terno lotto
- simulatore vincite lotto
- calcola vincite lotto

**Long-tail:**
- come calcolare le vincite del lotto
- calcolatrice lotto online gratis
- calcolo vincite lotto ruota fissa

## 📄 Licenza

© 2025 Calcolo Lotto - Tutti i diritti riservati

## 🆘 Supporto

Per problemi o domande:
- Apri una issue su GitHub
- Contatta via email

---

**Made with ❤️ for SEO dominance in Italy** 🇮🇹
