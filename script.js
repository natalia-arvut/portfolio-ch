// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll);

// Mobile menu
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
function setMenu(open) {
  links.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
burger.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => setMenu(false))
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .case, .section__head, .about__photo, .about__text, .contact__card, .price-row')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Service modal
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

const SERVICES = {
  en: {
    'brand-site': {
      title: 'Brand + website, turnkey',
      intro: 'A cohesive brand image and a working, finished website — as one package, from one contractor. No disconnect between logo, identity and site.',
      blocks: [
        { h: "What's included", items: [
          'Brief and competitor analysis',
          '2–3 logo concepts to choose from',
          'Final logo in PNG / SVG / PDF',
          'Brand identity: palette, typography, graphics',
          'Brand guidelines with usage rules',
          'Website design (landing or multi-page)',
          'Real coded layout + responsive for all devices',
          'Basic on-page SEO (meta tags, speed, Schema, Open Graph, sitemap)',
          'Forms, messengers and analytics setup',
          'Hosting deployment, domain setup, final checks'
        ]},
        { h: 'Timing and price', items: [
          'Timing: 1–4 weeks',
          'Cost: from CHF 3 500',
          'Payment: 50% upfront, 50% after approval'
        ]}
      ]
    },
    'websites': {
      title: 'Websites, turnkey',
      intro: 'Landing or multi-page website with design, copy and real coded layout. A finished product you can show clients right away.',
      blocks: [
        { h: "What's included", items: [
          'Structure and prototype in Figma',
          'Modern design tailored to your brand',
          'Sales copy or adaptation of yours',
          'Image and graphic selection',
          'Responsive layout: mobile, tablet, desktop',
          'Speed optimization (90+ PageSpeed)',
          'Forms and messenger integration',
          'Basic on-page SEO: meta tags, Schema, Open Graph, sitemap',
          'Google Analytics setup',
          'Hosting deployment and domain setup'
        ]},
        { h: 'Timing and price', items: [
          'Landing — 1–2 weeks, from CHF 1 800',
          'Multi-page — 2–4 weeks, from CHF 5 000',
          'Payment: 50% upfront, 50% after approval'
        ]}
      ]
    },
    'apps': {
      title: 'App development',
      intro: 'Web apps and platforms with real functionality — from a working prototype to a full product with database and user accounts.',
      blocks: [
        { h: "What's included", items: [
          'Task analysis and feature scheme',
          'Interface prototype in Figma',
          'UI / UX design for all screens',
          'Frontend on a modern stack',
          'Backend and database',
          'User authentication and personal accounts',
          'Payment integrations (if needed)',
          'Testing and debugging',
          'Deploy and domain setup'
        ]},
        { h: 'Turnkey — if you only have an idea', items: [
          'I take everything: branding, design, development, launch',
          'One contractor from idea to working app'
        ]},
        { h: 'Mobile version — as a separate service', items: [
          'For my application (if I built the desktop one) — CHF 3 000',
          'For your existing app — CHF 5 000'
        ]},
        { h: 'Timing and price', items: [
          'Prototype — from 1 week, from CHF 8 000',
          'Full application — from 1 month, from CHF 25 000',
          'Mobile version — 1–3 weeks',
          'Payment by stages'
        ]}
      ]
    },
    'ai': {
      title: 'Automation & AI',
      intro: 'I take the routine off your hands using AI and integrations. Your business runs faster, and you do less manual work.',
      blocks: [
        { h: 'What I do', items: [
          'Chatbots for messengers and websites',
          'AI assistants for business',
          'Apps for routine automation (reports, requests, document processing)',
          'Automated email and messenger campaigns',
          'Data parsing and automated information gathering',
          'CRM, Google Sheets, Notion, messenger integrations',
          'Voice AI agents',
          'Promo videos and AI avatar videos'
        ]},
        { h: 'Timing and price', items: [
          'Timing: up to 4 weeks depending on the task',
          'Cost: from CHF 2 500',
          'Ongoing support available after launch'
        ]}
      ]
    }
  },

  de: {
    'brand-site': {
      title: 'Marke + Website, schlüsselfertig',
      intro: 'Ein stimmiges Markenbild und eine fertige, funktionierende Website — als ein Paket, aus einer Hand. Keine Lücke zwischen Logo, Identität und Site.',
      blocks: [
        { h: 'Was inbegriffen ist', items: [
          'Briefing und Wettbewerbsanalyse',
          '2–3 Logo-Konzepte zur Auswahl',
          'Finales Logo in PNG / SVG / PDF',
          'Markenidentität: Farbpalette, Typografie, Grafik',
          'Markenrichtlinien mit Anwendungsregeln',
          'Webdesign (Landingpage oder Mehrseitenwebsite)',
          'Echte programmierte Umsetzung + responsiv für alle Geräte',
          'Grundlegende On-Page-SEO (Meta-Tags, Geschwindigkeit, Schema, Open Graph, Sitemap)',
          'Formulare, Messenger und Analytics-Einrichtung',
          'Hosting-Deployment, Domain-Setup, finale Prüfung'
        ]},
        { h: 'Zeitplan und Preis', items: [
          'Dauer: 1–4 Wochen',
          'Preis: ab CHF 3 500',
          'Zahlung: 50 % im Voraus, 50 % nach Freigabe'
        ]}
      ]
    },
    'websites': {
      title: 'Websites, schlüsselfertig',
      intro: 'Landingpage oder Mehrseitenwebsite mit Design, Texten und echter programmierter Umsetzung. Ein fertiges Produkt, das Sie Kunden sofort zeigen können.',
      blocks: [
        { h: 'Was inbegriffen ist', items: [
          'Struktur und Prototyp in Figma',
          'Modernes Design auf Ihre Marke zugeschnitten',
          'Verkaufstexte oder Anpassung Ihrer Texte',
          'Auswahl von Bildern und Grafiken',
          'Responsive Umsetzung: Mobil, Tablet, Desktop',
          'Geschwindigkeitsoptimierung (90+ PageSpeed)',
          'Formulare und Messenger-Integration',
          'Grundlegende On-Page-SEO: Meta-Tags, Schema, Open Graph, Sitemap',
          'Einrichtung von Google Analytics',
          'Hosting-Deployment und Domain-Setup'
        ]},
        { h: 'Zeitplan und Preis', items: [
          'Landingpage — 1–2 Wochen, ab CHF 1 800',
          'Mehrseitenwebsite — 2–4 Wochen, ab CHF 5 000',
          'Zahlung: 50 % im Voraus, 50 % nach Freigabe'
        ]}
      ]
    },
    'apps': {
      title: 'App-Entwicklung',
      intro: 'Webapplikationen und Plattformen mit echter Funktionalität — vom funktionierenden Prototyp bis zum vollwertigen Produkt mit Datenbank und Benutzerkonten.',
      blocks: [
        { h: 'Was inbegriffen ist', items: [
          'Aufgabenanalyse und Funktionsschema',
          'Interface-Prototyp in Figma',
          'UI / UX Design für alle Screens',
          'Frontend auf modernem Stack',
          'Backend und Datenbank',
          'Benutzerauthentifizierung und persönliche Konten',
          'Zahlungsintegrationen (falls nötig)',
          'Testing und Debugging',
          'Deployment und Domain-Setup'
        ]},
        { h: 'Schlüsselfertig — wenn Sie nur eine Idee haben', items: [
          'Ich übernehme alles: Branding, Design, Entwicklung, Launch',
          'Eine Ansprechperson von der Idee bis zur funktionierenden App'
        ]},
        { h: 'Mobile Version — als separate Leistung', items: [
          'Für meine Applikation (wenn ich die Desktop-Version gebaut habe) — CHF 3 000',
          'Für Ihre bestehende App — CHF 5 000'
        ]},
        { h: 'Zeitplan und Preis', items: [
          'Prototyp — ab 1 Woche, ab CHF 8 000',
          'Vollständige Applikation — ab 1 Monat, ab CHF 25 000',
          'Mobile Version — 1–3 Wochen',
          'Zahlung in Etappen'
        ]}
      ]
    },
    'ai': {
      title: 'Automatisierung & KI',
      intro: 'Ich nehme Ihnen Routine mit KI und Integrationen ab. Ihr Geschäft läuft schneller, und Sie machen weniger manuell.',
      blocks: [
        { h: 'Was ich tue', items: [
          'Chatbots für Messenger und Websites',
          'KI-Assistenten für Unternehmen',
          'Apps zur Automatisierung von Routine (Berichte, Anfragen, Dokumentenverarbeitung)',
          'Automatisierte E-Mail- und Messenger-Kampagnen',
          'Daten-Parsing und automatisches Sammeln von Informationen',
          'CRM-, Google Sheets-, Notion- und Messenger-Integrationen',
          'Voice-KI-Agenten',
          'Werbevideos und KI-Avatar-Videos'
        ]},
        { h: 'Zeitplan und Preis', items: [
          'Dauer: bis zu 4 Wochen je nach Aufgabe',
          'Preis: ab CHF 2 500',
          'Laufende Betreuung nach dem Launch möglich'
        ]}
      ]
    }
  },

  fr: {
    'brand-site': {
      title: 'Marque + site web, clé en main',
      intro: 'Une image de marque cohérente et un site fini et fonctionnel — en un seul paquet, par un seul prestataire. Aucun écart entre logo, identité et site.',
      blocks: [
        { h: 'Ce qui est inclus', items: [
          'Brief et analyse des concurrents',
          '2–3 concepts de logo au choix',
          'Logo final en PNG / SVG / PDF',
          'Identité de marque : palette, typographie, graphisme',
          'Charte de marque avec règles d’utilisation',
          'Design du site (landing ou multi-pages)',
          'Intégration réelle + responsive sur tous les supports',
          'SEO on-page de base (meta tags, vitesse, Schema, Open Graph, sitemap)',
          'Mise en place des formulaires, messageries et analytics',
          'Déploiement, configuration du domaine, vérifications finales'
        ]},
        { h: 'Délais et prix', items: [
          'Délais : 1–4 semaines',
          'Prix : dès CHF 3 500',
          'Paiement : 50 % à l’avance, 50 % après validation'
        ]}
      ]
    },
    'websites': {
      title: 'Sites web, clé en main',
      intro: 'Landing ou site multi-pages avec design, contenus et intégration réelle. Un produit fini que vous pouvez montrer à vos clients immédiatement.',
      blocks: [
        { h: 'Ce qui est inclus', items: [
          'Structure et prototype dans Figma',
          'Design moderne adapté à votre marque',
          'Textes orientés vente ou adaptation des vôtres',
          'Sélection d’images et de graphismes',
          'Intégration responsive : mobile, tablette, desktop',
          'Optimisation de la vitesse (90+ PageSpeed)',
          'Intégration des formulaires et messageries',
          'SEO on-page de base : meta tags, Schema, Open Graph, sitemap',
          'Mise en place de Google Analytics',
          'Déploiement et configuration du domaine'
        ]},
        { h: 'Délais et prix', items: [
          'Landing — 1–2 semaines, dès CHF 1 800',
          'Multi-pages — 2–4 semaines, dès CHF 5 000',
          'Paiement : 50 % à l’avance, 50 % après validation'
        ]}
      ]
    },
    'apps': {
      title: 'Développement d’applications',
      intro: 'Applications web et plateformes à fonctionnalités réelles — du prototype fonctionnel au produit complet avec base de données et comptes utilisateurs.',
      blocks: [
        { h: 'Ce qui est inclus', items: [
          'Analyse du besoin et schéma des fonctionnalités',
          'Prototype d’interface dans Figma',
          'Design UI / UX de tous les écrans',
          'Frontend sur stack moderne',
          'Backend et base de données',
          'Authentification et comptes personnels',
          'Intégrations de paiement (si besoin)',
          'Tests et débogage',
          'Déploiement et configuration du domaine'
        ]},
        { h: 'Clé en main — si vous n’avez qu’une idée', items: [
          'Je prends tout en charge : branding, design, développement, lancement',
          'Un seul prestataire de l’idée à l’application fonctionnelle'
        ]},
        { h: 'Version mobile — en prestation séparée', items: [
          'Pour mon application (si j’ai fait la version desktop) — CHF 3 000',
          'Pour votre application existante — CHF 5 000'
        ]},
        { h: 'Délais et prix', items: [
          'Prototype — dès 1 semaine, dès CHF 8 000',
          'Application complète — dès 1 mois, dès CHF 25 000',
          'Version mobile — 1–3 semaines',
          'Paiement par étapes'
        ]}
      ]
    },
    'ai': {
      title: 'Automatisation & IA',
      intro: 'Je vous décharge de la routine grâce à l’IA et aux intégrations. Votre activité tourne plus vite, et vous faites moins de travail manuel.',
      blocks: [
        { h: 'Ce que je fais', items: [
          'Chatbots pour messageries et sites web',
          'Assistants IA pour l’entreprise',
          'Applications d’automatisation de routine (rapports, demandes, traitement de documents)',
          'Campagnes e-mail et messagerie automatisées',
          'Parsing de données et collecte automatisée d’information',
          'Intégrations CRM, Google Sheets, Notion, messageries',
          'Agents IA vocaux',
          'Vidéos promo et vidéos avec avatar IA'
        ]},
        { h: 'Délais et prix', items: [
          'Délais : jusqu’à 4 semaines selon la tâche',
          'Prix : dès CHF 2 500',
          'Suivi continu disponible après le lancement'
        ]}
      ]
    }
  },

  it: {
    'brand-site': {
      title: 'Brand + sito web, chiavi in mano',
      intro: 'Un’immagine di brand coerente e un sito finito e funzionante — in un unico pacchetto, da un unico professionista. Nessuno scollamento fra logo, identità e sito.',
      blocks: [
        { h: 'Cosa è incluso', items: [
          'Brief e analisi dei competitor',
          '2–3 concept di logo fra cui scegliere',
          'Logo finale in PNG / SVG / PDF',
          'Identità di brand: palette, tipografia, grafica',
          'Brand guidelines con regole d’uso',
          'Design del sito (landing o multipagina)',
          'Sviluppo reale + responsive su tutti i dispositivi',
          'SEO on-page di base (meta tag, velocità, Schema, Open Graph, sitemap)',
          'Form, messaggistica e analytics configurati',
          'Deploy su hosting, configurazione del dominio, verifiche finali'
        ]},
        { h: 'Tempi e prezzo', items: [
          'Tempi: 1–4 settimane',
          'Prezzo: da CHF 3 500',
          'Pagamento: 50 % in anticipo, 50 % dopo l’approvazione'
        ]}
      ]
    },
    'websites': {
      title: 'Siti web, chiavi in mano',
      intro: 'Landing o sito multipagina con design, testi e sviluppo reale. Un prodotto finito che può mostrare ai clienti subito.',
      blocks: [
        { h: 'Cosa è incluso', items: [
          'Struttura e prototipo in Figma',
          'Design moderno su misura del Suo brand',
          'Testi orientati alla vendita o adattamento dei Suoi',
          'Selezione di immagini e grafiche',
          'Sviluppo responsive: mobile, tablet, desktop',
          'Ottimizzazione della velocità (90+ PageSpeed)',
          'Integrazione di form e messaggistica',
          'SEO on-page di base: meta tag, Schema, Open Graph, sitemap',
          'Configurazione di Google Analytics',
          'Deploy su hosting e configurazione del dominio'
        ]},
        { h: 'Tempi e prezzo', items: [
          'Landing — 1–2 settimane, da CHF 1 800',
          'Multipagina — 2–4 settimane, da CHF 5 000',
          'Pagamento: 50 % in anticipo, 50 % dopo l’approvazione'
        ]}
      ]
    },
    'apps': {
      title: 'Sviluppo di applicazioni',
      intro: 'Web app e piattaforme con funzionalità reali — dal prototipo funzionante al prodotto completo con database e account utenti.',
      blocks: [
        { h: 'Cosa è incluso', items: [
          'Analisi del compito e schema delle funzionalità',
          'Prototipo dell’interfaccia in Figma',
          'Design UI / UX di tutte le schermate',
          'Frontend su stack moderno',
          'Backend e database',
          'Autenticazione utenti e account personali',
          'Integrazioni di pagamento (se necessarie)',
          'Test e debugging',
          'Deploy e configurazione del dominio'
        ]},
        { h: 'Chiavi in mano — se ha solo un’idea', items: [
          'Mi occupo di tutto: branding, design, sviluppo, lancio',
          'Un unico referente, dall’idea all’app funzionante'
        ]},
        { h: 'Versione mobile — come servizio a parte', items: [
          'Per la mia applicazione (se ho realizzato la desktop) — CHF 3 000',
          'Per la Sua app esistente — CHF 5 000'
        ]},
        { h: 'Tempi e prezzo', items: [
          'Prototipo — da 1 settimana, da CHF 8 000',
          'Applicazione completa — da 1 mese, da CHF 25 000',
          'Versione mobile — 1–3 settimane',
          'Pagamento per fasi'
        ]}
      ]
    },
    'ai': {
      title: 'Automazione & IA',
      intro: 'Tolgo la routine dalle Sue spalle con IA e integrazioni. Il Suo business gira più veloce e Lei lavora meno manualmente.',
      blocks: [
        { h: 'Cosa faccio', items: [
          'Chatbot per messaggistica e siti web',
          'Assistenti IA per il business',
          'Applicazioni per automatizzare la routine (report, richieste, gestione documenti)',
          'Campagne e-mail e di messaggistica automatizzate',
          'Parsing dei dati e raccolta automatica di informazioni',
          'Integrazioni CRM, Google Sheets, Notion, messaggistica',
          'Agenti IA vocali',
          'Video promo e video con avatar IA'
        ]},
        { h: 'Tempi e prezzo', items: [
          'Tempi: fino a 4 settimane in base al compito',
          'Prezzo: da CHF 2 500',
          'Supporto continuativo disponibile dopo il lancio'
        ]}
      ]
    }
  },
};

