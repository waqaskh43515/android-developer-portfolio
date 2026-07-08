import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  ArrowUpRight,
  Smartphone,
  Layers,
  Database,
  MapPinned,
  Sparkles,
  Award,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    name: "Serena — Rider, Driver & User",
    category: "Ride-hailing",
    description:
      "End-to-end ride-hailing suite with live location tracking, driver dispatch, in-app messaging, and Google Maps navigation.",
    stack: ["Kotlin", "Google Maps", "Firebase", "MVVM"],
  },
  {
    name: "Spark",
    category: "Social / Dating",
    description:
      "Modern social discovery app with real-time chat, push notifications, and Firestore-backed profile matching.",
    stack: ["Kotlin", "Jetpack Compose", "Firestore", "FCM"],
  },
  {
    name: "Short Video Streaming App",
    category: "Media",
    description:
      "TikTok-style short-video streaming feed with smooth vertical paging, background prefetch and analytics.",
    stack: ["Kotlin", "ExoPlayer", "MVVM", "Analytics"],
  },
  {
    name: "XDriven",
    category: "Driver Ops",
    description:
      "Driver-side companion app using OpenStreetMap routing for coverage in regions without Google Maps SLA.",
    stack: ["Kotlin", "OSM", "Firebase", "GPS"],
  },
  {
    name: "Powerlifting & Athletes Edge",
    category: "Fitness",
    description:
      "Training log apps for powerlifters and athletes — set/rep tracking, PR history, and cloud-synced progress.",
    stack: ["Kotlin", "Compose", "Room", "Firebase"],
  },
  {
    name: "Smart Tools",
    category: "Utility",
    description:
      "All-in-one utility toolkit bundling compass, level, flashlight, ruler and unit converters into one app.",
    stack: ["Java", "Sensors", "XML"],
  },
  {
    name: "Qibla Direction",
    category: "Utility",
    description:
      "Location and sensor-based prayer direction app using device compass, GPS, and geodesic bearing calculation.",
    stack: ["Java", "Sensors", "GPS"],
  },
  {
    name: "Document Reader",
    category: "Productivity",
    description:
      "Scan, view and manage documents on Android with ML Kit-powered text detection and PDF handling.",
    stack: ["Java", "ML Kit", "PDF"],
  },
];

