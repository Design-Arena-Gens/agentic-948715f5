import Link from "next/link";

export default function Home() {
  const outputs = [
    {
      title: "Fiche produit irrésistible",
      description:
        "Structure optimisée SEO, storytelling clair et objections levées pour convaincre en quelques secondes.",
    },
    {
      title: "Campagnes Meta & hooks vidéos",
      description:
        "Annonces prêtes à diffuser avec titres, textes longs/courts et hooks TikTok/Reels pour capter l’attention immédiatement.",
    },
    {
      title: "Scripts UGC & emails de lancement",
      description:
        "Scripts détaillés pour créateurs + séquences email complètes pour activer, relancer et convertir.",
    },
    {
      title: "Posts réseaux sociaux",
      description:
        "Calendrier de publications multi-formats qui maintient la conversation et transforme les abonnés en clients.",
    },
    {
      title: "Exports PDF & Shopify",
      description:
        "Télécharge ton pack en PDF pro ou pousse la fiche directement dans Shopify sans copier-coller.",
    },
  ];

  const steps = [
    {
      title: "Importe ton produit",
      description:
        "Colle l’URL de ta fiche actuelle ou envoie un bref descriptif. PackGénie détecte automatiquement les infos clés.",
      number: "01",
    },
    {
      title: "L’IA assemble le pack",
      description:
        "En moins de 3 minutes, tu reçois chaque livrable calibré par canal avec variantes A/B et angles psychologiques.",
      number: "02",
    },
    {
      title: "Tu déploies en 1 clic",
      description:
        "Export PDF, duplication Shopify, ou partage du pack aux équipes média, créa et CRM pour lancement express.",
      number: "03",
    },
  ];

  const testimonials = [
    {
      quote:
        "Nos drops sont prêts en 48h au lieu de 2 semaines. Les scripts UGC convertissent dès la première diffusion.",
      name: "Julien, Fondateur @NovaDrop",
    },
    {
      quote:
        "La qualité rédactionnelle est bluffante. On garde le ton de la marque tout en gagnant du temps pour scaler.",
      name: "Sarah, CMO @Maison Alix",
    },
  ];

  const faqs = [
    {
      question: "Combien de temps pour recevoir un pack produit ?",
      answer:
        "PackGénie livre un pack complet en moins de 3 minutes après import du produit. Tu peux ensuite affiner et relancer autant de variantes que nécessaire.",
    },
    {
      question: "Puis-je personnaliser le ton de marque ?",
      answer:
        "Oui. Ajoute tes directives de ton, persona, objections récurrentes ou bénéfices clés. L’IA ajuste tous les livrables instantanément.",
    },
    {
      question: "Comment fonctionne l’export Shopify ?",
      answer:
        "Connecte ton store et PackGénie crée la fiche directement dans Shopify avec titres, descriptions, bénéfices et FAQ intégrée.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.35),_transparent_50%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900/60 to-slate-950" />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:flex lg:items-center lg:gap-16 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm font-medium text-white/80 backdrop-blur">
              Gagne du temps • Scale tes lancements
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transforme n’importe quel produit en système de vente complet.
            </h1>
            <p className="mt-6 text-lg leading-7 text-slate-200">
              PackGénie génère pour toi la fiche produit, les pubs, les scripts
              UGC, les posts et les emails. Lancement express, angles puissants,
              cohérence totale entre acquisition et conversion.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#commander"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
              >
                Commander un Pack Produit
              </Link>
              <Link
                href="#exemple"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                Voir un exemple
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-200/80">
              <div>
                <p className="text-3xl font-semibold text-white">+42%</p>
                <p>Taux de conversion moyen sur les fiches réécrites</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">3 min</p>
                <p>Pour obtenir un pack marketing complet exploitable</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">95%</p>
                <p>Des utilisateurs déploient en moins de 24 heures</p>
              </div>
            </div>
          </div>

          <div className="mt-16 w-full lg:mt-0">
            <div className="relative mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-indigo-500/30 backdrop-blur">
              <div className="absolute -top-6 left-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
                PackGénie Dashboard
              </div>
              <div className="space-y-4 rounded-2xl bg-slate-900/70 p-6">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Produit importé</span>
                  <span>Statut : Prêt</span>
                </div>
                <div className="grid gap-4 rounded-xl border border-white/10 bg-slate-950/60 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-white/70">Fiche produit</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Optimisée pour Shopify
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Exporté
                    </span>
                  </div>
                  <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-wide text-white/50">
                        Meta Ads
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        4 variantes prêtes à diffuser
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-wide text-white/50">
                        UGC
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        Scripts 45s & 15s + angles Hooks
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-wide text-white/50">
                        Emails
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        Séquence lancement J-7 → J+7
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-wide text-white/50">
                        Réseaux sociaux
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        14 posts multiformats planifiés
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-indigo-500/40 bg-indigo-500/10 p-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Export PDF & Shopify
                      </p>
                      <p className="text-xs text-white/70">
                        Partage instantané aux équipes ventes & créa.
                      </p>
                    </div>
                    <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-md shadow-indigo-500/20 transition hover:bg-slate-100">
                      Exporter
                    </button>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
                  <p className="font-semibold text-white">Recommandation IA</p>
                  <p className="mt-2">
                    Ajoute un bundle limité avec un bonus pour renforcer
                    l’urgence sur la campagne Meta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10" id="probleme">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">
                Le problème
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
                Le problème, ce n’est pas le produit.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-7 text-slate-200/90">
              <p>
                Même les meilleurs produits échouent quand la page, les pubs et
                les créateurs ne racontent pas la même histoire. Les équipes
                marketing perdent des heures à tout réécrire lancement après
                lancement.
              </p>
              <ul className="grid gap-3 text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                  Manque de temps pour produire des fiches produits qui
                  convertissent vraiment.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                  Difficile d’aligner pubs Meta, scripts UGC et emails autour
                  des mêmes bénéfices.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                  Campagnes qui stagnent faute de nouvelles idées ou d’angles à
                  tester rapidement.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="border-y border-white/10 bg-slate-900/60 px-6 py-20 backdrop-blur lg:px-10"
          id="solution"
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">
              Solution
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
              Du produit brut au pack marketing complet.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-950/30"
                >
                  <span className="absolute -top-5 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/80 text-base font-semibold text-white shadow-lg shadow-indigo-500/40">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-200">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-6 py-20 lg:px-10"
          id="exemple"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">
              Résultat
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
              Ce que tu obtiens dans chaque pack.
            </h2>
            <p className="mt-6 text-lg text-slate-200/90">
              Chaque livrable est prêt à l’emploi, testé sur des centaines de
              lancements et optimisé pour générer du revenu immédiatement.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outputs.map((output) => (
              <div
                key={output.title}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/10 transition hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-indigo-500/30"
              >
                <h3 className="text-xl font-semibold text-white">
                  {output.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-200">
                  {output.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/50 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">
              Impact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
              Performances mesurables, sans recruter d’équipe.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <p className="text-sm uppercase tracking-wide text-indigo-200">
                  CAC
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">-28%</p>
                <p className="mt-3 text-sm leading-6">
                  Réduction moyenne du coût d’acquisition grâce aux nouvelles
                  variantes créatives.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <p className="text-sm uppercase tracking-wide text-indigo-200">
                  Panier moyen
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">+31%</p>
                <p className="mt-3 text-sm leading-6">
                  Storytelling orienté bénéfices qui augmente les bundles et
                  upsells.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <p className="text-sm uppercase tracking-wide text-indigo-200">
                  Temps gagné
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  12h / pack
                </p>
                <p className="mt-3 text-sm leading-6">
                  Délègue la rédaction complète et concentre-toi sur la
                  diffusion et le scaling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">
              Témoignages
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
              Les équipes e-commerce qui scalent déjà avec PackGénie.
            </h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-lg shadow-indigo-500/10"
              >
                <blockquote className="text-lg leading-7 text-white/90">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-indigo-200">
                  {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          className="border-y border-white/10 bg-slate-900/60 px-6 py-20 lg:px-10"
          id="commander"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">
              Offre
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
              Choisis le pack qui correspond à ton objectif.
            </h2>
            <p className="mt-6 text-lg text-slate-200/90">
              Laisse PackGénie créer ton arsenal complet pendant que tu prépares
              le lancement. Chaque plan inclut exports illimités et mise à jour
              continue des modèles.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-xl shadow-indigo-500/20">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
                Solo Launch
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">249€</p>
              <p className="mt-3 text-sm text-slate-200/90">
                Un pack produit complet, révisions illimitées pendant 14 jours.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-100">
                <li>• Tous les livrables organiques + paid</li>
                <li>• Export PDF premium</li>
                <li>• Modèles UGC & briefs créateurs</li>
              </ul>
              <Link
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-100"
              >
                Commander maintenant
              </Link>
            </div>
            <div className="flex flex-col rounded-3xl border border-indigo-400/70 bg-indigo-500/20 p-8 text-left shadow-2xl shadow-indigo-500/40">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Recommandé
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-indigo-100">
                Scale Team
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">690€</p>
              <p className="mt-3 text-sm text-indigo-100/90">
                4 packs produits / mois, workspace collaboratif, connecteur
                Shopify inclus.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-indigo-50">
                <li>• Variantes multi-persona illimitées</li>
                <li>• Export direct Shopify & Klaviyo</li>
                <li>• Accès invité pour agences & créateurs</li>
                <li>• Support prioritaire + audit trimestriel</li>
              </ul>
              <Link
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-100"
              >
                Réserver un créneau
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
              Questions fréquentes.
            </h2>
          </div>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 text-center text-sm text-slate-400 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="text-base font-semibold text-white">PackGénie</p>
            <p className="mt-2 text-sm text-slate-400">
              Automatise tes packs marketing produits pour lancer plus vite,
              plus fort.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <Link href="#solution" className="hover:text-white">
              Produit
            </Link>
            <Link href="#exemple" className="hover:text-white">
              Livrables
            </Link>
            <Link href="#commander" className="hover:text-white">
              Tarifs
            </Link>
            <Link href="#commander" className="hover:text-white">
              Commander
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} PackGénie. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
