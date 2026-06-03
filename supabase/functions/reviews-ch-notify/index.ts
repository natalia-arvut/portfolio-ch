// Supabase Edge Function: reviews-ch-notify
// Triggered by a Database Webhook on INSERT into public.reviews_ch.
// Sends a styled HTML email via Resend to the site owner.
//
// Required environment variable (set via Supabase Dashboard → Settings → Edge Functions → Secrets):
//   RESEND_API_KEY = re_...
//
// Deploy:
//   supabase functions deploy reviews-ch-notify --no-verify-jwt
// or via Dashboard → Edge Functions → New function (paste this code).

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const FROM = "Portfolio CH <portfolio@livebook.ch>";
const TO = ["nk@arvut.ch"];
const SITE = "https://natalia-arvut.github.io/portfolio-ch/";

function escapeHtml(s: unknown): string {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]!
  );
}

function buildEmail(record: Record<string, unknown>) {
  const name = escapeHtml(record.name);
  const role = record.role ? escapeHtml(record.role) : "";
  const text = escapeHtml(record.text).replace(/\n/g, "<br />");
  const rating = Number(record.rating) || 0;
  const stars = "★".repeat(rating) + "<span style='opacity:.3'>" + "★".repeat(5 - rating) + "</span>";
  const lang = String(record.language ?? "en").toUpperCase();
  const when = new Date(String(record.created_at ?? new Date().toISOString())).toLocaleString("en-CH", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `New review on portfolio-ch: ${rating}★ from ${String(record.name ?? "Anonymous")}`;

  const html = `<!doctype html>
<html><body style="margin:0;padding:0;background:#070a1a;font-family:Geist,'Helvetica Neue',Arial,sans-serif;color:#f3f5ff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#070a1a;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:580px;background:#0d1230;border-radius:18px;border:1px solid rgba(0,224,248,.18);overflow:hidden;">
        <tr><td style="padding:28px 32px 18px 32px;background:linear-gradient(115deg,#00e0f8 0%,#638aff 38%,#b500ff 72%,#f600ff 100%);">
          <div style="font-size:12px;letter-spacing:.18em;color:#06081a;font-weight:700;text-transform:uppercase;">New client review</div>
          <div style="font-size:22px;font-weight:700;color:#06081a;margin-top:6px;">${rating}★ from ${name}</div>
        </td></tr>
        <tr><td style="padding:24px 32px 6px 32px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:14px;color:#9aa3c7;">
            <tr><td style="padding:6px 0;">Name</td><td align="right" style="padding:6px 0;color:#f3f5ff;font-weight:600;">${name}</td></tr>
            ${role ? `<tr><td style="padding:6px 0;">Role</td><td align="right" style="padding:6px 0;color:#f3f5ff;">${role}</td></tr>` : ""}
            <tr><td style="padding:6px 0;">Rating</td><td align="right" style="padding:6px 0;color:#00e0f8;font-size:16px;letter-spacing:2px;">${stars}</td></tr>
            <tr><td style="padding:6px 0;">Language</td><td align="right" style="padding:6px 0;color:#f3f5ff;">${lang}</td></tr>
            <tr><td style="padding:6px 0;">Received</td><td align="right" style="padding:6px 0;color:#9aa3c7;">${when}</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:18px 32px 28px 32px;">
          <div style="border-left:3px solid #00e0f8;background:rgba(0,224,248,.05);padding:14px 18px;border-radius:10px;color:#f3f5ff;font-size:15px;line-height:1.55;">
            ${text}
          </div>
        </td></tr>
        <tr><td style="padding:0 32px 28px 32px;text-align:center;">
          <a href="${SITE}#about" style="display:inline-block;padding:12px 22px;border-radius:999px;background:linear-gradient(115deg,#00e0f8 0%,#638aff 38%,#b500ff 72%,#f600ff 100%);color:#06081a;text-decoration:none;font-weight:700;font-size:14px;">Open portfolio</a>
        </td></tr>
        <tr><td style="padding:16px 32px;background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.06);font-size:11px;color:#9aa3c7;text-align:center;">
          Sent automatically by Supabase + Resend when a new review is published on your Swiss portfolio.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text_plain =
`New review on your Swiss portfolio
${rating}★ from ${String(record.name ?? "Anonymous")}${role ? ` (${String(record.role)})` : ""}
Language: ${lang}
Received: ${when}

"${String(record.text ?? "")}"

Open: ${SITE}#about`;

  return { subject, html, text_plain };
}

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return new Response("Server not configured", { status: 500 });
  }

  let payload: { type?: string; record?: Record<string, unknown> };
  try {
    payload = await req.json();
  } catch (_e) {
    return new Response("Bad JSON", { status: 400 });
  }

  if (payload.type !== "INSERT" || !payload.record) {
    // Be permissive: also process if just a record is sent.
    if (!payload.record) {
      return new Response("Ignored (no record)", { status: 200 });
    }
  }

  const { subject, html, text_plain } = buildEmail(payload.record!);

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      subject,
      html,
      text: text_plain,
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text();
    console.error("Resend error", resp.status, detail);
    return new Response(JSON.stringify({ ok: false, status: resp.status, detail }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = await resp.json();
  return new Response(JSON.stringify({ ok: true, id: data?.id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
