# Samarth Choudhary — Premium Personal Portfolio & Digital Resume

A world-class, recruiter-ready, high-fidelity personal portfolio and digital resume website designed for **Samarth Choudhary**. Built using **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and highly optimized animations using **Framer Motion** and **GSAP**.

---

## 🎨 Tech Stack & Architecture

* **Core**: Next.js 15 (App Router), React 19, TypeScript
* **Styling**: Tailwind CSS v4 (using `@theme inline` tokens, glassmorphism utilities)
* **Animations**:
  * **HTML5 Canvas + GSAP**: For high-performance particle intro loading sequences without loading heavy packages (Three.js).
  * **Framer Motion**: Staggered scroll reveals, tab transitions, sliding items, hover tilt effects.
* **Integrations**: Real-time GitHub Profile Stats & Contribution Graph APIs.
* **SEO & Social Optimization**: Structured JSON-LD schemas, OpenGraph meta tags specifically optimized for WhatsApp, LinkedIn, Twitter, and placement search bots.

---

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

This will automatically configure packages like `framer-motion`, `gsap`, `react-icons`, and `react-type-animation`.

### 2. Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 3. Production Build

Verify TypeScript integrity and compile the optimized production bundle:

```bash
# Type check verification
npx tsc --noEmit

# Compile production bundle
npm run build
```

---

## 📂 Project Structure

* `src/lib/data.ts`: Centralized resume data constant file. Easily update your projects, skills, history, and social links in one file.
* `src/components/Preloader.tsx`: GSAP + HTML5 Canvas neural loading animation.
* `src/components/Navbar.tsx`: Fixed header tracking viewport scrolling.
* `src/components/Hero.tsx`: Typography header with Typing roles.
* `src/components/About.tsx`: Stat counters and decorative SC card layout.
* `src/components/Skills.tsx`: Dynamically organized tech tabs.
* `src/components/Projects.tsx`: Interactive cards with expandable feature highlights.
* `src/components/Experience.tsx` & `src/components/Education.tsx`: Animated visual histories.
* `src/components/GitHub.tsx`: Dynamic profile integrations.
* `src/components/Contact.tsx`: Validated client-side mail draft.

---

## 🔗 Deployment

This application is ready to deploy on **Vercel** with a single click. Simply push to GitHub, link your repository on Vercel, and click **Deploy**. Next.js will build it statically for maximum rendering speeds and performance.

---

## 📝 License

Designed & Developed as a professional personal brand. Feel free to customize and expand it.
