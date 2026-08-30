import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Hammer,
  Layers,
  Mail,
  MapPin,
  Phone,
  Shield,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { VideoSlot } from "@/components/VideoSlot";
import heroRoof from "@/assets/hero-roof.jpg";
import craftSlate from "@/assets/craft-slate.jpg";
import projectFlat from "@/assets/project-flat.jpg";
import projectLead from "@/assets/project-lead.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Roof UK | London Roofing Specialists" },
      {
        name: "description",
        content:
          "Premium London roofing: slate roofing, flat roofs, repairs, guttering and lead work. 20+ years of craftsmanship. Free quotes on 07876 495043.",
      },
      { property: "og:title", content: "Dream Roof UK | London Roofing Specialists" },
      {
        property: "og:description",
        content:
          "Premium London roofing: slate roofing, flat roofs, repairs, guttering and lead work. 20+ years of craftsmanship.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "+44 7876 495043";
const PHONE_HREF = "tel:+447876495043";
const EMAIL = "info@dream-roof.co.uk";

const services = [
  {
    icon: Layers,
    name: "Slate Roofing",
    copy: "Hand-graded Welsh and Spanish slate, laid to last a century. Full re-roofs, listed properties and period restorations.",
  },
  {
    icon: Shield,
    name: "Flat Roofs",
    copy: "Single-ply, GRP and high-performance felt systems with seamless detailing and long-form guarantees.",
  },
  {
    icon: Wrench,
    name: "Roof Repairs",
    copy: "Rapid diagnosis of leaks, slipped tiles and storm damage — repaired properly, not patched over.",
  },
  {
    icon: Droplets,
    name: "Guttering",
    copy: "Cast-iron, aluminium and uPVC rainwater systems, fully aligned, sealed and maintained.",
  },
  {
    icon: Hammer,
    name: "Lead Work",
    copy: "Traditional code-graded leadwork: valleys, flashings, bay tops and chimney weathering, formed on site.",
  },
];

const whyUs = [
  { title: "Directly employed craftsmen", copy: "No subcontracted labour. The team that quotes is the team on your roof." },
  { title: "Fully insured & accredited", copy: "£5m public liability, CHAS assessed and fully scaffold-compliant." },
  { title: "Written 20-year guarantees", copy: "Workmanship guarantees issued in writing on every full roof system." },
  { title: "Immaculate sites", copy: "Protected grounds, daily clearance and a spotless handover, every time." },
  { title: "Fixed, honest pricing", copy: "Itemised quotations. No variations without written agreement." },
  { title: "Heritage specialists", copy: "Conservation-area and listed-building work delivered to spec." },
];

const process = [
  { step: "01", title: "Survey", copy: "A senior roofer inspects the structure, drone-scans where needed and photographs every defect." },
  { step: "02", title: "Proposal", copy: "A fully itemised, fixed-price specification with materials, timescales and guarantees." },
  { step: "03", title: "Craft", copy: "Scaffold, strip, repair and lay — supervised daily by the project lead." },
  { step: "04", title: "Handover", copy: "Final inspection with you, full photographic record and your written guarantee." },
];

const projects = [
  { img: craftSlate, title: "Natural Slate Re-Roof", place: "Hampstead, NW3", tall: true },
  { img: projectFlat, title: "Warm Flat Roof System", place: "Shoreditch, E1", tall: false },
  { img: projectLead, title: "Chimney Leadwork", place: "Richmond, TW9", tall: false },
  { img: heroRoof, title: "Victorian Roof Restoration", place: "Kensington, W8", tall: false },
];

const areas = [
  "Kensington", "Chelsea", "Hampstead", "Islington", "Richmond", "Wimbledon",
  "Fulham", "Camden", "Greenwich", "Dulwich", "Ealing", "Barnes",
  "Notting Hill", "Clapham", "Highgate", "Shoreditch",
];

const reviews = [
  {
    quote:
      "They re-roofed our Victorian terrace in natural slate. The detailing around the chimneys is genuinely beautiful — and the site was left spotless every single evening.",
    name: "Eleanor W.",
    place: "Hampstead",
  },
  {
    quote:
      "Two other firms told us the flat roof needed replacing. Dream Roof found the actual fault, fixed it in a day and charged a fraction. Rare honesty.",
    name: "James R.",
    place: "Shoreditch",
  },
  {
    quote:
      "Faultless from survey to handover. Fixed price, no surprises, and the leadwork is the best I've seen on our street.",
    name: "Priya M.",
    place: "Richmond",
  },
];

const stats = [
  { value: "20+", label: "Years of roofing" },
  { value: "1,800+", label: "Roofs completed" },
  { value: "20 yr", label: "Workmanship guarantee" },
  { value: "4.9/5", label: "Client rating" },
];

const faqs = [
  {
    q: "How long does a full re-roof take?",
    a: "A typical London terrace takes 7–12 working days including scaffold, strip, repair and finish. We confirm exact dates in your written proposal.",
  },
  {
    q: "Do you provide free quotations?",
    a: "Yes. Every survey and itemised quotation is free and carries no obligation, anywhere inside the M25.",
  },
  {
    q: "Are you insured?",
    a: "We carry £5m public liability insurance and full employer's liability. Certificates are supplied with every quotation.",
  },
  {
    q: "Do you work on listed and conservation properties?",
    a: "Frequently. We work to conservation officer specifications using reclaimed and heritage-matched materials.",
  },
  {
    q: "What guarantee do you offer?",
    a: "Full roof systems carry a written 20-year workmanship guarantee, alongside manufacturer material warranties.",
  },
  {
    q: "Can you handle emergency leaks?",
    a: "Yes — we hold response slots daily and can usually make a property watertight within 24 hours.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <BackgroundVideoOne />
        <About />
        <Experience />
        <WhyUs />
        <Process />
        <FeatureVideo />
        <Gallery />
        <BackgroundVideoTwo />
        <Areas />
        <Reviews />
        <Stats />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- nav */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Services", "#services"],
    ["About", "#about"],
    ["Process", "#process"],
    ["Projects", "#projects"],
    ["Areas", "#areas"],
    ["FAQ", "#faq"],
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-cocoa-deep/92 py-4 backdrop-blur-xl" : "py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="font-display text-2xl tracking-tight text-cream">Dream Roof</span>
          <span className="eyebrow text-copper-soft">UK</span>
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.82rem] tracking-[0.14em] text-cream/70 uppercase transition-colors hover:text-copper-soft"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a
            href={PHONE_HREF}
            className="hidden text-sm tracking-wide text-cream/80 transition-colors hover:text-copper-soft md:block"
          >
            {PHONE}
          </a>
          <a
            href="#contact"
            className="border border-copper/70 bg-copper/10 px-6 py-3 text-[0.72rem] tracking-[0.24em] text-cream uppercase transition-all duration-500 hover:bg-copper hover:text-cocoa-deep"
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}

/* --------------------------------------------------------------- hero */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-cocoa-deep">
      <img
        src={heroRoof}
        alt="Restored slate roof of a London townhouse at golden hour"
        width={1920}
        height={1280}
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="veil absolute inset-0" />
      <div className="absolute inset-0 bg-cocoa-deep/35" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-end px-6 pt-40 pb-16 lg:px-12 lg:pb-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p
              className="eyebrow animate-drift-up text-copper-soft"
              style={{ animationDelay: "120ms" }}
            >
              London Roofing Specialists · Est. 2005
            </p>
            <h1
              className="animate-drift-up mt-8 text-[clamp(2.9rem,8vw,7.2rem)] leading-[0.94] text-cream"
              style={{ animationDelay: "260ms" }}
            >
              Professional Roofing,
              <br />
              <span className="italic text-copper-soft">Built to Last</span>
            </h1>
            <p
              className="animate-drift-up mt-9 max-w-xl text-lg leading-relaxed text-cream/85"
              style={{ animationDelay: "420ms" }}
            >
              Twenty years of slate, lead and flat-roof craftsmanship across every London
              borough — delivered by directly employed roofers, guaranteed in writing.
            </p>
            <div
              className="animate-drift-up mt-11 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "560ms" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-copper px-9 py-5 text-[0.75rem] tracking-[0.26em] text-cocoa-deep uppercase transition-all duration-500 hover:bg-copper-soft"
              >
                Get a Free Quote
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 border-b border-cream/30 pb-1 text-sm tracking-[0.12em] text-cream transition-colors hover:border-copper hover:text-copper-soft"
              >
                <Phone className="size-4" />
                {PHONE}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <dl className="grid grid-cols-3 gap-6 border-t border-cream/20 pt-8 lg:grid-cols-1 lg:gap-7">
              {[
                ["20+", "Years experience"],
                ["All", "London boroughs"],
                ["20 yr", "Guarantee"],
              ].map(([v, l], i) => (
                <div key={l} className="animate-drift-up" style={{ animationDelay: `${700 + i * 120}ms` }}>
                  <dt className="font-display text-4xl text-cream lg:text-5xl">{v}</dt>
                  <dd className="mt-1 text-[0.7rem] tracking-[0.2em] text-cream/60 uppercase">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-cream/45">
        <ChevronDown className="size-5 animate-bounce" strokeWidth={1.2} />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- trust bar */

function TrustBar() {
  const items = [
    "Fully Insured · £5m Liability",
    "CHAS Accredited",
    "20-Year Workmanship Guarantee",
    "Heritage & Listed Specialists",
    "Free No-Obligation Surveys",
    "Directly Employed Craftsmen",
  ];
  return (
    <div className="surface-cocoa overflow-hidden border-y border-cream/10 py-5">
      <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="eyebrow flex items-center gap-4 text-cream/65">
            <span className="size-1 rounded-full bg-copper" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ heading */

function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "text-copper-soft" : "text-copper"}`}>{eyebrow}</p>
      <h2
        className={`mt-6 text-[clamp(2.1rem,4.6vw,4rem)] leading-[1.04] ${
          light ? "text-cream" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-cream/75" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ----------------------------------------------------------- services */

function Services() {
  return (
    <section id="services" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHead
          eyebrow="What we do"
          title="Five disciplines, one standard"
          copy="Every roof we touch is treated as a permanent structure — specified properly, built by hand and finished to a standard you can see from the street."
        />

        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 90}
              className="group relative bg-card p-10 transition-colors duration-700 hover:bg-secondary lg:p-12"
            >
              <s.icon className="size-7 text-copper" strokeWidth={1.1} />
              <h3 className="mt-8 text-3xl text-foreground">{s.name}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.copy}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] text-copper uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Enquire <ArrowUpRight className="size-3.5" />
              </span>
            </Reveal>
          ))}
          <Reveal
            delay={450}
            className="surface-cocoa flex flex-col justify-between p-10 lg:p-12"
          >
            <p className="font-display text-3xl leading-snug text-cream">
              Not sure what your roof needs?
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 self-start border-b border-copper pb-1 text-[0.72rem] tracking-[0.24em] text-copper-soft uppercase"
            >
              Book a free survey <ArrowUpRight className="size-3.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------- background video one */

function BackgroundVideoOne() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* EMPTY background video slot #1 */}
      <VideoSlot label="Background Video 01" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-[88rem] items-center px-6 py-28 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-copper-soft">On the roof</p>
          <p className="mt-8 font-display text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.12] text-cream">
            “A roof is the only part of a house that works every single day of its life.
            We build accordingly.”
          </p>
          <p className="mt-8 text-sm tracking-[0.18em] text-cream/60 uppercase">
            Dream Roof UK — Founder
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- about */

function About() {
  return (
    <section id="about" className="bg-background py-28 lg:py-40">
      <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <img
              src={craftSlate}
              alt="Roofer hand-laying natural slate tiles"
              loading="lazy"
              width={1200}
              height={1504}
              className="w-full object-cover shadow-[var(--shadow-deep)]"
            />
            <div className="surface-cocoa absolute -right-4 -bottom-8 hidden px-9 py-7 sm:block lg:-right-10">
              <p className="font-display text-5xl text-cream">2005</p>
              <p className="mt-1 text-[0.68rem] tracking-[0.22em] text-cream/60 uppercase">
                Trading since
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-6">
          <SectionHead
            eyebrow="Who we are"
            title="A London roofing firm, run like a workshop"
            copy="Dream Roof UK began with one roofer, a van and a refusal to cut corners. Two decades later we run a small team of directly employed craftsmen working across the capital — from Georgian slate in Kensington to warm flat-roof systems in the East End."
          />
          <Reveal delay={120} className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              We keep the team deliberately small. It means the person who surveys your roof
              is on the scaffold when it's built, and answers the phone if you ever need us
              again.
            </p>
            <p>
              Materials are specified for the property, never for the invoice: code-graded
              lead, breathable membranes, stainless fixings and slate matched to the original
              pitch and course.
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              "Directly employed roofers",
              "Conservation-area experience",
              "Fixed itemised pricing",
              "Photographic handover record",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-copper" strokeWidth={1.4} />
                <span className="text-foreground">{point}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- experience */

function Experience() {
  return (
    <section className="surface-cocoa grain py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-copper-soft">Two decades</p>
            <p className="mt-8 font-display text-[clamp(5rem,14vw,11rem)] leading-[0.82] text-cream">
              20<span className="text-copper">+</span>
            </p>
            <p className="mt-6 text-xl text-cream/75">
              years of roofing across every London borough
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <div className="space-y-px bg-cream/10">
              {[
                ["2005", "Founded in South London as a two-man slate and leadwork team."],
                ["2011", "First full heritage restoration in a Kensington conservation area."],
                ["2016", "Flat-roof division launched — single-ply and GRP systems."],
                ["2021", "1,000th completed roof; 20-year written guarantee introduced."],
                ["2026", "A team of directly employed craftsmen covering all of Greater London."],
              ].map(([year, copy], i) => (
                <Reveal
                  key={year}
                  delay={i * 100}
                  className="flex flex-col gap-3 bg-transparent py-8 sm:flex-row sm:gap-12"
                >
                  <span className="font-display text-2xl text-copper-soft sm:w-28 sm:shrink-0">
                    {year}
                  </span>
                  <span className="text-lg leading-relaxed text-cream/80">{copy}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- why us */

function WhyUs() {
  return (
    <section className="bg-secondary py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHead
          eyebrow="Why choose us"
          title="The difference is in what you never have to chase"
          align="center"
        />
        <div className="mt-20 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80} className="rule-copper">
              <h3 className="text-2xl text-foreground">{w.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{w.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ process */

function Process() {
  return (
    <section id="process" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHead
          eyebrow="How we work"
          title="Four steps, no surprises"
          copy="A deliberately slow start and a fast, clean build. You always know what happens next."
        />
        <div className="mt-20 grid gap-px border border-border bg-border lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 110} className="bg-card p-10 lg:p-11">
              <span className="font-display text-6xl text-beige">{p.step}</span>
              <h3 className="mt-6 text-2xl text-foreground">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- large feature video */

function FeatureVideo() {
  return (
    <section className="bg-background pb-28 lg:pb-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-copper">Film</p>
          <h2 className="mt-6 text-[clamp(2.1rem,4.6vw,4rem)] leading-[1.04] text-foreground">
            Inside a Dream Roof build
          </h2>
        </Reveal>
      </div>
      <Reveal delay={120} className="mt-14">
        <div className="relative aspect-[21/9] w-full min-h-[320px] overflow-hidden">
          {/* EMPTY large full-width video slot */}
          <VideoSlot label="Feature Video — Full Width" overlay={false} />
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------ gallery */

function Gallery() {
  return (
    <section id="projects" className="bg-secondary py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHead
          eyebrow="Selected work"
          title="Recent London projects"
          copy="A small sample of roofs completed across the capital in the last eighteen months."
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className={`group relative overflow-hidden ${
                p.tall ? "lg:row-span-2" : ""
              }`}
            >
              <img
                src={p.img}
                alt={`${p.title} in ${p.place}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 ${
                  p.tall ? "h-[26rem] lg:h-[46rem]" : "h-[26rem]"
                }`}
              />
              <div className="veil absolute inset-0 opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="eyebrow text-copper-soft">{p.place}</p>
                <h3 className="mt-3 text-2xl text-cream">{p.title}</h3>
              </div>
            </Reveal>
          ))}
          <Reveal
            delay={400}
            className="surface-cocoa flex min-h-[26rem] flex-col justify-center p-10 lg:p-12"
          >
            <p className="font-display text-3xl leading-snug text-cream">
              See the full portfolio during your free survey.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 self-start border-b border-copper pb-1 text-[0.72rem] tracking-[0.24em] text-copper-soft uppercase"
            >
              Arrange a visit <ArrowUpRight className="size-3.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------- background video two */

function BackgroundVideoTwo() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* EMPTY background video slot #2 */}
      <VideoSlot label="Background Video 02" />
      <div className="relative mx-auto flex min-h-[60vh] max-w-[88rem] flex-col items-center justify-center px-6 py-24 text-center lg:px-12">
        <Reveal>
          <p className="eyebrow text-copper-soft">Craft in motion</p>
          <p className="mx-auto mt-8 max-w-3xl font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.14] text-cream">
            Scaffold up on Monday. Watertight, guaranteed and swept clean by Friday.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- areas */

function Areas() {
  return (
    <section id="areas" className="bg-background py-28 lg:py-40">
      <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Coverage"
            title="Working across Greater London"
            copy="Based in London, covering everything inside the M25 — with same-week surveys in most boroughs."
          />
          <Reveal delay={150} className="mt-10 flex items-center gap-3 text-copper">
            <MapPin className="size-5" strokeWidth={1.4} />
            <span className="text-foreground">All London boroughs · Inside the M25</span>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
            {areas.map((a, i) => (
              <Reveal
                key={a}
                delay={i * 35}
                className="bg-card px-5 py-7 text-center text-sm tracking-[0.1em] text-foreground uppercase transition-colors duration-500 hover:bg-secondary"
              >
                {a}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ reviews */

function Reviews() {
  return (
    <section className="surface-cocoa grain py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHead eyebrow="Client words" title="Reviewed by Londoners" light align="center" />
        <div className="mt-20 grid gap-px bg-cream/10 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 120} className="px-9 py-12 lg:px-11">
              <span className="font-display text-6xl leading-none text-copper">“</span>
              <p className="mt-6 text-lg leading-relaxed text-cream/85">{r.quote}</p>
              <p className="mt-8 text-sm tracking-[0.16em] text-copper-soft uppercase">
                {r.name} · {r.place}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- stats */

function Stats() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <p className="font-display text-[clamp(3rem,6vw,5rem)] leading-none text-foreground">
              {s.value}
            </p>
            <p className="mt-4 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- faq */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-28 lg:py-40">
      <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <div className="lg:col-span-4">
          <SectionHead eyebrow="Questions" title="Answered, plainly" />
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60} className="border-b border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-8 py-8 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-2xl text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`mt-1 size-5 shrink-0 text-copper transition-transform duration-500 ${
                      open === i ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.4}
                  />
                </button>
                <div
                  className="grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pr-12 pb-8 text-lg leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- contact */

function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cocoa-deep py-32 lg:py-44">
      <img
        src={heroRoof}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto max-w-[88rem] px-6 text-center lg:px-12">
        <Reveal>
          <p className="eyebrow text-copper-soft">Free, no obligation</p>
          <h2 className="mx-auto mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02] text-cream">
            Let's talk about your roof
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
            Send a photo or book a survey — you'll have a fixed, itemised quotation within
            48 hours.
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-14 flex flex-wrap items-center justify-center gap-5">
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center gap-3 bg-copper px-10 py-5 text-[0.75rem] tracking-[0.26em] text-cocoa-deep uppercase transition-colors duration-500 hover:bg-copper-soft"
          >
            <Phone className="size-4" />
            {PHONE}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 border border-cream/35 px-10 py-5 text-[0.75rem] tracking-[0.22em] text-cream uppercase transition-colors duration-500 hover:border-copper hover:text-copper-soft"
          >
            <Mail className="size-4" />
            {EMAIL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- footer */

function Footer() {
  return (
    <footer className="surface-cocoa border-t border-cream/10">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl text-cream">
            Dream Roof <span className="text-copper">UK</span>
          </p>
          <p className="mt-5 max-w-sm leading-relaxed text-cream/60">
            London roofing specialists in slate, flat roofs, repairs, guttering and lead work.
            Twenty years of craftsmanship, guaranteed in writing.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="eyebrow text-copper-soft">Services</p>
          <ul className="mt-6 space-y-3 text-cream/70">
            {services.map((s) => (
              <li key={s.name}>
                <a href="#services" className="transition-colors hover:text-copper-soft">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="eyebrow text-copper-soft">Contact</p>
          <ul className="mt-6 space-y-3 text-cream/70">
            <li>
              <a href={PHONE_HREF} className="transition-colors hover:text-copper-soft">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-copper-soft">
                {EMAIL}
              </a>
            </li>
            <li>London · All boroughs inside the M25</li>
            <li>Mon–Sat, 7am – 7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-6 py-7 text-xs tracking-[0.14em] text-cream/45 uppercase sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <span>© {new Date().getFullYear()} Dream Roof UK</span>
          <span>Fully insured · CHAS accredited</span>
        </div>
      </div>
    </footer>
  );
}
