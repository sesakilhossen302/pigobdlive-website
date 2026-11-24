import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  Ban,
  Flag,
  Gavel,
  UserX,
  Eye,
  Users,
  Mail,
  ExternalLink,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const APP_NAME = "Pigo Live";
const DEVELOPER_NAME = "DevOnDuty";
const PACKAGE_NAME = "com.pigobdlive.app";
// Must be the same email as the Child Safety point of contact in Play Console
// (the developer account email), or Google rejects the declaration.
const SAFETY_EMAIL = "maxlivesoft@gmail.com";
const LAST_UPDATED = "November 24, 2026";

export const metadata: Metadata = {
  title: `Child Safety Standards (CSAE Policy) - ${APP_NAME} by ${DEVELOPER_NAME}`,
  description: `${APP_NAME} by ${DEVELOPER_NAME} strictly prohibits Child Sexual Abuse and Exploitation (CSAE) and Child Sexual Abuse Material (CSAM). Read our child safety standards, reporting process, and child safety contact.`,
  alternates: { canonical: "/child-safety-standards" },
  robots: { index: true, follow: true },
};

const toc = [
  { id: "prohibited", label: "What is prohibited" },
  { id: "age", label: "Age requirements" },
  { id: "prevention", label: "How we prevent abuse" },
  { id: "report", label: "How to report" },
  { id: "enforcement", label: "What we do with reports" },
  { id: "authorities", label: "Reporting to authorities" },
  { id: "contact", label: "Child safety contact" },
];

function SectionTitle({
  id,
  num,
  icon: Icon,
  children,
}: {
  id: string;
  num: number;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="scroll-mt-28 flex items-center gap-3 text-xl sm:text-2xl font-bold text-white">
      <span className="flex-none w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#D4AF37]" />
      </span>
      <span>
        <span className="text-[#D4AF37] mr-1.5">{num}.</span>
        {children}
      </span>
    </h2>
  );
}

