/* ===== i18n: EN / DE / FR / IT — Swiss portfolio site =====
   DE  — Swiss German orthography (ss, никогда ß), вежливое Sie
   FR  — вежливое vous
   IT  — вежливое Lei (с заглавной)
*/
const T = {

  en: {
    'meta.title': 'Nataly — design & development, turnkey',
    'meta.desc': 'Brands, websites and apps built end-to-end with AI — from idea to launch. Switzerland.',

    'ai.badge': 'in collaboration with <b>AI</b>',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.about': 'About me',
    'nav.faq': 'FAQ',
    'nav.cta': 'Discuss a project',

    'hero.eyebrow': 'Graphic & web designer · developer · AI',
    'hero.t1': 'Brands.',
    'hero.t2': 'Websites.',
    'hero.t3': 'Apps.',
    'hero.sub': 'Turnkey projects, from idea to launch. Logo, brand identity, design and real development with AI. One person closes the full cycle.',
    'hero.cta1': 'Discuss a project',
    'hero.cta2': 'See work',
    'hero.stat1.b': '30+', 'hero.stat1.s': 'websites',
    'hero.stat2.b': '4+', 'hero.stat2.s': 'major projects',
    'hero.stat3.b': '8', 'hero.stat3.s': 'years in design',
    'hero.stat4.b': '360°', 'hero.stat4.s': 'brand · design · code',

    'services.title': 'Services',
    'services.lead': 'Full cycle or a single stage — whatever suits you.',
    'srv.brand-site.h': 'Brand + website, turnkey',
    'srv.brand-site.p': 'Logo, brand identity and website as one package. A coherent image and a working, finished site.',
    'srv.websites.h': 'Websites, turnkey',
    'srv.websites.p': 'Landings and multi-page sites: design, copy, real coded layout and launch. Responsive and fast.',
    'srv.apps.h': 'App development',
    'srv.apps.p': 'Web apps and platforms: from prototype to a working product with a database.',
    'srv.ai.h': 'Automation & AI',
    'srv.ai.p': 'Bots, integrations, AI assistants, mailings. Routine off your shoulders with artificial intelligence.',
    'srv.more': 'Read more →',

    'work.title': 'Portfolio',
    'work.lead': 'Whole brands from logo to launched product — each in its own style.',

    'case.lb.tag': 'Platform · digital business cards · paid communication',
    'case.lb.h': 'Arvut LiveBook',
    'case.lb.p': 'Brand and product for a platform of digital business cards and paid communication: logo, landing page and the platform itself.',
    'case.lb.r': ['Brand & logo','Landing','UX / UI design','Development','Launch'],

    'case.vb.tag': 'App · simulator',
    'case.vb.h': 'Universal Bank of Abundance',
    'case.vb.p': 'Design and development of a simulator app: brand, interface and a working web application from start to finish.',
    'case.vb.r': ['Branding','UI design','UX design','Development','Launch'],

    'case.sl.tag': 'Legal & financial consulting',
    'case.sl.h': 'Selinùs Financial Consulting',
    'case.sl.p': 'Premium brand for a Swiss financial company: logo, identity, brand guidelines and a multi-page website.',
    'case.sl.r': ['Logo & brand','Website design','Code','Promo video'],

    'case.ar.tag.a': 'Accounting',
    'case.ar.tag.b': 'service',
    'case.ar.h': 'Arvut Accounting',
    'case.ar.p': 'Brand identity and corporate website for an accounting firm: logo, graphics and a multi-page site.',
    'case.ar.r': ['Logo & brand','Website design','Copy','Build','Video'],

    'role.globe.title': 'Multilingual website',
    'case.view': 'Visit',

    'pricing.title': 'Pricing',
    'pricing.lead': 'Starting prices are the minimum. The final cost depends on scope and is agreed per task. The "from" price assumes you already have materials (copy, brief, idea, sketches). If I do everything from scratch — the cost is built from the add-ons below. I quote precisely after a short brief.',
    'price.extras.summary': 'How the price is built',
    'price.total.label.brand-site': 'From scratch (only the idea is yours):',
    'price.total.label.landing': 'Turnkey from scratch (only the idea is yours):',
    'price.total.label.multipage': 'Turnkey from scratch (only the idea is yours):',
    'price.total.label.apps': 'Full app, turnkey:',
    'price.total.label.ai': 'Complex solution, turnkey:',

    'p.brand-site.h': 'Brand + website, turnkey',
    'p.brand-site.p': 'Logo, brand identity and website as one package.',
    'p.brand-site.base': 'Base: brief, copy and materials from you. Logo + identity + brand guidelines + single-page website',
    'p.brand-site.x1': '+ Copywriting',
    'p.brand-site.x2': '+ Multi-page site instead of a landing',
    'p.brand-site.x3': '+ Additional language version',
    'p.brand-site.x4': '+ Promo video (or AI avatar video)',
    'p.seo.included': 'Basic on-page SEO is included in the price (meta tags, speed, Schema, Open Graph, sitemap).',
    'p.seo.promo': '+ SEO promotion (monthly retainer)',
    'p.seo.promo.price': 'from CHF 2 500/mo',
    'p.seo.audit': '+ SEO audit (one-off)',
    'p.seo.audit.price': 'from CHF 1 500',

    'p.landing.h': 'Landing page, turnkey',
    'p.landing.p': 'A single-page site with real design and coded layout.',
    'p.landing.base': 'Base: copy, materials and design preferences from you',
    'p.landing.x1': '+ Copywriting',
    'p.landing.x2': '+ Extra sections (beyond 7 blocks)',
    'p.landing.x3': '+ Animations and effects',
    'p.landing.x4': '+ CRM, payments, messengers',
    'p.landing.x5': '+ Promo video (or AI avatar video)',
    'p.landing.x6': '+ Additional language version',

    'p.multi.h': 'Multi-page website',
    'p.multi.p': 'Corporate site with sections, a catalog or a blog.',
    'p.multi.base': 'Base: structure, copy and materials from you (up to 5 pages)',
    'p.multi.x1': '+ Copywriting from scratch',
    'p.multi.x2': '+ Product catalog (up to 50 items)',
    'p.multi.x3': '+ Blog with admin panel',
    'p.multi.x4': '+ Additional language version',
    'p.multi.x5': '+ CRM, payments, messengers',
    'p.multi.x6': '+ Promo video (or AI avatar video)',
    'p.multi.x7': '+ Additional page (beyond the 5 in the base)',

    'p.apps.h': 'App development',
    'p.apps.p': 'Web apps and platforms — from prototype to a live product.',
    'p.apps.proto': 'Prototype / MVP with core features',
    'p.apps.full': 'Full application (UI/UX, auth, accounts, integrations, AI features)',
    'p.apps.turnkey': 'Application, turnkey — I run the full cycle (branding, design, dev, launch)',
    'p.apps.mob1': 'Mobile version — for my application (if I built the desktop one)',
    'p.apps.mob2': 'Mobile version — for your existing app',
    'p.apps.x1': '+ Payment integration (simple → with subscriptions & receipts)',
    'p.apps.x2': '+ Admin panel (simple → full with roles)',

    'p.ai.h': 'Automation & AI',
    'p.ai.p': 'Bots, AI assistants, mailings, integrations and avatar videos.',
    'p.ai.base': 'Simple chatbot for messengers',
    'p.ai.x1': '+ AI assistant trained for your business',
    'p.ai.x2': '+ Multi-step scenarios with branching',
    'p.ai.x3': '+ Small app for a routine task',
    'p.ai.x4': '+ Voice AI agent',
    'p.ai.x5': '+ Promo video (or AI avatar video)',

    'about.title': 'About me',
    'about.p1': 'My name is Natalia Kovpinetc. I\'m a neural designer and developer: I combine years of graphic design experience with modern AI tools. I don\'t just draw a pretty picture — I take the project all the way to a working site or app.',
    'about.p2': 'I actively use AI in my work: it speeds things up and strengthens the result. My background in marketing and psychology helps me build products that actually sell.',
    'about.l1': 'Full cycle: brand → design → development → launch',
    'about.l2': 'AI tools at every stage',
    'about.l3': 'Education at ZeroCoder online university',
    'about.cta1': 'Discuss a project',
    'about.cta2': 'Reviews',

    'faq.title': 'FAQ',
    'faq.lead': 'The most common questions before we start — if yours isn\'t here, just ask.',
    'faq.q1': 'What does "turnkey" include?',
    'faq.a1': '<p>"Turnkey" means the full cycle from idea to launch. I offer two such services:</p><p><b>Brand + website turnkey</b> — research, concept, logo and identity, brand guidelines, design of all pages, copy, real coded layout, forms and analytics setup, hosting and domain.</p><p><b>App turnkey</b> — the same but with a web application instead of a site: branding, UX/UI, frontend & backend, database, authentication, integrations and launch. If you only have an idea — I cover the full cycle as a single contractor, from concept to working product.</p>',
    'faq.q2': 'How long does development take?',
    'faq.a2': '<p>Landing page — 7 to 14 days. Multi-page site — 2 to 4 weeks. Brand + site turnkey — 3 to 5 weeks. App — from a month, depending on features. We agree exact timing at the start.</p>',
    'faq.q3': 'How do we work with AI?',
    'faq.a3': '<p>AI is my co-author, not a replacement. AI speeds up the routine (concept variants, copy, prototypes, code), while I keep the idea, taste, logic and final quality. You get a faster and stronger result than without AI — or with people who rely on AI alone.</p>',
    'faq.q4': 'Can I order design only, without development?',
    'faq.a4': '<p>No — I only take on turnkey projects. I don\'t do design alone. My strength is the integrated result: brand, design and real development from one person, without loss in handover and without disconnect between mock-ups and the final site.</p>',
    'faq.q5': 'How many revisions are included?',
    'faq.a5': '<p>Revisions are a normal part of the process. At the concept stage — unlimited until we find the right one. After the concept is approved, each stage includes 2 rounds of revisions. Additional ones are agreed separately.</p>',
    'faq.q6': 'How and when do I pay?',
    'faq.a6': '<p>50% upfront — to start. The remaining 50% — after final approval, before going live. Direct payment by bank transfer (TWINT / IBAN) or in a way that suits you.</p>',
    'faq.q7': 'What if I don\'t like the result?',
    'faq.a7': '<p>I work in short iterations: every stage is approved before moving on. If something goes off track — it shows early, not at the end. I\'m personally invested in the result and always try to make something you\'ll love — your project isn\'t a checkbox for me, it\'s a living task I put myself into.</p>',

    'contact.title': 'Let\'s build your project together',
    'contact.lead': 'Send the task description and any materials to <a href="mailto:nk@arvut.ch" class="contact__inline-email">nk@arvut.ch</a> — or message me on any messenger. We\'ll arrange a call where you share the idea, and I\'ll explain how I can build it, with timing and cost.',
    'contact.cta1': 'Email me',
    'contact.cta2': 'WhatsApp',
    'contact.channels': 'Phone / WhatsApp / Telegram / GoChat / Viber / Imo / LiveBook / FaceTime',

    'footer.name': 'Natalia Kovpinetc',
    'footer.role': 'Design & development, turnkey',
    'footer.city': 'Lugano, Switzerland',

    'rv.title': 'Client reviews',
    'rv.empty.h': 'No reviews yet — be the first.',
    'rv.empty.s': 'Share your experience below.',
    'rv.form.h': 'Share your experience working with Natalia',
    'rv.form.name': 'Your name',
    'rv.form.role': 'What you do (optional)',
    'rv.form.text': 'Tell what you liked and what could be improved',
    'rv.form.submit': 'Publish',
    'rv.form.note': 'I\'ll be grateful for your review — it helps me grow and matters to people still deciding whether to reach out.',

    'a11y.menu': 'Menu',
    'a11y.close': 'Close',
    'a11y.prev': 'Previous',
    'a11y.next': 'Next',
    'a11y.cert': 'Certificate',
    'cert.title.1': 'Neural Networks: From Principle to Practice',
    'cert.title.2': 'Perplexity: From Beginner to Pro',
    'cert.title.3': 'Vibe Marketing',

    'sm.calc': 'Calculate price →',
    'sm.cta': 'Discuss a project',
    'sm.h.included': 'What\'s included',
    'sm.h.terms': 'Timing and price',
    'sm.h.turnkey': 'Turnkey — if you only have an idea',
    'sm.h.mobile': 'Mobile version — as a separate service',
    'sm.h.work': 'What I do',
    'sm.h.payment.50': 'Payment: 50% upfront, 50% after approval',
    'sm.h.payment.stages': 'Payment by stages',

    'lang.label': 'Language',
  },

  de: {
    'meta.title': 'Nataly — Design & Entwicklung, schlüsselfertig',
    'meta.desc': 'Marken, Websites und Apps aus einer Hand, mit KI — von der Idee bis zum Launch. Schweiz.',

    'ai.badge': 'in Zusammenarbeit mit <b>KI</b>',
    'nav.services': 'Leistungen',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Preise',
    'nav.about': 'Über mich',
    'nav.faq': 'FAQ',
    'nav.cta': 'Projekt besprechen',

    'hero.eyebrow': 'Grafik- & Webdesignerin · Entwicklerin · KI',
    'hero.t1': 'Marken.',
    'hero.t2': 'Websites.',
    'hero.t3': 'Apps.',
    'hero.sub': 'Schlüsselfertige Projekte, von der Idee bis zum Launch. Logo, Markenidentität, Design und echte Entwicklung mit KI. Eine Person deckt den gesamten Zyklus ab.',
    'hero.cta1': 'Projekt besprechen',
    'hero.cta2': 'Arbeiten ansehen',
    'hero.stat1.b': '30+', 'hero.stat1.s': 'Websites',
    'hero.stat2.b': '4+', 'hero.stat2.s': 'grosse Projekte',
    'hero.stat3.b': '8', 'hero.stat3.s': 'Jahre im Design',
    'hero.stat4.b': '360°', 'hero.stat4.s': 'Marke · Design · Code',

    'services.title': 'Leistungen',
    'services.lead': 'Voller Zyklus oder einzelne Etappe — wie es Ihnen passt.',
    'srv.brand-site.h': 'Marke + Website, schlüsselfertig',
    'srv.brand-site.p': 'Logo, Markenidentität und Website als ein Paket. Ein stimmiges Bild und eine fertige, funktionierende Site.',
    'srv.websites.h': 'Websites, schlüsselfertig',
    'srv.websites.p': 'Landingpages und Mehrseitenwebsites: Design, Texte, echte programmierte Umsetzung und Launch. Responsiv und schnell.',
    'srv.apps.h': 'App-Entwicklung',
    'srv.apps.p': 'Webapplikationen und Plattformen: vom Prototyp bis zum funktionierenden Produkt mit Datenbank.',
    'srv.ai.h': 'Automatisierung & KI',
    'srv.ai.p': 'Bots, Integrationen, KI-Assistenten, Mailings. Routine von Ihren Schultern — mit künstlicher Intelligenz.',
    'srv.more': 'Mehr erfahren →',

    'work.title': 'Portfolio',
    'work.lead': 'Ganzheitliche Marken vom Logo bis zum lancierten Produkt — jede in ihrem eigenen Stil.',

    'case.lb.tag': 'Plattform · digitale Visitenkarten · bezahlte Kommunikation',
    'case.lb.h': 'Arvut LiveBook',
    'case.lb.p': 'Marke und Produkt für eine Plattform digitaler Visitenkarten und bezahlter Kommunikation: Logo, Landingpage und die Plattform selbst.',
    'case.lb.r': ['Marke & Logo','Landingpage','UX / UI Design','Entwicklung','Launch'],

    'case.vb.tag': 'App · Simulator',
    'case.vb.h': 'Universal Bank of Abundance',
    'case.vb.p': 'Design und Entwicklung einer Simulator-App: Marke, Interface und funktionierende Webapplikation von Anfang bis Ende.',
    'case.vb.r': ['Branding','UI Design','UX Design','Entwicklung','Launch'],

    'case.sl.tag': 'Rechts- und Finanzberatung',
    'case.sl.h': 'Selinùs Financial Consulting',
    'case.sl.p': 'Premium-Marke für ein Schweizer Finanzunternehmen: Logo, Identität, Markenrichtlinien und eine Mehrseitenwebsite.',
    'case.sl.r': ['Logo & Marke','Webdesign','Code','Werbevideo'],

    'case.ar.tag.a': 'Buchhaltung',
    'case.ar.tag.b': 'Dienstleistung',
    'case.ar.h': 'Arvut Accounting',
    'case.ar.p': 'Markenidentität und Firmenwebsite für eine Buchhaltungsfirma: Logo, Grafiken und eine Mehrseitenwebsite.',
    'case.ar.r': ['Logo & Marke','Webdesign','Texte','Umsetzung','Video'],

    'role.globe.title': 'Mehrsprachige Website',
    'case.view': 'Ansehen',

    'pricing.title': 'Preise',
    'pricing.lead': 'Die Startpreise sind das Minimum. Der Endpreis hängt vom Umfang ab und wird pro Auftrag vereinbart. Der Preis «ab» geht davon aus, dass Sie bereits Materialien haben (Texte, Briefing, Idee, Skizzen). Wenn ich alles von Grund auf mache, setzt sich der Preis aus den Erweiterungen unten zusammen. Den genauen Preis nenne ich nach einem kurzen Briefing.',
    'price.extras.summary': 'Wie der Preis entsteht',
    'price.total.label.brand-site': 'Von Grund auf (nur die Idee ist von Ihnen):',
    'price.total.label.landing': 'Schlüsselfertig von Grund auf (nur die Idee ist von Ihnen):',
    'price.total.label.multipage': 'Schlüsselfertig von Grund auf (nur die Idee ist von Ihnen):',
    'price.total.label.apps': 'Vollständige App, schlüsselfertig:',
    'price.total.label.ai': 'Komplexe Lösung, schlüsselfertig:',

    'p.brand-site.h': 'Marke + Website, schlüsselfertig',
    'p.brand-site.p': 'Logo, Markenidentität und Website als ein Paket.',
    'p.brand-site.base': 'Basis: Briefing, Texte und Materialien von Ihnen. Logo + Identität + Markenrichtlinien + einseitige Website',
    'p.brand-site.x1': '+ Texterstellung',
    'p.brand-site.x2': '+ Mehrseitenwebsite statt Landingpage',
    'p.brand-site.x3': '+ Zusätzliche Sprachversion',
    'p.brand-site.x4': '+ Werbevideo (oder KI-Avatar-Video)',
    'p.seo.included': 'Grundlegende On-Page-SEO ist im Preis enthalten (Meta-Tags, Geschwindigkeit, Schema, Open Graph, Sitemap).',
    'p.seo.promo': '+ SEO-Betreuung (monatliches Retainer)',
    'p.seo.promo.price': 'ab CHF 2 500/Monat',
    'p.seo.audit': '+ SEO-Audit (einmalig)',
    'p.seo.audit.price': 'ab CHF 1 500',

    'p.landing.h': 'Landingpage, schlüsselfertig',
    'p.landing.p': 'Eine einseitige Website mit echtem Design und programmierter Umsetzung.',
    'p.landing.base': 'Basis: Texte, Materialien und Designwünsche von Ihnen',
    'p.landing.x1': '+ Texterstellung',
    'p.landing.x2': '+ Zusätzliche Sektionen (über 7 Blöcke hinaus)',
    'p.landing.x3': '+ Animationen und Effekte',
    'p.landing.x4': '+ CRM, Zahlungen, Messenger',
    'p.landing.x5': '+ Werbevideo (oder KI-Avatar-Video)',
    'p.landing.x6': '+ Zusätzliche Sprachversion',

    'p.multi.h': 'Mehrseitenwebsite',
    'p.multi.p': 'Firmenwebsite mit Sektionen, Katalog oder Blog.',
    'p.multi.base': 'Basis: Struktur, Texte und Materialien von Ihnen (bis 5 Seiten)',
    'p.multi.x1': '+ Texterstellung von Grund auf',
    'p.multi.x2': '+ Produktkatalog (bis 50 Artikel)',
    'p.multi.x3': '+ Blog mit Admin-Panel',
    'p.multi.x4': '+ Zusätzliche Sprachversion',
    'p.multi.x5': '+ CRM, Zahlungen, Messenger',
    'p.multi.x6': '+ Werbevideo (oder KI-Avatar-Video)',
    'p.multi.x7': '+ Zusätzliche Seite (über die 5 der Basis hinaus)',

    'p.apps.h': 'App-Entwicklung',
    'p.apps.p': 'Webapplikationen und Plattformen — vom Prototyp bis zum Live-Produkt.',
    'p.apps.proto': 'Prototyp / MVP mit Kernfunktionen',
    'p.apps.full': 'Vollständige Applikation (UI/UX, Auth, Konten, Integrationen, KI-Funktionen)',
    'p.apps.turnkey': 'Applikation, schlüsselfertig — ich übernehme den vollen Zyklus (Branding, Design, Entwicklung, Launch)',
    'p.apps.mob1': 'Mobile Version — für meine Applikation (wenn ich die Desktop-Version gebaut habe)',
    'p.apps.mob2': 'Mobile Version — für Ihre bestehende App',
    'p.apps.x1': '+ Zahlungsintegration (einfach → mit Abos und Belegen)',
    'p.apps.x2': '+ Admin-Panel (einfach → vollständig mit Rollen)',

    'p.ai.h': 'Automatisierung & KI',
    'p.ai.p': 'Bots, KI-Assistenten, Mailings, Integrationen und Avatar-Videos.',
    'p.ai.base': 'Einfacher Chatbot für Messenger',
    'p.ai.x1': '+ KI-Assistent, auf Ihr Geschäft trainiert',
    'p.ai.x2': '+ Mehrstufige Szenarien mit Verzweigungen',
    'p.ai.x3': '+ Kleine App für eine Routineaufgabe',
    'p.ai.x4': '+ Voice-KI-Agent',
    'p.ai.x5': '+ Werbevideo (oder KI-Avatar-Video)',

    'about.title': 'Über mich',
    'about.p1': 'Mein Name ist Natalia Kovpinetc. Ich bin Neural-Designerin und Entwicklerin: Ich verbinde langjährige Erfahrung im Grafikdesign mit modernen KI-Werkzeugen. Ich male nicht einfach ein hübsches Bild — ich bringe das Projekt bis zu einer funktionierenden Website oder App.',
    'about.p2': 'KI nutze ich aktiv in der Arbeit: Sie beschleunigt den Prozess und verstärkt das Ergebnis. Mein Hintergrund in Marketing und Psychologie hilft mir, Produkte zu schaffen, die wirklich verkaufen.',
    'about.l1': 'Voller Zyklus: Marke → Design → Entwicklung → Launch',
    'about.l2': 'KI-Werkzeuge in jeder Phase',
    'about.l3': 'Ausbildung an der ZeroCoder Online-Universität',
    'about.cta1': 'Projekt besprechen',
    'about.cta2': 'Bewertungen',

    'faq.title': 'Häufige Fragen',
    'faq.lead': 'Die häufigsten Fragen vor dem Start — wenn Ihre nicht dabei ist, fragen Sie einfach.',
    'faq.q1': 'Was bedeutet «schlüsselfertig»?',
    'faq.a1': '<p>«Schlüsselfertig» heisst den vollen Zyklus von der Idee bis zum Launch. Ich biete zwei solche Leistungen an:</p><p><b>Marke + Website schlüsselfertig</b> — Recherche, Konzept, Logo und Identität, Markenrichtlinien, Design aller Seiten, Texte, echte programmierte Umsetzung, Formulare und Analytics, Hosting und Domain.</p><p><b>App schlüsselfertig</b> — dasselbe, nur mit einer Webapplikation statt einer Website: Branding, UX/UI, Frontend und Backend, Datenbank, Authentifizierung, Integrationen und Launch. Wenn Sie nur eine Idee haben — ich decke den vollen Zyklus als einzige Ansprechperson ab, vom Konzept bis zum funktionierenden Produkt.</p>',
    'faq.q2': 'Wie lange dauert die Entwicklung?',
    'faq.a2': '<p>Landingpage — 7 bis 14 Tage. Mehrseitenwebsite — 2 bis 4 Wochen. Marke + Site schlüsselfertig — 3 bis 5 Wochen. App — ab einem Monat, je nach Funktionen. Den genauen Zeitplan vereinbaren wir am Anfang.</p>',
    'faq.q3': 'Wie arbeiten wir mit KI?',
    'faq.a3': '<p>KI ist mein Co-Autor, kein Ersatz. KI beschleunigt die Routine (Konzeptvarianten, Texte, Prototypen, Code), während ich Idee, Geschmack, Logik und finale Qualität verantworte. Sie erhalten ein schnelleres und stärkeres Ergebnis als ohne KI — oder als bei Leuten, die sich nur auf KI verlassen.</p>',
    'faq.q4': 'Kann ich nur Design bestellen, ohne Entwicklung?',
    'faq.a4': '<p>Nein — ich nehme nur schlüsselfertige Projekte. Reines Design biete ich nicht an. Meine Stärke ist das integrierte Ergebnis: Marke, Design und echte Entwicklung aus einer Hand, ohne Verlust bei der Übergabe und ohne Kluft zwischen Mockups und der finalen Site.</p>',
    'faq.q5': 'Wie viele Korrekturen sind inbegriffen?',
    'faq.a5': '<p>Korrekturen sind ein normaler Teil des Prozesses. In der Konzeptphase — unbegrenzt, bis das Richtige gefunden ist. Nach Freigabe des Konzepts enthält jede Etappe 2 Korrekturrunden. Weitere werden separat vereinbart.</p>',
    'faq.q6': 'Wie und wann zahle ich?',
    'faq.a6': '<p>50 % im Voraus — zum Start. Die restlichen 50 % — nach finaler Freigabe, vor dem Go-Live. Direkte Zahlung per Banküberweisung (TWINT / IBAN) oder auf eine andere für Sie passende Art.</p>',
    'faq.q7': 'Was, wenn mir das Ergebnis nicht gefällt?',
    'faq.a7': '<p>Ich arbeite in kurzen Iterationen: Jede Etappe wird freigegeben, bevor es weitergeht. Wenn etwas vom Kurs abkommt — sieht man es früh, nicht am Ende. Ich bin persönlich am Ergebnis beteiligt und versuche immer, etwas zu schaffen, das Sie lieben werden. Ihr Projekt ist für mich kein Häkchen, sondern eine lebendige Aufgabe, in die ich mich einbringe.</p>',

    'contact.title': 'Bauen wir Ihr Projekt gemeinsam',
    'contact.lead': 'Senden Sie die Aufgabenbeschreibung und vorhandene Materialien an <a href="mailto:nk@arvut.ch" class="contact__inline-email">nk@arvut.ch</a> — oder schreiben Sie mir über einen Messenger. Wir vereinbaren einen Call, bei dem Sie die Idee teilen und ich erkläre, wie ich sie umsetzen kann, mit Zeitplan und Kosten.',
    'contact.cta1': 'E-Mail schreiben',
    'contact.cta2': 'WhatsApp',
    'contact.channels': 'Telefon / WhatsApp / Telegram / GoChat / Viber / Imo / LiveBook / FaceTime',

    'footer.name': 'Natalia Kovpinetc',
    'footer.role': 'Design & Entwicklung, schlüsselfertig',
    'footer.city': 'Lugano, Schweiz',

    'rv.title': 'Kundenbewertungen',
    'rv.empty.h': 'Noch keine Bewertungen — seien Sie die erste Person.',
    'rv.empty.s': 'Teilen Sie Ihre Erfahrung weiter unten.',
    'rv.form.h': 'Teilen Sie Ihre Erfahrung mit Natalia',
    'rv.form.name': 'Ihr Name',
    'rv.form.role': 'Was Sie tun (optional)',
    'rv.form.text': 'Erzählen Sie, was Ihnen gefallen hat und was besser sein könnte',
    'rv.form.submit': 'Veröffentlichen',
    'rv.form.note': 'Ich bin dankbar für Ihre Bewertung — sie hilft mir zu wachsen und ist wichtig für alle, die noch überlegen, ob sie mich kontaktieren sollen.',

    'a11y.menu': 'Menü',
    'a11y.close': 'Schliessen',
    'a11y.prev': 'Zurück',
    'a11y.next': 'Weiter',
    'a11y.cert': 'Zertifikat',
    'cert.title.1': 'Neuronale Netze: Vom Prinzip zur Praxis',
    'cert.title.2': 'Perplexity: Vom Anfang zum Profi',
    'cert.title.3': 'Vibe Marketing',

    'sm.calc': 'Preis berechnen →',
    'sm.cta': 'Projekt besprechen',
    'sm.h.included': 'Was inbegriffen ist',
    'sm.h.terms': 'Zeitplan und Preis',
    'sm.h.turnkey': 'Schlüsselfertig — wenn Sie nur eine Idee haben',
    'sm.h.mobile': 'Mobile Version — als separate Leistung',
    'sm.h.work': 'Was ich tue',
    'sm.h.payment.50': 'Zahlung: 50 % im Voraus, 50 % nach Freigabe',
    'sm.h.payment.stages': 'Zahlung in Etappen',

    'lang.label': 'Sprache',
  },

  fr: {
    'meta.title': 'Nataly — design & développement, clé en main',
    'meta.desc': 'Marques, sites web et applications conçus de bout en bout avec l’IA — de l’idée au lancement. Suisse.',

    'ai.badge': 'en collaboration avec l’<b>IA</b>',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À propos',
    'nav.faq': 'FAQ',
    'nav.cta': 'Discuter d’un projet',

    'hero.eyebrow': 'Designer graphique & web · développeuse · IA',
    'hero.t1': 'Marques.',
    'hero.t2': 'Sites web.',
    'hero.t3': 'Applications.',
    'hero.sub': 'Projets clé en main, de l’idée au lancement. Logo, identité de marque, design et développement réel avec l’IA. Une seule personne couvre tout le cycle.',
    'hero.cta1': 'Discuter d’un projet',
    'hero.cta2': 'Voir les travaux',
    'hero.stat1.b': '30+', 'hero.stat1.s': 'sites web',
    'hero.stat2.b': '4+', 'hero.stat2.s': 'projets majeurs',
    'hero.stat3.b': '8', 'hero.stat3.s': 'ans en design',
    'hero.stat4.b': '360°', 'hero.stat4.s': 'marque · design · code',

    'services.title': 'Services',
    'services.lead': 'Cycle complet ou une seule étape — comme cela vous convient.',
    'srv.brand-site.h': 'Marque + site web, clé en main',
    'srv.brand-site.p': 'Logo, identité de marque et site web en un seul paquet. Une image cohérente et un site fini, fonctionnel.',
    'srv.websites.h': 'Sites web, clé en main',
    'srv.websites.p': 'Landings et sites multi-pages : design, contenus, intégration réelle et lancement. Responsive et rapide.',
    'srv.apps.h': 'Développement d’applications',
    'srv.apps.p': 'Applications web et plateformes : du prototype au produit fonctionnel avec base de données.',
    'srv.ai.h': 'Automatisation & IA',
    'srv.ai.p': 'Bots, intégrations, assistants IA, mailings. Je vous décharge de la routine grâce à l’intelligence artificielle.',
    'srv.more': 'En savoir plus →',

    'work.title': 'Portfolio',
    'work.lead': 'Des marques complètes, du logo au produit lancé — chacune dans son propre style.',

    'case.lb.tag': 'Plateforme · cartes de visite numériques · communication payante',
    'case.lb.h': 'Arvut LiveBook',
    'case.lb.p': 'Marque et produit pour une plateforme de cartes de visite numériques et de communication payante : logo, landing page et plateforme elle-même.',
    'case.lb.r': ['Marque & logo','Landing','Design UX / UI','Développement','Lancement'],

    'case.vb.tag': 'Application · simulateur',
    'case.vb.h': 'Universal Bank of Abundance',
    'case.vb.p': 'Design et développement d’une application simulateur : marque, interface et application web fonctionnelle de A à Z.',
    'case.vb.r': ['Branding','Design UI','Design UX','Développement','Lancement'],

    'case.sl.tag': 'Conseil juridique et financier',
    'case.sl.h': 'Selinùs Financial Consulting',
    'case.sl.p': 'Marque premium pour une société financière suisse : logo, identité, charte graphique et site multi-pages.',
    'case.sl.r': ['Logo & marque','Design du site','Code','Vidéo promo'],

    'case.ar.tag.a': 'Comptabilité',
    'case.ar.tag.b': 'service',
    'case.ar.h': 'Arvut Accounting',
    'case.ar.p': 'Identité de marque et site corporate pour un cabinet comptable : logo, graphisme et site multi-pages.',
    'case.ar.r': ['Logo & marque','Design du site','Textes','Intégration','Vidéo'],

    'role.globe.title': 'Site multilingue',
    'case.view': 'Voir',

    'pricing.title': 'Tarifs',
    'pricing.lead': 'Les prix de départ sont le minimum. Le coût final dépend du périmètre et se fixe au cas par cas. Le prix « dès » suppose que vous avez déjà du matériel (textes, brief, idée, croquis). Si je fais tout de zéro — le prix se compose des options ci-dessous. Je vous donne un devis précis après un court brief.',
    'price.extras.summary': 'Comment le prix se construit',
    'price.total.label.brand-site': 'À partir de zéro (vous n’apportez que l’idée) :',
    'price.total.label.landing': 'Clé en main, à partir de zéro (vous n’apportez que l’idée) :',
    'price.total.label.multipage': 'Clé en main, à partir de zéro (vous n’apportez que l’idée) :',
    'price.total.label.apps': 'Application complète, clé en main :',
    'price.total.label.ai': 'Solution complexe, clé en main :',

    'p.brand-site.h': 'Marque + site web, clé en main',
    'p.brand-site.p': 'Logo, identité de marque et site web en un seul paquet.',
    'p.brand-site.base': 'Base : brief, textes et matériaux de votre côté. Logo + identité + charte de marque + site une page',
    'p.brand-site.x1': '+ Rédaction',
    'p.brand-site.x2': '+ Site multi-pages au lieu d’une landing',
    'p.brand-site.x3': '+ Version dans une langue supplémentaire',
    'p.brand-site.x4': '+ Vidéo promo (ou vidéo avec avatar IA)',
    'p.seo.included': 'Le SEO on-page de base est inclus dans le prix (meta tags, vitesse, Schema, Open Graph, sitemap).',
    'p.seo.promo': '+ Suivi SEO (forfait mensuel)',
    'p.seo.promo.price': 'dès CHF 2 500/mois',
    'p.seo.audit': '+ Audit SEO (one-shot)',
    'p.seo.audit.price': 'dès CHF 1 500',

    'p.landing.h': 'Landing page, clé en main',
    'p.landing.p': 'Un site une page avec design soigné et intégration réelle.',
    'p.landing.base': 'Base : textes, matériaux et préférences de design de votre côté',
    'p.landing.x1': '+ Rédaction',
    'p.landing.x2': '+ Sections supplémentaires (au-delà de 7 blocs)',
    'p.landing.x3': '+ Animations et effets',
    'p.landing.x4': '+ CRM, paiements, messageries',
    'p.landing.x5': '+ Vidéo promo (ou vidéo avec avatar IA)',
    'p.landing.x6': '+ Version dans une langue supplémentaire',

    'p.multi.h': 'Site multi-pages',
    'p.multi.p': 'Site corporate avec sections, catalogue ou blog.',
    'p.multi.base': 'Base : structure, textes et matériaux de votre côté (jusqu’à 5 pages)',
    'p.multi.x1': '+ Rédaction de zéro',
    'p.multi.x2': '+ Catalogue produits (jusqu’à 50 articles)',
    'p.multi.x3': '+ Blog avec panneau d’administration',
    'p.multi.x4': '+ Version dans une langue supplémentaire',
    'p.multi.x5': '+ CRM, paiements, messageries',
    'p.multi.x6': '+ Vidéo promo (ou vidéo avec avatar IA)',
    'p.multi.x7': '+ Page supplémentaire (au-delà des 5 incluses)',

    'p.apps.h': 'Développement d’applications',
    'p.apps.p': 'Applications web et plateformes — du prototype au produit en ligne.',
    'p.apps.proto': 'Prototype / MVP avec fonctionnalités principales',
    'p.apps.full': 'Application complète (UI/UX, auth, comptes, intégrations, fonctions IA)',
    'p.apps.turnkey': 'Application clé en main — je prends en charge tout le cycle (branding, design, dev, lancement)',
    'p.apps.mob1': 'Version mobile — pour mon application (si j’ai construit la version desktop)',
    'p.apps.mob2': 'Version mobile — pour votre application existante',
    'p.apps.x1': '+ Intégration de paiement (simple → avec abonnements et reçus)',
    'p.apps.x2': '+ Panneau d’administration (simple → complet avec rôles)',

    'p.ai.h': 'Automatisation & IA',
    'p.ai.p': 'Bots, assistants IA, mailings, intégrations et vidéos avec avatar.',
    'p.ai.base': 'Chatbot simple pour messageries',
    'p.ai.x1': '+ Assistant IA entraîné pour votre activité',
    'p.ai.x2': '+ Scénarios à plusieurs étapes avec embranchements',
    'p.ai.x3': '+ Petite app pour une tâche de routine',
    'p.ai.x4': '+ Agent IA vocal',
    'p.ai.x5': '+ Vidéo promo (ou vidéo avec avatar IA)',

    'about.title': 'À propos',
    'about.p1': 'Je m’appelle Natalia Kovpinetc. Je suis designer neuronale et développeuse : je combine de longues années en design graphique avec des outils IA modernes. Je ne fais pas juste une jolie maquette — je porte le projet jusqu’à un site ou une application qui fonctionne.',
    'about.p2': 'J’utilise activement l’IA dans mon travail : elle accélère le processus et renforce le résultat. Mon parcours en marketing et en psychologie m’aide à créer des produits qui vendent vraiment.',
    'about.l1': 'Cycle complet : marque → design → développement → lancement',
    'about.l2': 'Outils IA à chaque étape',
    'about.l3': 'Formation à l’université en ligne ZeroCoder',
    'about.cta1': 'Discuter d’un projet',
    'about.cta2': 'Avis',

    'faq.title': 'FAQ',
    'faq.lead': 'Les questions les plus fréquentes avant de commencer — si la vôtre n’y est pas, demandez-moi.',
    'faq.q1': 'Que comprend le « clé en main » ?',
    'faq.a1': '<p>« Clé en main » veut dire le cycle complet, de l’idée au lancement. Je propose deux prestations de ce type :</p><p><b>Marque + site clé en main</b> — recherche, concept, logo et identité, charte de marque, design de toutes les pages, textes, intégration réelle, formulaires et analytics, hébergement et domaine.</p><p><b>Application clé en main</b> — la même chose mais avec une application web au lieu d’un site : branding, UX/UI, frontend et backend, base de données, authentification, intégrations et lancement. Si vous n’avez qu’une idée — je prends en charge tout le cycle en tant qu’unique prestataire, du concept au produit fonctionnel.</p>',
    'faq.q2': 'Combien de temps prend le développement ?',
    'faq.a2': '<p>Landing page — 7 à 14 jours. Site multi-pages — 2 à 4 semaines. Marque + site clé en main — 3 à 5 semaines. Application — dès un mois, selon les fonctionnalités. Nous fixons les délais exacts dès le départ.</p>',
    'faq.q3': 'Comment travaillons-nous avec l’IA ?',
    'faq.a3': '<p>L’IA est mon co-auteur, pas un remplaçant. L’IA accélère la routine (variantes de concept, textes, prototypes, code), et je reste responsable de l’idée, du goût, de la logique et de la qualité finale. Vous obtenez un résultat plus rapide et plus fort que sans IA — ou que chez ceux qui ne comptent que sur l’IA.</p>',
    'faq.q4': 'Puis-je commander uniquement le design, sans le développement ?',
    'faq.a4': '<p>Non — je ne prends que des projets clé en main. Je ne fais pas du design seul. Ma force est le résultat intégré : marque, design et développement réel par la même personne, sans perte au transfert et sans écart entre les maquettes et le site final.</p>',
    'faq.q5': 'Combien de révisions sont incluses ?',
    'faq.a5': '<p>Les révisions sont une partie normale du processus. En phase de concept — illimitées jusqu’à ce que le bon soit trouvé. Une fois le concept validé, chaque étape inclut 2 tours de révisions. Les suivants sont convenus séparément.</p>',
    'faq.q6': 'Comment et quand je paie ?',
    'faq.a6': '<p>50 % à l’avance — pour démarrer. Les 50 % restants — après validation finale, avant la mise en ligne. Paiement direct par virement (TWINT / IBAN) ou par tout autre moyen qui vous convient.</p>',
    'faq.q7': 'Et si le résultat ne me plaît pas ?',
    'faq.a7': '<p>Je travaille en courtes itérations : chaque étape est validée avant de passer à la suivante. Si quelque chose dévie — cela se voit tôt, pas à la fin. Je suis personnellement investie dans le résultat et j’essaie toujours de faire quelque chose que vous adorerez — votre projet n’est pas une case à cocher, c’est une tâche vivante dans laquelle je m’implique.</p>',

    'contact.title': 'Construisons votre projet ensemble',
    'contact.lead': 'Envoyez la description de la tâche et tous les matériaux à <a href="mailto:nk@arvut.ch" class="contact__inline-email">nk@arvut.ch</a> — ou écrivez-moi sur n’importe quelle messagerie. Nous organisons un appel où vous partagez l’idée et je vous explique comment je peux la réaliser, avec délais et coût.',
    'contact.cta1': 'M’écrire un e-mail',
    'contact.cta2': 'WhatsApp',
    'contact.channels': 'Téléphone / WhatsApp / Telegram / GoChat / Viber / Imo / LiveBook / FaceTime',

    'footer.name': 'Natalia Kovpinetc',
    'footer.role': 'Design & développement, clé en main',
    'footer.city': 'Lugano, Suisse',

    'rv.title': 'Avis clients',
    'rv.empty.h': 'Pas encore d’avis — soyez la première personne.',
    'rv.empty.s': 'Partagez votre expérience ci-dessous.',
    'rv.form.h': 'Partagez votre expérience avec Natalia',
    'rv.form.name': 'Votre nom',
    'rv.form.role': 'Ce que vous faites (facultatif)',
    'rv.form.text': 'Dites ce qui vous a plu et ce qui pourrait être amélioré',
    'rv.form.submit': 'Publier',
    'rv.form.note': 'Je serai reconnaissante pour votre avis — il m’aide à progresser et compte pour celles et ceux qui hésitent encore à me contacter.',

    'a11y.menu': 'Menu',
    'a11y.close': 'Fermer',
    'a11y.prev': 'Précédent',
    'a11y.next': 'Suivant',
    'a11y.cert': 'Certificat',
    'cert.title.1': 'Réseaux de neurones : du principe à la pratique',
    'cert.title.2': 'Perplexity : du débutant à l’expert',
    'cert.title.3': 'Vibe Marketing',

    'sm.calc': 'Calculer le prix →',
    'sm.cta': 'Discuter d’un projet',
    'sm.h.included': 'Ce qui est inclus',
    'sm.h.terms': 'Délais et prix',
    'sm.h.turnkey': 'Clé en main — si vous n’avez qu’une idée',
    'sm.h.mobile': 'Version mobile — en prestation séparée',
    'sm.h.work': 'Ce que je fais',
    'sm.h.payment.50': 'Paiement : 50 % à l’avance, 50 % après validation',
    'sm.h.payment.stages': 'Paiement par étapes',

    'lang.label': 'Langue',
  },

  it: {
    'meta.title': 'Nataly — design & sviluppo, chiavi in mano',
    'meta.desc': 'Brand, siti web e app realizzati end-to-end con l’IA — dall’idea al lancio. Svizzera.',

    'ai.badge': 'in collaborazione con l’<b>IA</b>',
    'nav.services': 'Servizi',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Prezzi',
    'nav.about': 'Chi sono',
    'nav.faq': 'FAQ',
    'nav.cta': 'Parliamo del progetto',

    'hero.eyebrow': 'Designer grafica & web · sviluppatrice · IA',
    'hero.t1': 'Brand.',
    'hero.t2': 'Siti web.',
    'hero.t3': 'App.',
    'hero.sub': 'Progetti chiavi in mano, dall’idea al lancio. Logo, identità di brand, design e sviluppo reale con l’IA. Una sola persona copre l’intero ciclo.',
    'hero.cta1': 'Parliamo del progetto',
    'hero.cta2': 'Vedi i lavori',
    'hero.stat1.b': '30+', 'hero.stat1.s': 'siti web',
    'hero.stat2.b': '4+', 'hero.stat2.s': 'progetti maggiori',
    'hero.stat3.b': '8', 'hero.stat3.s': 'anni nel design',
    'hero.stat4.b': '360°', 'hero.stat4.s': 'brand · design · code',

    'services.title': 'Servizi',
    'services.lead': 'Ciclo completo o una singola fase — come Le è più comodo.',
    'srv.brand-site.h': 'Brand + sito web, chiavi in mano',
    'srv.brand-site.p': 'Logo, identità di brand e sito web in un unico pacchetto. Un’immagine coerente e un sito finito e funzionante.',
    'srv.websites.h': 'Siti web, chiavi in mano',
    'srv.websites.p': 'Landing page e siti multipagina: design, testi, sviluppo reale e lancio. Responsivi e veloci.',
    'srv.apps.h': 'Sviluppo di applicazioni',
    'srv.apps.p': 'Web app e piattaforme: dal prototipo a un prodotto funzionante con database.',
    'srv.ai.h': 'Automazione & IA',
    'srv.ai.p': 'Bot, integrazioni, assistenti IA, mailing. Tolgo la routine dalle Sue spalle con l’intelligenza artificiale.',
    'srv.more': 'Scopri di più →',

    'work.title': 'Portfolio',
    'work.lead': 'Brand completi, dal logo al prodotto lanciato — ognuno con il proprio stile.',

    'case.lb.tag': 'Piattaforma · biglietti da visita digitali · comunicazioni a pagamento',
    'case.lb.h': 'Arvut LiveBook',
    'case.lb.p': 'Brand e prodotto per una piattaforma di biglietti da visita digitali e comunicazioni a pagamento: logo, landing page e la piattaforma stessa.',
    'case.lb.r': ['Brand & logo','Landing','Design UX / UI','Sviluppo','Lancio'],

    'case.vb.tag': 'App · simulatore',
    'case.vb.h': 'Universal Bank of Abundance',
    'case.vb.p': 'Design e sviluppo di un’app simulatore: brand, interfaccia e applicazione web funzionante dall’inizio alla fine.',
    'case.vb.r': ['Branding','Design UI','Design UX','Sviluppo','Lancio'],

    'case.sl.tag': 'Consulenza legale e finanziaria',
    'case.sl.h': 'Selinùs Financial Consulting',
    'case.sl.p': 'Brand premium per una società finanziaria svizzera: logo, identità, brand guidelines e sito multipagina.',
    'case.sl.r': ['Logo & brand','Design del sito','Sviluppo','Video promo'],

    'case.ar.tag.a': 'Contabilità',
    'case.ar.tag.b': 'servizio',
    'case.ar.h': 'Arvut Accounting',
    'case.ar.p': 'Identità di brand e sito aziendale per uno studio di contabilità: logo, grafica e sito multipagina.',
    'case.ar.r': ['Logo & brand','Design del sito','Testi','Realizzazione','Video'],

    'role.globe.title': 'Sito multilingue',
    'case.view': 'Visita',

    'pricing.title': 'Prezzi',
    'pricing.lead': 'I prezzi di partenza sono il minimo. Il costo finale dipende dall’ambito e si concorda caso per caso. Il prezzo «da» presuppone che Lei abbia già materiali (testi, brief, idea, schizzi). Se faccio tutto da zero, il prezzo si compone dalle aggiunte qui sotto. Dopo un breve brief Le do un preventivo preciso.',
    'price.extras.summary': 'Come si forma il prezzo',
    'price.total.label.brand-site': 'Da zero (solo l’idea è Sua):',
    'price.total.label.landing': 'Chiavi in mano da zero (solo l’idea è Sua):',
    'price.total.label.multipage': 'Chiavi in mano da zero (solo l’idea è Sua):',
    'price.total.label.apps': 'App completa, chiavi in mano:',
    'price.total.label.ai': 'Soluzione complessa, chiavi in mano:',

    'p.brand-site.h': 'Brand + sito web, chiavi in mano',
    'p.brand-site.p': 'Logo, identità di brand e sito web in un unico pacchetto.',
    'p.brand-site.base': 'Base: brief, testi e materiali da parte Sua. Logo + identità + brand guidelines + sito di una pagina',
    'p.brand-site.x1': '+ Copywriting',
    'p.brand-site.x2': '+ Sito multipagina al posto della landing',
    'p.brand-site.x3': '+ Versione in una lingua aggiuntiva',
    'p.brand-site.x4': '+ Video promo (o video con avatar IA)',
    'p.seo.included': 'La SEO on-page di base è inclusa nel prezzo (meta tag, velocità, Schema, Open Graph, sitemap).',
    'p.seo.promo': '+ Attività SEO continuativa (canone mensile)',
    'p.seo.promo.price': 'da CHF 2 500/mese',
    'p.seo.audit': '+ Audit SEO (una tantum)',
    'p.seo.audit.price': 'da CHF 1 500',

    'p.landing.h': 'Landing page, chiavi in mano',
    'p.landing.p': 'Un sito di una pagina con design curato e sviluppo reale.',
    'p.landing.base': 'Base: testi, materiali e preferenze di design da parte Sua',
    'p.landing.x1': '+ Copywriting',
    'p.landing.x2': '+ Sezioni aggiuntive (oltre 7 blocchi)',
    'p.landing.x3': '+ Animazioni ed effetti',
    'p.landing.x4': '+ CRM, pagamenti, messaggistica',
    'p.landing.x5': '+ Video promo (o video con avatar IA)',
    'p.landing.x6': '+ Versione in una lingua aggiuntiva',

    'p.multi.h': 'Sito multipagina',
    'p.multi.p': 'Sito aziendale con sezioni, catalogo o blog.',
    'p.multi.base': 'Base: struttura, testi e materiali da parte Sua (fino a 5 pagine)',
    'p.multi.x1': '+ Copywriting da zero',
    'p.multi.x2': '+ Catalogo prodotti (fino a 50 articoli)',
    'p.multi.x3': '+ Blog con pannello di amministrazione',
    'p.multi.x4': '+ Versione in una lingua aggiuntiva',
    'p.multi.x5': '+ CRM, pagamenti, messaggistica',
    'p.multi.x6': '+ Video promo (o video con avatar IA)',
    'p.multi.x7': '+ Pagina aggiuntiva (oltre le 5 della base)',

    'p.apps.h': 'Sviluppo di applicazioni',
    'p.apps.p': 'Web app e piattaforme — dal prototipo al prodotto online.',
    'p.apps.proto': 'Prototipo / MVP con funzionalità principali',
    'p.apps.full': 'Applicazione completa (UI/UX, auth, account, integrazioni, funzioni IA)',
    'p.apps.turnkey': 'Applicazione chiavi in mano — gestisco l’intero ciclo (branding, design, sviluppo, lancio)',
    'p.apps.mob1': 'Versione mobile — per la mia applicazione (se ho realizzato la desktop)',
    'p.apps.mob2': 'Versione mobile — per la Sua app esistente',
    'p.apps.x1': '+ Integrazione dei pagamenti (semplice → con abbonamenti e ricevute)',
    'p.apps.x2': '+ Pannello di amministrazione (semplice → completo con ruoli)',

    'p.ai.h': 'Automazione & IA',
    'p.ai.p': 'Bot, assistenti IA, mailing, integrazioni e video con avatar.',
    'p.ai.base': 'Chatbot semplice per messaggistica',
    'p.ai.x1': '+ Assistente IA addestrato sul Suo business',
    'p.ai.x2': '+ Scenari a più passaggi con biforcazioni',
    'p.ai.x3': '+ Piccola app per un’attività di routine',
    'p.ai.x4': '+ Agente IA vocale',
    'p.ai.x5': '+ Video promo (o video con avatar IA)',

    'about.title': 'Chi sono',
    'about.p1': 'Mi chiamo Natalia Kovpinetc. Sono una neural designer e sviluppatrice: unisco molti anni di esperienza nel design grafico agli strumenti IA moderni. Non disegno solo un’immagine carina — porto il progetto fino a un sito o un’app funzionante.',
    'about.p2': 'Uso attivamente l’IA nel mio lavoro: accelera il processo e rafforza il risultato. Il mio percorso in marketing e psicologia mi aiuta a creare prodotti che vendono davvero.',
    'about.l1': 'Ciclo completo: brand → design → sviluppo → lancio',
    'about.l2': 'Strumenti IA in ogni fase',
    'about.l3': 'Formazione all’università online ZeroCoder',
    'about.cta1': 'Parliamo del progetto',
    'about.cta2': 'Recensioni',

    'faq.title': 'FAQ',
    'faq.lead': 'Le domande più frequenti prima di iniziare — se la Sua non c’è, basta chiedere.',
    'faq.q1': 'Cosa comprende il «chiavi in mano»?',
    'faq.a1': '<p>«Chiavi in mano» significa il ciclo completo dall’idea al lancio. Offro due servizi di questo tipo:</p><p><b>Brand + sito chiavi in mano</b> — ricerca, concept, logo e identità, brand guidelines, design di tutte le pagine, testi, sviluppo reale, configurazione di form e analytics, hosting e dominio.</p><p><b>App chiavi in mano</b> — la stessa cosa ma con un’applicazione web al posto del sito: branding, UX/UI, frontend e backend, database, autenticazione, integrazioni e lancio. Se ha solo un’idea — copro l’intero ciclo come unica referente, dal concept al prodotto funzionante.</p>',
    'faq.q2': 'Quanto dura lo sviluppo?',
    'faq.a2': '<p>Landing page — da 7 a 14 giorni. Sito multipagina — da 2 a 4 settimane. Brand + sito chiavi in mano — da 3 a 5 settimane. Applicazione — da un mese in base alle funzionalità. I tempi esatti si concordano all’inizio.</p>',
    'faq.q3': 'Come lavoriamo con l’IA?',
    'faq.a3': '<p>L’IA è il mio co-autore, non un sostituto. L’IA accelera la routine (varianti di concept, testi, prototipi, codice), mentre io tengo idea, gusto, logica e qualità finale. Ottiene un risultato più rapido e più solido di quello senza IA — o di quello di chi si affida solo all’IA.</p>',
    'faq.q4': 'Posso ordinare solo il design, senza lo sviluppo?',
    'faq.a4': '<p>No — prendo solo progetti chiavi in mano. Non faccio solo design. La mia forza è il risultato integrato: brand, design e sviluppo reale dalla stessa persona, senza perdite nel passaggio e senza divario fra mockup e sito finale.</p>',
    'faq.q5': 'Quante revisioni sono incluse?',
    'faq.a5': '<p>Le revisioni sono una parte normale del processo. In fase di concept — illimitate, finché non troviamo quello giusto. Dopo l’approvazione del concept ogni fase include 2 round di revisioni. Eventuali ulteriori si concordano a parte.</p>',
    'faq.q6': 'Come e quando si paga?',
    'faq.a6': '<p>50 % in anticipo — per partire. Il restante 50 % — dopo l’approvazione finale, prima del go-live. Pagamento diretto con bonifico (TWINT / IBAN) o in altro modo a Lei comodo.</p>',
    'faq.q7': 'E se il risultato non mi piacesse?',
    'faq.a7': '<p>Lavoro per brevi iterazioni: ogni fase viene approvata prima di proseguire. Se qualcosa va fuori rotta, lo si vede presto, non alla fine. Sono coinvolta personalmente nel risultato e cerco sempre di creare qualcosa che Lei amerà — il Suo progetto per me non è una casella da spuntare, è un compito vivo in cui mi metto in gioco.</p>',

    'contact.title': 'Costruiamo insieme il Suo progetto',
    'contact.lead': 'Invii la descrizione del lavoro e i materiali a <a href="mailto:nk@arvut.ch" class="contact__inline-email">nk@arvut.ch</a> — oppure mi scriva su qualsiasi messaggistica. Organizziamo una call in cui Lei condivide l’idea e io Le spiego come la posso realizzare, con tempi e costi.',
    'contact.cta1': 'Inviami un’email',
    'contact.cta2': 'WhatsApp',
    'contact.channels': 'Telefono / WhatsApp / Telegram / GoChat / Viber / Imo / LiveBook / FaceTime',

    'footer.name': 'Natalia Kovpinetc',
    'footer.role': 'Design & sviluppo, chiavi in mano',
    'footer.city': 'Lugano, Svizzera',

    'rv.title': 'Recensioni dei clienti',
    'rv.empty.h': 'Nessuna recensione ancora — sia la prima persona.',
    'rv.empty.s': 'Condivida la Sua esperienza qui sotto.',
    'rv.form.h': 'Condivida la Sua esperienza con Natalia',
    'rv.form.name': 'Il Suo nome',
    'rv.form.role': 'Cosa fa (facoltativo)',
    'rv.form.text': 'Racconti cosa Le è piaciuto e cosa si potrebbe migliorare',
    'rv.form.submit': 'Pubblica',
    'rv.form.note': 'Le sarò grata per la Sua recensione — mi aiuta a crescere e conta per chi sta ancora pensando se contattarmi.',

    'a11y.menu': 'Menu',
    'a11y.close': 'Chiudi',
    'a11y.prev': 'Precedente',
    'a11y.next': 'Successivo',
    'a11y.cert': 'Certificato',
    'cert.title.1': 'Reti neurali: dal principio alla pratica',
    'cert.title.2': 'Perplexity: dal principiante al professionista',
    'cert.title.3': 'Vibe Marketing',

    'sm.calc': 'Calcola il prezzo →',
    'sm.cta': 'Parliamo del progetto',
    'sm.h.included': 'Cosa è incluso',
    'sm.h.terms': 'Tempi e prezzo',
    'sm.h.turnkey': 'Chiavi in mano — se ha solo un’idea',
    'sm.h.mobile': 'Versione mobile — come servizio a parte',
    'sm.h.work': 'Cosa faccio',
    'sm.h.payment.50': 'Pagamento: 50 % in anticipo, 50 % dopo l’approvazione',
    'sm.h.payment.stages': 'Pagamento per fasi',

    'lang.label': 'Lingua',
  },
};

