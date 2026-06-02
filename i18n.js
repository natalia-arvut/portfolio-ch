/* ===== English-only i18n (Swiss site). Dictionary is extensible for DE/FR/IT later ===== */
const T = {
  en: {
    /* meta */
    'meta.title': 'Nataly — design & development, turnkey',
    'meta.desc': 'Brands, websites and apps built end-to-end with AI — from idea to launch. Switzerland.',

    /* nav */
    'ai.badge': 'in collaboration with <b>AI</b>',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.cta': 'Discuss a project',

    /* hero */
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

    /* services */
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

    /* portfolio */
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

    /* pricing */
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

    /* about */
    'about.title': 'About me',
    'about.p1': 'My name is Natalia. I\'m a neural designer and developer: I combine years of graphic design experience with modern AI tools. I don\'t just draw a pretty picture — I take the project all the way to a working site or app.',
    'about.p2': 'I actively use AI in my work: it speeds things up and strengthens the result. My background in marketing and psychology helps me build products that actually sell.',
    'about.l1': 'Full cycle: brand → design → development → launch',
    'about.l2': 'AI tools at every stage',
    'about.l3': 'Education at ZeroCoder online university',
    'about.cta1': 'Discuss a project',
    'about.cta2': 'Reviews',

    /* faq */
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

    /* contact */
    'contact.title': 'Let\'s build your project together',
    'contact.lead': 'Send the task description and any materials to <a href="mailto:nk@arvut.ch" class="contact__inline-email">nk@arvut.ch</a> — or message me on any messenger. We\'ll arrange a call where you share the idea, and I\'ll explain how I can build it, with timing and cost.',
    'contact.cta1': 'Email me',
    'contact.cta2': 'WhatsApp',
    'contact.channels': 'Phone / WhatsApp / Telegram / GoChat / Viber / Imo / LiveBook / FaceTime',

    /* footer */
    'footer.name': 'Natalia Kovpinetc',
    'footer.role': 'Design & development, turnkey',

    /* reviews */
    'rv.title': 'Client reviews',
    'rv.empty.h': 'No reviews yet — be the first.',
    'rv.empty.s': 'Share your experience below.',
    'rv.form.h': 'Share your experience working with Natalia',
    'rv.form.name': 'Your name',
    'rv.form.role': 'What you do (optional)',
    'rv.form.text': 'Tell what you liked and what could be improved',
    'rv.form.submit': 'Publish',
    'rv.form.note': 'I\'ll be grateful for your review — it helps me grow and matters to people still deciding whether to reach out.',

    /* a11y */
    'a11y.menu': 'Menu',
    'a11y.close': 'Close',
    'a11y.prev': 'Previous',
    'a11y.next': 'Next',
    'a11y.cert': 'Certificate',
    'cert.title.1': 'Neural Networks: From Principle to Practice',
    'cert.title.2': 'Perplexity: From Beginner to Pro',
    'cert.title.3': 'Vibe Marketing',

    /* service modal common */
    'sm.calc': 'Calculate price →',
    'sm.cta': 'Discuss a project',
    'sm.h.included': 'What\'s included',
    'sm.h.terms': 'Timing and price',
    'sm.h.turnkey': 'Turnkey — if you only have an idea',
    'sm.h.mobile': 'Mobile version — as a separate service',
    'sm.h.work': 'What I do',
    'sm.h.payment.50': 'Payment: 50% upfront, 50% after approval',
    'sm.h.payment.stages': 'Payment by stages',
  }
};

function applyI18n(lang) {
  if (!T[lang]) lang = 'en';
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

  document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n('en');
});

window.i18nT = T;
window.i18nLang = () => 'en';
window.i18nApply = applyI18n;
