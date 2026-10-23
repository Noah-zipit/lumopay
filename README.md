# LumoPay — wallet interface design study

A front-end design study of a digital wallet, built with plain HTML, CSS and JavaScript. LumoPay is a fictional brand created for this project. It is not a bank or payment service, does not hold or move money, and is not affiliated with PayPal, Inc. All names, balances and transactions in the interface are sample data.

Live site: https://lumopay.vercel.app

## Screens

- `index.html` — marketing homepage: hero with a working wallet phone mock, pay / send / save tabs, security band, debit card section, business invoicing section
- `dashboard.html` — web account dashboard: balance card, recent activity, send again, banks and cards
- `app.html` — mobile app screen: balance tiles, account setup progress, send again, bottom navigation
- `activity.html` — full activity list
- `wallet.html` — wallet, savings pot, linked banks and cards
- `send.html` — send and request form that runs locally in the browser and updates the sample balance

## Design notes

The layout studies the structure of large wallet products: a deep-blue application bar on account screens, white cards on a warm off-white page background, a pale-blue marketing hero, and pill-shaped primary actions. The brand mark is two overlapping circles drawn as a pure graphic. The balance is kept in `localStorage` so the send flow updates every screen consistently. A scroll-driven moment in the hero lifts and tilts the phone as the page scrolls, disabled under `prefers-reduced-motion`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8899
```

Then visit http://127.0.0.1:8899

## License

MIT
