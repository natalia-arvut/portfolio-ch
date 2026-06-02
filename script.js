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

const services = {
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
};

function renderService(key) {
  const s = services[key];
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

// Supabase — separate Swiss table `reviews_ch` (see sql/supabase-reviews-ch.sql)
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
