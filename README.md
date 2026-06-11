# WeFlow Solutions — Company Website

The official website of **WeFlow Solutions**, a global technology partner engineering blockchain, AI, and full-stack software solutions.

🌐 <https://weflowsolutions.com>

## 🖥️ Technologies Used

- [Next.js](https://nextjs.org/) : A React-based, open-source framework for building efficient and scalable web applications.
- [Tailwind CSS](https://tailwindcss.com) : A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that provides enhanced tooling and developer productivity.
- [Framer Motion](https://www.framer.com/motion/): A React animation library that brings motion to your user interfaces.
- [Lucide](https://lucide.dev/): A clean and consistent icon library.
- [Nodemailer](https://nodemailer.com/): A Node.js library for the contact-form email integration.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

## 🎨 Theming

The design system lives in `src/styles/globals.css` (CSS variables for light/dark themes plus brand-gradient utilities) and `tailwind.config.js` (brand colors, fonts, animations). The brand gradient flows cyan → indigo → violet.

## 🛑 Important Notes

1. **Do not commit your Nodemailer password** — keep it in a `.env` file.
2. Use [Next.js API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) for Nodemailer transporters so credentials never reach the client.
3. Update the Google site verification code in `src/data/siteMetaData.mjs`.

## ✉️ Nodemailer Setup

Create a `.env` file with your Gmail app credentials:

```env
GMAIL_PASSKEY=your-app-password
GMAIL_USEDFOR_NODEMAILER=your-email@gmail.com
```
