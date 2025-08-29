export default function OneProductStore() {
  // === KONFIGURACJA DO PODMIANY ===
  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/5kQ28sbXh5Kj5sN1j80sU04
  const FB_PIXEL_ID = ""; // np. 123456789012345
  const TIKTOK_PIXEL_ID = ""; // np. CBA123XYZ

  // --- DANE PRODUKTU (edytuj) ---
  const product = {
    name: "Nazwa produktu",
    subtitle: "Krótki claim korzyści w jednym zdaniu",
    price: "149,00 zł",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1612831197319-8b1d9f3d3b61?q=80&w=1600&auto=format&fit=crop", // podmień na swoje
    benefits: [
      "Kluczowa korzyść #1 w języku efektu",
      "Kluczowa korzyść #2 z liczbą lub konkretem",
      "Kluczowa korzyść #3 rozwiązująca główny ból",
    ],
    features: [
      { title: "Specyfikacja", desc: "Najważniejsze parametry techniczne w 2–4 punktach." },
      { title: "Dla kogo", desc: "Segment docelowy i zastosowania." },
      { title: "W pudełku", desc: "Zawartość zestawu i gwarancja." },
    ],
    faqs: [
      { q: "Wysyłka i czas dostawy", a: "Wysyłamy w 24 h z PL. Dostawa 1–3 dni robocze." },
      { q: "Zwroty", a: "Masz 14 dni na zwrot bez podania przyczyny. Szczegóły w regulaminie." },
      { q: "Płatności", a: "Szybkie płatności kartą i BLIK przez Stripe. Dane szyfrowane." },
    ],
    testimonials: [
      { name: "Marta", text: "Realny efekt po pierwszym użyciu. Jakość premium." },
      { name: "Piotr", text: "Proste, działa i wygląda świetnie. Warto." },
      { name: "Aga", text: "Obsługa klienta 10/10, szybka dostawa." },
    ],
  };

  // === PIXELE (opcjonalnie) ===
  // W wersji produkcyjnej wklej do <head> w ramach projektu (np. Next.js). Tu emitujemy minimalny skrypt.
  if (typeof window !== "undefined") {
    if (FB_PIXEL_ID && !(window as any)._fbqInjected) {
      (window as any)._fbqInjected = true;
      !(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = 'https://connect.facebook.net/en_US/fbevents.js'; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      })(window, document, 'script');
      (window as any).fbq('init', FB_PIXEL_ID);
      (window as any).fbq('track', 'PageView');
    }
    if (TIKTOK_PIXEL_ID && !(window as any)._ttqInjected) {
      (window as any)._ttqInjected = true;
      !(function (w: any, d: any, t: any) {
        w[t] = w[t] || [];
        const ttq = w[t]; ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'setUserProperties', 'setVisitorProperties', 'reset']; ttq.setAndDefer = function (t: any, e: any) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (let e = 0; e < ttq.methods.length; e++) ttq.setAndDefer(ttq, ttq.methods[e]); ttq.instance = function (t: any) { const e: any = ttq._i[t] || []; for (let n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]); return e }; ttq.load = function (e: any, n: any) { const i = 'ttq'; ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = 'https://analytics.tiktok.com/i18n/pixel/events.js'; ttq._i[e].instance = function () { return ttq.instance(e) }; const a = d.createElement('script'); a.type = 'text/javascript'; a.async = !0; a.src = ttq._i[e]._u; const s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(a, s) };
        ttq.load(TIKTOK_PIXEL_ID);
        ttq.page();
      })(window, document, 'ttq');
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Pasek info */}
      <div className="w-full bg-neutral-900 text-white text-center text-sm py-2">Wysyłka 24 h z Polski • 14 dni na zwrot</div>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> {product.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{product.name}</h1>
          <p className="mt-3 text-lg text-neutral-600">{product.subtitle}</p>
          <ul className="mt-6 space-y-2">
            {product.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-neutral-900" />{b}</li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a href={STRIPE_PAYMENT_LINK} className="px-6 py-3 rounded-xl bg-neutral-900 text-white text-base font-semibold hover:opacity-90">Kup teraz — {product.price}</a>
            <a href="#sekcja-opinie" className="text-neutral-700 underline">Opinie klientów</a>
          </div>
          <p className="mt-2 text-xs text-neutral-500">Płatność obsługuje Stripe. Dane szyfrowane. Faktura automatycznie na e‑mail.</p>
        </div>
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full rounded-3xl shadow-xl" />
        </div>
      </header>

      {/* Cechy */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        {product.features.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-neutral-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Social proof */}
      <section id="sekcja-opinie" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">Opinie</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {product.testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-neutral-800">“{t.text}”</p>
              <p className="mt-3 text-sm text-neutral-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-6 space-y-4">
          {product.faqs.map((f, i) => (
            <details key={i} className="bg-white rounded-2xl p-5 shadow-sm">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA dolne */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Zamów dziś. Dostawa 1–3 dni.</h3>
            <p className="text-neutral-300 mt-1">14 dni na zwrot. Obsługa PL.</p>
          </div>
          <a href={STRIPE_PAYMENT_LINK} className="px-6 py-3 rounded-xl bg-white text-neutral-900 font-semibold hover:opacity-90">Kup teraz — {product.price}</a>
        </div>
      </section>

      {/* Footer z dokumentami */}
      <footer className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-sm text-neutral-500 flex flex-wrap gap-4">
          <a href="#polityka-prywatnosci" className="underline">Polityka prywatności</a>
          <a href="#regulamin" className="underline">Regulamin</a>
          <a href="#zwroty" className="underline">Zwroty i reklamacje</a>
          <span>© {new Date().getFullYear()} TwojaFirma Sp. z o.o.</span>
        </div>
      </footer>

      {/* MODALE DOKUMENTÓW — wersja skrócona. Podmień danymi firmy. */}
      <section id="polityka-prywatnosci" className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-xl font-bold">Polityka prywatności</h3>
        <p className="mt-2 text-sm text-neutral-700">Administrator: TwojaFirma Sp. z o.o., ul. Przykładowa 1, 00-000 Miasto, NIP 0000000000. Dane przetwarzane w celu realizacji zamówienia, obsługi klienta i marketingu. Podstawy: art. 6 ust. 1 lit. b i f RODO. Odbiorcy: operator płatności (Stripe), firmy kurierskie, systemy księgowe. Okres: do upływu terminów rękojmi i rozliczeń. Prawa: dostęp, sprostowanie, usunięcie, ograniczenie, sprzeciw, skarga do PUODO.</p>
      </section>
      <section id="regulamin" className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-xl font-bold">Regulamin sklepu</h3>
        <ol className="mt-2 list-decimal pl-5 text-sm text-neutral-700 space-y-1">
          <li>Sprzedawca: TwojaFirma Sp. z o.o. Kontakt: support@twojafirma.pl</li>
          <li>Składanie zamówień przez stronę, płatność online Stripe.</li>
          <li>Dostawa: 1–3 dni robocze. Koszt wg koszyka. Faktura elektroniczna.</li>
          <li>Odstąpienie: 14 dni dla konsumenta. Formularz zwrotu e‑mail.</li>
          <li>Reklamacje: 14 dni na odpowiedź. Rękojmia zgodnie z KC.</li>
          <li>Postanowienia końcowe: właściwe prawo polskie.</li>
        </ol>
      </section>
      <section id="zwroty" className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-xl font-bold">Zwroty i reklamacje</h3>
        <p className="mt-2 text-sm text-neutral-700">Aby zwrócić produkt w ciągu 14 dni, wyślij e‑mail na: zwroty@twojafirma.pl z numerem zamówienia i danymi. Zwrot środków do 14 dni od otrzymania przesyłki. Reklamacje prosimy zgłaszać na: reklamacje@twojafirma.pl z opisem wady i zdjęciami.</p>
      </section>

      {/* Pasek cookies */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-xl w-[95%] bg-white border rounded-2xl shadow p-4 flex items-start gap-3">
        <div className="grow text-sm text-neutral-700">Używamy plików cookies do analityki i marketingu. Kontynuując, akceptujesz naszą politykę prywatności.</div>
        <button className="px-3 py-2 bg-neutral-900 text-white rounded-xl text-sm">Akceptuję</button>
      </div>
    </div>
  );
}