function renderService(key) {
  const lang = (window.i18nLang && window.i18nLang()) || 'en';
  const dict = SERVICES[lang] || SERVICES.en;
  const s = dict[key] || SERVICES.en[key];
  if (!s) { modalContent.innerHTML = ''; return; }
  modalTitle.textContent = s.title;
  modalContent.innerHTML = `
    <p class="modal__intro">${s.intro}</p>
    ${s.blocks.map(b => `
      <h4 class="modal__h">${b.h}</h4>
      <ul class="modal__list">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>
    `).join('')}
  `;
}

// Re-render the open service modal when language changes
document.addEventListener('i18n:changed', () => {
  if (!modal.hidden && currentService) renderService(currentService);
});

const priceAnchors = {
  'brand-site': 'price-brand-site',
  'websites': 'price-websites',
  'apps': 'price-apps',
  'ai': 'price-ai',
};
let currentService = null;
const modalCalc = document.getElementById('modalCalc');

document.querySelectorAll('.card__more').forEach(btn => {
  btn.addEventListener('click', () => {
    currentService = btn.dataset.modal;
    renderService(currentService);
    if (modalCalc) modalCalc.href = '#' + (priceAnchors[currentService] || 'pricing');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

modalCalc && modalCalc.addEventListener('click', e => {
  const id = priceAnchors[currentService];
  if (!id) return;
  setTimeout(() => {
    const row = document.getElementById(id);
    if (!row) return;
    const det = row.querySelector('details.price-extras');
    if (det) det.open = true;
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    row.classList.add('price-row--highlight');
    setTimeout(() => row.classList.remove('price-row--highlight'), 2000);
  }, 60);
});
modal.addEventListener('click', e => {
  if (e.target.matches('[data-close]')) { modal.hidden = true; document.body.style.overflow = ''; }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) { modal.hidden = true; document.body.style.overflow = ''; } });

// ===== REVIEWS =====
const reviewsModal = document.getElementById('reviewsModal');
const reviewsList = document.getElementById('reviewsList');
const reviewForm = document.getElementById('reviewForm');
const reviewStars = document.getElementById('reviewStars');
const reviewsBtn = document.getElementById('reviewsBtn');

// Supabase — same project as RU portfolio (Nataly-portfolio),
// separate table `reviews_ch` (see sql/supabase-reviews-ch.sql).
const SUPABASE_URL = 'https://vrszciahlkxfzypmyasz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc3pjaWFobGt4Znp5cG15YXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMjY1OTEsImV4cCI6MjA5NTgwMjU5MX0.VoFRxWYnUvCKe1n5_HzqvPjZ9HMx17ZnZS5zFlnlETQ';
const REVIEWS_TABLE = 'reviews_ch';
let supa = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
  supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function fetchAllReviews() {
  if (!supa) return [];
  const { data, error } = await supa
    .from(REVIEWS_TABLE)
    .select('name, role, text, rating, language, created_at')
    .order('created_at', { ascending: false });
  if (error || !data) return [];
  return data.map(r => ({ ...r, date: r.created_at }));
}

async function pushReview(review) {
  if (!supa) return false;
  const { error } = await supa.from(REVIEWS_TABLE).insert(review);
  return !error;
}

async function renderReviews() {
  const all = await fetchAllReviews();
  const T = window.i18nT || { en: {} };
  if (!all.length) {
    reviewsList.innerHTML = `
      <div class="reviews-empty">
        <p>${T.en['rv.empty.h'] || 'No reviews yet — be the first.'}</p>
        <small>${T.en['rv.empty.s'] || 'Share your experience below.'}</small>
      </div>`;
    return;
  }
  reviewsList.innerHTML = all.map(r => `
    <article class="review">
      <header class="review__head">
        <div>
          <div class="review__name">${escapeHtml(r.name)}</div>
          ${r.role ? `<div class="review__role">${escapeHtml(r.role)}</div>` : ''}
        </div>
        <div class="review__stars">${'★'.repeat(r.rating)}<span class="review__stars-dim">${'★'.repeat(5 - r.rating)}</span></div>
      </header>
      <p class="review__text">${escapeHtml(r.text)}</p>
      <time class="review__date">${formatDate(r.date || r.created_at)}</time>
    </article>
  `).join('');
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function formatDate(d){const D=new Date(d);return D.toLocaleDateString('en-US',{day:'numeric',month:'long',year:'numeric'});}

reviewsBtn && reviewsBtn.addEventListener('click', async () => {
  reviewsModal.hidden = false;
  document.body.style.overflow = 'hidden';
  await renderReviews();
});
reviewsModal.addEventListener('click', e => {
  if (e.target.matches('[data-close]')) { reviewsModal.hidden = true; document.body.style.overflow = ''; }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !reviewsModal.hidden) { reviewsModal.hidden = true; document.body.style.overflow = ''; } });

function updateStars(rating) {
  reviewStars.dataset.rating = rating;
  [...reviewStars.children].forEach(s => s.classList.toggle('active', +s.dataset.v <= rating));
}
reviewStars.addEventListener('click', e => { if (e.target.dataset.v) updateStars(+e.target.dataset.v); });
updateStars(5);

reviewForm.addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(reviewForm);
  const review = {
    name: fd.get('name').trim(),
    role: fd.get('role').trim() || null,
    text: fd.get('text').trim(),
    rating: +reviewStars.dataset.rating,
    language: 'en'
  };
  if (!review.name || !review.text) return;
  const ok = await pushReview(review);
  if (ok) {
    reviewForm.reset();
    updateStars(5);
    await renderReviews();
  }
});
