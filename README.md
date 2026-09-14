# Velora

Freelance studio website — websites, SEO, performance marketing, keyword optimization.

Built with **Next.js 15 (App Router)** + **Framer Motion** + **Tailwind CSS**.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy — GitHub + Vercel (5 minutes)

### Step 1 — Push to GitHub

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Velora — initial"
git branch -M main
git remote add origin https://github.com/<your-username>/velora.git
git push -u origin main
```

(Create the empty `velora` repo on GitHub first — no README, no .gitignore.)

### Step 2 — Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `velora` repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**

Live in ~60 seconds at `velora-xxx.vercel.app`. Add your custom domain from Vercel → Settings → Domains.

---

## What to update after launch

Edit these files as content changes:

| File | What to edit |
|------|-------------|
| `lib/clients.js` | Client list + WhatsApp / phone numbers |
| `app/services/page.jsx` | Package prices, service details |
| `app/about/page.jsx` | Founder story, stats |
| `app/contact/page.jsx` | Add real email when ready |
| `app/layout.jsx` | SEO metadata (title, description, keywords) |

To replace the browser-frame mockups with real client screenshots later:
1. Drop screenshots into `public/clients/` (e.g., `jmb-bakers.png`)
2. Update `components/ClientCard.jsx` to render an `<img>` in the aspect box

---

## Design tokens

Colors, fonts, spacing all in `tailwind.config.js`. Change once, update everywhere.

- **Cream** `#FFF1C9` — base
- **Tangerine** `#FF5B1F` — primary accent
- **Violet** `#7B5CFF` — secondary accent
- **Ink** `#1B1200` — text

Fonts: Sentient (display) + General Sans (body), loaded from Fontshare in `app/globals.css`.

---

## Stack

- Next.js 15 (App Router)
- React 19
- Framer Motion 11
- Tailwind CSS 3.4
- Fontshare (free web fonts)

No paid dependencies. No API keys needed to deploy.