const SKILLS: { title: string; icon: React.ComponentType<{ className?: string }>; items: string[] }[] = [
  {
    title: "Languages",
    icon: Layers,
    items: ["Kotlin", "Java"],
  },
  {
    title: "Android",
    icon: Smartphone,
    items: ["Jetpack Compose", "XML UI", "MVVM", "ML Kit", "ARCore", "Play Store Deployment"],
  },
  {
    title: "Firebase",
    icon: Database,
    items: ["Authentication", "Firestore", "Cloud Messaging", "Crashlytics", "Analytics"],
  },
  {
    title: "Maps & Location",
    icon: MapPinned,
    items: ["Google Maps SDK", "OpenStreetMap", "GPS", "Geocoding"],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-sm font-semibold tracking-tight text-foreground"
        >
          Waqas Ahmed
          <span className="ml-2 text-muted-foreground font-normal">/ Android Dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for Android roles &amp; contracts
        </div>

        <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance">
          Building native Android apps
          <span className="block text-white/60">
            people actually keep using.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          I'm Waqas — an Android developer with 2+ years shipping 15+ apps
          across ride-hailing, social, fitness and utility. I write Kotlin,
          live in Jetpack Compose, and lean on Firebase to move fast without
          breaking production.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            View selected work
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:waqaskh43515@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            waqaskh43515@gmail.com
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-white">
          <Stat value="15+" label="Apps shipped" />
          <Stat value="2+ yrs" label="Native Android" />
          <Stat value="4+" label="Product domains" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
        {value}
      </dt>
      <dd className="mt-1 text-xs uppercase tracking-widest text-white/60">
        {label}
      </dd>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-navy-mid">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20 md:py-24">
      <SectionHeader
        eyebrow="About"
        title="A pragmatic Android engineer who ships."
      />
      <div className="space-y-5 text-base leading-relaxed text-foreground/80">
        <p>
          I've spent the last two years building production Android apps across
          ride-hailing, social, dating, fitness and utility. My work has taken
          me from Compose-first UI systems to sensor-heavy utilities and
          map-based driver tooling — usually all in the same month.
        </p>
        <p>
          I default to <strong className="text-foreground">Kotlin + MVVM</strong>,
          reach for <strong className="text-foreground">Jetpack Compose</strong>{" "}
          for anything new, and lean on the Firebase stack — Auth, Firestore,
          FCM, Crashlytics — to keep teams small and iteration fast.
        </p>
        <p>
          Based in Islamabad, working with product teams globally. Currently
          open to remote Android roles and contract work.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <SectionHeader eyebrow="Experience" title="Where I've built things." />

        <ol className="relative space-y-10 border-l border-border pl-6">
          <TimelineItem
            role="Android Developer"
            company="Buzzware Tech"
            period="Dec 2024 — Present"
            bullets={[
              "Built and maintained 15+ native Android apps across ride-hailing, social, dating, fitness and utility — including Spark, Serena (Driver/Rider/User), Sleeper, Kaataru, a TikTok-style short-video app, Powerlifting, Unbolt, XDriven, Salama, and Athletes Edge.",
              "Integrated the full Firebase stack — Auth, Firestore, FCM, Crashlytics, Analytics — for real-time sync, push, crash monitoring and product analytics.",
              "Shipped location-based features on Google Maps and OpenStreetMap for driver and rider apps (Serena, XDriven).",
              "Delivered Compose and XML UI layers on an MVVM backbone with maintainable, testable code.",
              "Partnered with cross-functional teams from concept through Play Store release.",
            ]}
          />
          <TimelineItem
            role="Android Developer"
            company="Spunks Studios"
            period="Apr 2023 — Feb 2024"
            bullets={[
              "Shipped Smart Tools — a utility app bundling multiple device tools into a single Play Store product.",
              "Built Qibla Direction using device compass and GPS for accurate prayer direction.",
              "Developed Document Reader for scanning, viewing and managing documents on Android.",
              "Owned the full app lifecycle: development, testing, debugging and Play Store deployment.",
            ]}
          />
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <li className="relative">
      <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-navy-mid">
        <span className="h-1.5 w-1.5 rounded-full bg-navy-mid" />
      </span>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {role}{" "}
          <span className="font-normal text-muted-foreground">· {company}</span>
        </h3>
        <span className="text-xs font-medium uppercase tracking-widest text-navy-mid">
          {period}
        </span>
      </div>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-mid" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-20 md:py-24">
      <SectionHeader
        eyebrow="Selected work"
        title="Apps I've shipped."
        subtitle="A snapshot of the 15+ Android apps I've built and launched to the Play Store. Live links available on request."
      />

      <div className="space-y-4">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-navy-mid hover:shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-mid">
            {project.category}
          </p>
          <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-mid" />
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <SectionHeader eyebrow="Skills" title="The stack I work in daily." />
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-deep text-primary-foreground">
                  <s.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {s.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
      <SectionHeader eyebrow="Highlights" title="Wins worth mentioning." />
      <ul className="grid gap-4 sm:grid-cols-2">
        <li className="flex gap-4 rounded-xl border border-border bg-card p-5">
          <Award className="h-5 w-5 shrink-0 text-navy-mid" />
          <p className="text-sm leading-relaxed text-foreground/80">
            Launched multiple apps to the Google Play Store with strong user
            ratings and positive user feedback.
          </p>
        </li>
        <li className="flex gap-4 rounded-xl border border-border bg-card p-5">
          <Sparkles className="h-5 w-5 shrink-0 text-navy-mid" />
          <p className="text-sm leading-relaxed text-foreground/80">
            Reduced crash rates across shipped apps by using Firebase
            Crashlytics to triage and resolve production issues quickly.
          </p>
        </li>
        <li className="flex gap-4 rounded-xl border border-border bg-card p-5 sm:col-span-2">
          <GraduationCap className="h-5 w-5 shrink-0 text-navy-mid" />
          <div className="text-sm leading-relaxed text-foreground/80">
            <p className="font-semibold text-foreground">
              BS in Computer Science
            </p>
            <p className="text-muted-foreground">
              Federal Urdu University · CGPA 3.2 · 2023
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="hero-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
          Contact
        </p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight text-white text-balance">
          Have an Android idea worth building?
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
          Whether it's a new product from zero, a rewrite in Compose, or a
          Firebase-backed feature you're stuck on — I'd love to hear about it.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <ContactLink
            icon={Mail}
            label="Email"
            value="waqaskh43515@gmail.com"
            href="mailto:waqaskh43515@gmail.com"
          />
          <ContactLink
            icon={Phone}
            label="Phone"
            value="+92 311 5470398"
            href="tel:+923115470398"
          />
          <ContactLink
            icon={Linkedin}
            label="LinkedIn"
            value="in/waqas-ahmed-918375236"
            href="https://www.linkedin.com/in/waqas-ahmed-918375236"
          />
          <ContactLink
            icon={MapPin}
            label="Based in"
            value="Islamabad, Pakistan"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-white">
          {value}
        </p>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
      )}
    </>
  );

  const classes =
    "group flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={`${classes} hover:bg-white/10`}
      >
        {inner}
      </a>
    );
  }
  return <div className={classes}>{inner}</div>;
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Waqas Ahmed. All rights reserved.</p>
        <p>Built with Kotlin energy in Islamabad.</p>
      </div>
    </footer>
  );
}
