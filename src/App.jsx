import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import photo from "./assets/bharath.jpg";
import {
  LINKS,
  TYPED_WORDS,
  STATS,
  PROJECTS,
  SKILLS_TOP,
  SKILLS_BOTTOM,
  TIMELINE,
  CERTS,
} from "./data";
import {
  EASE,
  Glass,
  Reveal,
  Magnetic,
  Typewriter,
  CountUp,
  Tilt,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconArrow,
  goTo,
} from "./components/ui";

/* ---------- Background + progress ---------- */

function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
      <div className="grid-overlay" />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  return <motion.div className="progress" style={{ scaleX }} />;
}

/* ---------- Nav ---------- */

const NAV = [
  ["about", "About"],
  ["work", "Work"],
  ["stack", "Stack"],
  ["contact", "Contact"],
];

function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "top" ? "" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...NAV.map(([id]) => id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="nav-wrap">
      <motion.nav
        className="nav"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
      >
        <div className="nav-links">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => goTo(e, id)} className={active === id ? "is-active" : ""}>
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}

/* ---------- Hero ---------- */

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
};

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <motion.div variants={container} initial="hidden" animate="show" className="hero-copy">
          <motion.span variants={item} className="status">
            <i /> Open to full-time roles · Chennai, India
          </motion.span>

          <motion.p variants={item} className="mono-label">
            &lt;hello world /&gt;
          </motion.p>

          <motion.h1 variants={item}>
            I build full-stack
            <br />
            products with
            <span className="h1-typed grad">
              <Typewriter words={TYPED_WORDS} />
            </span>
          </motion.h1>

          <motion.p variants={item} className="hero-sub">
            I'm <strong>Bharath Kumar K</strong> — an electrical engineering graduate turned full-stack
            developer. I ship real-time, deployed apps end to end, from the database to the interface.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <Magnetic>
              <a href="#work" className="btn btn-primary" onClick={(e) => goTo(e, "work")}>
                View projects
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-ghost" onClick={(e) => goTo(e, "contact")}>
                Contact me
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <b>
                  <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
        >
          <Tilt className="photo-tilt">
            <div className="photo-card">
              <img src={photo} alt="Bharath Kumar K" />
              <div className="photo-fade" />
            </div>
          </Tilt>

          <span className="float-chip chip-1">Django</span>
          <span className="float-chip chip-2">React</span>
          <span className="float-chip chip-3">WebSockets</span>
          <span className="float-chip chip-4">Python</span>
          <span className="float-chip chip-5">SQL</span>
          <span className="float-chip chip-6">REST APIs</span>
          <span className="float-chip chip-7">JavaScript</span>

          <div className="code-card" aria-hidden="true">
            <div className="code-dots">
              <i />
              <i />
              <i />
            </div>
            <pre>
              <span className="k">const</span>
              {" dev = {\n  name: "}
              <span className="s">"Bharath"</span>
              {",\n  stack: ["}
              <span className="s">"Django"</span>
              {", "}
              <span className="s">"React"</span>
              {"],\n  openToWork: "}
              <span className="b">true</span>
              {",\n};"}
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <span />
      </motion.div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal>
          <p className="mono-label">// about</p>
          <h2 className="h2">From circuits to code</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.05}>
            <Glass className="about-copy">
              <p>
                I graduated in <strong>2024 with a B.E. in Electrical and Electronics Engineering</strong>{" "}
                from Sethu Institute of Technology, Chennai, then taught myself full-stack development —
                Python, Django, React and the systems that connect them.
              </p>
              <p>
                Along the way I built and shipped real applications rather than tutorials: an exam
                platform with live grading, an AI chat app with streaming responses, and REST APIs and
                real-time tools that taught me auth, deployment and debugging the hard way.
              </p>
              <p>
                I'm looking for my <strong>first full-time role as a Python full-stack developer</strong>,
                bringing an engineer's habit of methodical debugging to every feature I build.
              </p>
            </Glass>
          </Reveal>

          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.title} delay={0.1 + i * 0.1}>
                <Glass className="tl-card">
                  <h4>{t.title}</h4>
                  <p className="meta">{t.meta}</p>
                  <p>{t.text}</p>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects: horizontal scroll gallery ---------- */