export default function ChildSafetyStandardsPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* ---------- Header ---------- */}
      <header className="relative overflow-hidden rounded-3xl glass-panel-glow p-6 sm:p-12">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-500/20 blur-[100px] pointer-events-none" />
        <div className="relative space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            Child Safety Standards
          </span>

          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            <span className="text-gradient">Child Safety Standards</span>
            <br />
            <span className="text-white text-2xl sm:text-4xl">for {APP_NAME}</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            <strong className="text-white">{APP_NAME}</strong>, developed and published by{" "}
            <strong className="text-white">{DEVELOPER_NAME}</strong>, has{" "}
            <strong className="text-red-300">zero tolerance</strong> for Child Sexual Abuse and Exploitation (CSAE) and
            Child Sexual Abuse Material (CSAM). Any content or behavior that sexually exploits, abuses, or endangers
            children is strictly prohibited on our app.
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm">
            <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              <dt className="text-gray-400 text-xs uppercase tracking-wider">App</dt>
              <dd className="text-white font-semibold">{APP_NAME}</dd>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              <dt className="text-gray-400 text-xs uppercase tracking-wider">Developer</dt>
              <dd className="text-white font-semibold">{DEVELOPER_NAME}</dd>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              <dt className="text-gray-400 text-xs uppercase tracking-wider">Last updated</dt>
              <dd className="text-white font-semibold">{LAST_UPDATED}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ---------- Key points ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: Ban,
            title: "Zero tolerance",
            text: "CSAE and CSAM are banned. Violators are removed permanently.",
            color: "text-red-300",
          },
          {
            icon: Flag,
            title: "Report in the app",
            text: "Every profile, live room, and chat has a Report option.",
            color: "text-amber-300",
          },
          {
            icon: Gavel,
            title: "We report to authorities",
            text: "Confirmed CSAM is reported to NCMEC and law enforcement.",
            color: "text-emerald-300",
          },
        ].map(({ icon: Icon, title, text, color }) => (
          <div key={title} className="glass-panel rounded-2xl p-5 space-y-2">
            <Icon className={`w-6 h-6 ${color}`} />
            <h3 className="text-white font-bold">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
        {/* ---------- Table of contents ---------- */}
        <nav aria-label="On this page" className="hidden lg:block sticky top-28 glass-panel rounded-2xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">On this page</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t, i) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  {i + 1}. {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ---------- Body ---------- */}
        <article className="glass-panel rounded-3xl p-6 sm:p-10 space-y-10 text-gray-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-4">
            <SectionTitle id="prohibited" num={1} icon={Ban}>
              What is strictly prohibited
            </SectionTitle>
            <p>
              The following are prohibited everywhere on {APP_NAME}, including live streams, voice rooms, profiles,
              photos, status feeds, comments, and private messages:
            </p>
            <ul className="space-y-3">
              {[
                ["Child Sexual Abuse Material (CSAM)", "Creating, uploading, streaming, sharing, requesting, or linking to any sexual or nude image, video, audio, text, or AI-generated content involving a minor (anyone under 18)."],
                ["Grooming", "Building a relationship with a minor in order to sexually abuse or exploit them, online or offline."],
                ["Sexualization of minors", "Sexual comments, gifts, or requests directed at minors, or content that presents minors in a sexual way."],
                ["Sextortion", "Threatening or pressuring a minor to share sexual images, money, or anything else."],
                ["Trafficking", "Advertising, soliciting, or facilitating the sexual exploitation or trafficking of children."],
                ["Contacting minors for sexual purposes", "Attempting to meet a minor, or moving a conversation to another platform, for any sexual purpose."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 flex-none" />
                  <span>
                    <strong className="text-white">{title}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <SectionTitle id="age" num={2} icon={UserX}>
              Age requirements
            </SectionTitle>
            <ul className="list-disc pl-5 space-y-2">
              <li>Users must be at least <strong className="text-white">13 years old</strong> to create a {APP_NAME} account.</li>
              <li>Hosting live streams, sending or receiving paid gifts, and withdrawing earnings require users to be <strong className="text-white">18 or older</strong>.</li>
              <li>Accounts found to belong to a child under 13 are closed, and their personal data is deleted.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionTitle id="prevention" num={3} icon={Eye}>
              How we prevent abuse
            </SectionTitle>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our Community Guidelines and Terms of Service ban CSAE, and every user agrees to them when signing up.</li>
              <li>Our moderation team reviews reported content and accounts. Child safety reports have the highest priority.</li>
              <li>Moderators can end live streams, remove users from voice rooms, delete content, and ban accounts and devices.</li>
              <li>Users can block anyone, and blocked users cannot message them or join their rooms.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionTitle id="report" num={4} icon={Flag}>
              How to report a child safety concern
            </SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-2">
                <p className="text-white font-semibold">In the app</p>
                <p className="text-sm">
                  Tap <strong className="text-white">Report</strong> on the user&apos;s profile, the live room, or the chat message, then select{" "}
                  <strong className="text-[#D4AF37]">Child Safety</strong>.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-2">
                <p className="text-white font-semibold">By email</p>
                <p className="text-sm">
                  Email{" "}
                  <a href={`mailto:${SAFETY_EMAIL}?subject=Child%20Safety%20Report`} className="text-[#D4AF37] underline break-all">
                    {SAFETY_EMAIL}
                  </a>{" "}
                  with the subject <strong className="text-white">&quot;Child Safety Report&quot;</strong>. Include the user ID or room ID if you have it.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-red-500/10 border border-red-500/25 p-4 text-sm text-red-100">
              If a child is in immediate danger, contact your local police right away. In Bangladesh, call{" "}
              <strong className="text-white">999</strong>.
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle id="enforcement" num={5} icon={ShieldCheck}>
              What we do with reports
            </SectionTitle>
            <ol className="list-decimal pl-5 space-y-2">
              <li>We review every child safety report as quickly as possible.</li>
              <li>We immediately remove content that violates these standards.</li>
              <li>We permanently ban the accounts involved and block them from creating new accounts.</li>
              <li>We preserve the relevant evidence so it can be given to law enforcement.</li>
            </ol>
          </section>

          <section className="space-y-4">
            <SectionTitle id="authorities" num={6} icon={Gavel}>
              Reporting to authorities
            </SectionTitle>
            <p>
              {APP_NAME} complies with all applicable child safety laws. When we find or are told about CSAM, we report it to the{" "}
              <strong className="text-white">National Center for Missing &amp; Exploited Children (NCMEC)</strong> and to the
              relevant regional and national law enforcement authorities, including in Bangladesh. We cooperate fully with lawful requests from these authorities.
            </p>
            <p>You can also report CSAM directly to these organizations:</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-white text-sm transition-colors">
                NCMEC CyberTipline <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="https://report.iwf.org.uk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-white text-sm transition-colors">
                Internet Watch Foundation <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle id="contact" num={7} icon={Mail}>
              Child safety contact
            </SectionTitle>
            <p>
              Our designated child safety contact can answer questions about how {APP_NAME} prevents CSAM and follows these standards.
            </p>
            <div className="rounded-2xl glass-panel-glow p-5 sm:p-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">App name</p>
                <p className="text-white font-semibold">{APP_NAME}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Developer</p>
                <p className="text-white font-semibold">{DEVELOPER_NAME}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Package name</p>
                <p className="text-white font-mono">{PACKAGE_NAME}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Child safety email</p>
                <a href={`mailto:${SAFETY_EMAIL}`} className="text-[#D4AF37] font-semibold underline break-all">
                  {SAFETY_EMAIL}
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-8">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <RefreshCw className="w-4 h-4 text-[#D4AF37]" /> Updates to these standards
            </h2>
            <p className="text-sm">
              We review these standards regularly and update this page when anything changes. See also our{" "}
              <Link href="/community-guidelines" className="text-[#D4AF37] underline">Community Guidelines</Link>,{" "}
              <Link href="/terms-and-conditions" className="text-[#D4AF37] underline">Terms &amp; Conditions</Link>, and{" "}
              <Link href="/privacy-policy" className="text-[#D4AF37] underline">Privacy Policy</Link>.
            </p>
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <Users className="w-3.5 h-3.5" /> {APP_NAME} · {DEVELOPER_NAME} · {PACKAGE_NAME}
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