const LANG_KEY = 'nataly_ch_lang';
const LANG_DEFAULT = 'en';
const LANG_LIST = ['en', 'de', 'fr', 'it'];

function currentLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && T[saved]) return saved;
  return LANG_DEFAULT;
}

function setLang(lang) {
  if (!T[lang]) lang = LANG_DEFAULT;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n(lang);
}

function applyI18n(lang) {
  if (!T[lang]) lang = LANG_DEFAULT;
  document.documentElement.lang = lang;
  document.title = T[lang]['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = T[lang]['meta.desc'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] != null) el.textContent = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[lang][key] != null) el.innerHTML = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[lang][key] != null) el.placeholder = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (T[lang][key] != null) el.title = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (T[lang][key] != null) el.setAttribute('aria-label', T[lang][key]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.dataset.i18nAlt;
    if (T[lang][key] != null) el.alt = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-roles]').forEach(ul => {
    const key = ul.dataset.i18nRoles;
    const arr = T[lang][key];
    if (!Array.isArray(arr)) return;
    const iconLi = ul.querySelector('.role--icon');
    ul.innerHTML = arr.map(t => `<li>${t}</li>`).join('') + (iconLi ? iconLi.outerHTML : '');
  });

  // active state на переключателе
  document.querySelectorAll('.lang-switch [data-lang]').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  const cur = document.querySelector('.lang-switch__current');
  if (cur) cur.textContent = lang.toUpperCase();

  document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n(currentLang());
  // Привязка к кнопкам переключателя
  document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      // Закрыть выпадающее меню после выбора
      const dd = btn.closest('.lang-switch');
      if (dd) dd.classList.remove('open');
    });
  });
  // Открытие/закрытие dropdown по триггеру
  document.querySelectorAll('.lang-switch__trigger').forEach(t => {
    t.addEventListener('click', (e) => {
      e.stopPropagation();
      const dd = t.closest('.lang-switch');
      if (dd) dd.classList.toggle('open');
    });
  });
  // Клик вне — закрыть
  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-switch.open').forEach(dd => dd.classList.remove('open'));
  });
});

window.i18nT = T;
window.i18nLang = currentLang;
window.i18nApply = applyI18n;
window.i18nSet = setLang;
