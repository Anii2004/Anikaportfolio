import Image from "next/image";
import Link from "next/link";
import { profile, skills, toolbox, experience, education, certifications } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";
import { Circle, Arrow, Underline, Star, Squiggle } from "@/components/Doodles";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero wrap">
        <p className="note note-top">hi, I&apos;m</p>
        <h1 className="hero-name">
          <span className="name-wrap">
            {profile.name}
            <Circle className="doodle circle" />
          </span>
        </h1>
        <p className="hero-role">
          {profile.title} <span className="muted">{profile.background}</span>
        </p>
        <p className="hero-line">{profile.headline}</p>

        <div className="hero-notes" aria-hidden="true">
          <span className="note n1">{profile.pastCompanies}<Arrow className="doodle arrow-a" /></span>
          <span className="note n2">based in {profile.city}<Arrow className="doodle arrow-b" flip /></span>
          <span className="note n3"><Star className="doodle star" />{profile.status}</span>
        </div>

        <div className="hero-cta">
          <Link href="#work" className="btn">See my work</Link>
          <a href={profile.resume} className="btn ghost" target="_blank" rel="noopener">Download resume</a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section wrap">
        <div className="section-head">
          <h2>Selected work</h2>
          <Squiggle className="doodle squiggle" />
        </div>
        <div className="work-list">
          {caseStudies.map((c, i) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className={`work-card ${c.ready ? "" : "soon"}`}>
              <span className="work-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="work-body">
                <h3>{c.title}</h3>
                <p>{c.oneLiner}</p>
                <div className="tags">
                  {c.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <span className="work-meta">{c.ready ? c.year : "Coming soon"}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section wrap about">
        <div className="photo-wrap">
          <span className="tape" aria-hidden="true" />
          <Image src="/anika.jpg" alt={`Portrait of ${profile.name}`} width={420} height={420} className="photo" priority />
          <p className="note photo-note">that&apos;s me</p>
        </div>
        <div className="about-text">
          <h2>
            <span className="u-wrap">About me<Underline className="doodle underline" /></span>
          </h2>
          <p className="lead">{profile.intro}</p>
          {profile.story.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* TOOLKIT */}
      <section id="toolkit" className="section wrap">
        <div className="section-head">
          <h2>What I bring</h2>
          <p className="note">the PM toolkit</p>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.name} className="skill">
              <h3>{s.name}</h3>
              <p>{s.note}</p>
            </div>
          ))}
        </div>
        <p className="tools">
          <span className="muted">Tools I use:</span> {toolbox.join(", ")}
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section wrap">
        <div className="section-head"><h2>Experience</h2></div>
        <ol className="exp">
          {experience.map((e) => (
            <li key={e.role + e.company}>
              <div className="exp-top">
                <h3>{e.role}, {e.company}</h3>
                <span className="muted">{e.period}, {e.place}</span>
              </div>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </li>
          ))}
        </ol>
        <div className="edu">
          {education.map((ed) => (
            <p key={ed.school}><b>{ed.degree}</b>, {ed.school} <span className="muted">{ed.period}</span></p>
          ))}
          <p><b>Certified:</b> {certifications.join(", ")}</p>
        </div>
        <a href={profile.resume} className="link" target="_blank" rel="noopener">Full resume (PDF)</a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section wrap contact">
        <p className="note">got a messy problem?</p>
        <h2 className="contact-big">Let&apos;s talk.</h2>
        <div className="hero-cta">
          <a href={`mailto:${profile.email}`} className="btn">Email me</a>
          <a href={profile.linkedin} className="btn ghost" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
