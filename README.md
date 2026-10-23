# The Brand Pipeline

![The Brand Pipeline](./screenshot.png)

Marketing site for The Brand Pipeline, a studio that does strategy, marketing, design, and development. One page: hero, services, process, why us, and a contact form.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Contact form

Enquiries are handled by a server action in `app/actions.ts`. Set `CONTACT_WEBHOOK_URL` to a Slack, Zapier, Make, or CRM endpoint and submissions are POSTed there as JSON. Without it, the form still validates and shows success, but the enquiry is only logged on the server.

## Stack

Next.js, React, TypeScript, Tailwind CSS.