function ProjectCard({ p, i }) {
  return (
    <Glass className="pcard" style={{ "--pv-a": p.a, "--pv-b": p.b }}>
      <div className="pvisual">
        <div className="pchrome">
          <i />
          <i />
          <i />
          <span>~/projects/{p.slug}</span>
        </div>
        <span className="pindex">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <div className="pbody">
        {p.flag && <span className="flag">{p.flag}</span>}
        <h3>{p.name}</h3>
        <p className="pdesc">{p.desc}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        {(p.repo || p.live) && (
          <div className="plinks">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer">
                <IconGithub width="15" height="15" /> Code
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer">
                <IconArrow /> Live app
              </a>
            )}
          </div>
        )}
      </div>
    </Glass>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const dist = useMotionValue(0);
  const [height, setHeight] = useState(0);
  const [idx, setIdx] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform([scrollYProgress, dist], ([p, d]) => -p * d);
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const d = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      dist.set(d);
      setHeight(d + window.innerHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [dist]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIdx(Math.min(PROJECTS.length - 1, Math.max(0, Math.floor(v * PROJECTS.length))));
  });

  return (
    <section id="work" ref={sectionRef} className="hscroll" style={{ height: height || undefined }}>
      <div className="hsticky">
        <motion.div ref={trackRef} className="htrack" style={{ x }}>
          <div className="hintro">
            <p className="mono-label">// selected work</p>
            <h2 className="h2">Things I've built end to end</h2>
            <p className="hintro-sub">Each one deployed, debugged and running — not just committed.</p>
            <span className="scroll-hint">Keep scrolling →</span>
          </div>
          {PROJECTS.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.name} />
          ))}
        </motion.div>

        <div className="wrap hprogress">
          <span className="mono-label">
            {String(idx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </span>
          <div className="hbar">
            <motion.i style={{ scaleX: bar }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stack (marquee) ---------- */

function Marquee({ items, reverse }) {
  const group = (k) => (
    <div className="marquee-group" aria-hidden={k > 0} key={k}>
      {items.map((s) => (
        <span className="chip" key={s}>
          <i /> {s}
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${reverse ? "rev" : ""}`}>
      <div className="marquee-track">
        {group(0)}
        {group(1)}
      </div>
    </div>
  );
}

function Stack() {
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <Reveal>
          <p className="mono-label">// stack</p>
          <h2 className="h2">Tools I reach for</h2>
        </Reveal>
      </div>
      <Reveal delay={0.1} className="marquee-wrap">
        <Marquee items={SKILLS_TOP} />
        <Marquee items={SKILLS_BOTTOM} reverse />
      </Reveal>
    </section>
  );
}

/* ---------- Certifications ---------- */

function Certs() {
  return (
    <section className="section section-tight">
      <div className="wrap">
        <Reveal>
          <p className="mono-label">// certifications</p>
          <h2 className="h2">Formal training</h2>
        </Reveal>
        <div className="cert-row">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={0.08 * i}>
              <Glass className="cert-card">
                <h4>{c.title}</h4>
                <p>{c.meta}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal>
          <Glass className="contact-card">
            <p className="mono-label">// contact</p>
            <h2 className="contact-title">
              Let's build <span className="grad">something real</span> together.
            </h2>
            <p className="contact-sub">
              I'm actively looking for a full-time Python full-stack role. If you have an opening, or
              just want to talk about a project, my inbox is open.
            </p>
            <div className="contact-actions">
              <Magnetic>
                <a href={LINKS.email} className="btn btn-primary">
                  <IconMail /> Email me
                </a>
              </Magnetic>
              <Magnetic>
                <a href={LINKS.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">
                  <IconLinkedin /> LinkedIn
                </a>
              </Magnetic>
              <Magnetic>
                <a href={LINKS.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                  <IconGithub /> GitHub
                </a>
              </Magnetic>
            </div>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} Bharath Kumar K. Built with React.</p>
        <div className="footer-links">
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={LINKS.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */

export default function App() {
  // Buttery smooth scrolling (disabled for reduced-motion users)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Aurora />
      <ScrollProgress />
      <Nav />
      <main className="app">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
