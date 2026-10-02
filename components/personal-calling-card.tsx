import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Clapperboard, HeartHandshake, House, MoveUpRight } from 'lucide-react'

const disciplines = [
  {
    number: '01',
    icon: House,
    title: 'Real estate',
    description: 'Thoughtful guidance, meaningful relationships, and a people-first approach to real estate sales.',
    tag: 'PEOPLE · PLACES · POSSIBILITY',
  },
  {
    number: '02',
    icon: HeartHandshake,
    title: 'Nonprofit storytelling',
    description: 'Communications and social media that bring missions closer to the people who care.',
    tag: 'PURPOSE · COMMUNITY · IMPACT',
  },
  {
    number: '03',
    icon: Clapperboard,
    title: 'Film production',
    description: 'A production-minded eye for the details that make a story feel unforgettable.',
    tag: 'VISION · CRAFT · STORY',
  },
]

export function PersonalCallingCard() {
  return (
    <main className="calling-card" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jerry, home">
          <span className="wordmark-mark">JH</span>
          <span className="wordmark-name">JERRY<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a className="nav-contact" href="#contact">Let&apos;s connect <ArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>

      <section className="hero" id="about" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A CREATIVE, PEOPLE-FIRST PERSPECTIVE</div>
          <h1 id="hero-title">Hello, I&apos;m<br /><span>Jerry!</span></h1>
          <p className="hero-description">I have experience in real estate sales, non - profit fundraising, and film production!</p>
          <div className="hero-actions">
            <a className="primary-link" href="#experience">A little about me <ArrowRight aria-hidden="true" /></a>
            <a className="text-link" href="#contact">Get in touch <MoveUpRight aria-hidden="true" /></a>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            className="hero-image"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JH%20business%20professional%20HS-GDSP1rPIOE8BMJYZsyMcZZUYgjPSbF.jpg"
            alt="Jerry smiling in a light gray suit and black tie"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <div className="image-shade" />
          <div className="image-topline"><span>01 / 03</span><span>BUILT AROUND PEOPLE</span></div>
          <div className="image-caption">
            <span className="caption-kicker">THE THROUGH LINE</span>
            <p>Make every<br />connection <em>count.</em></p>
          </div>
          <span className="image-coordinate">A GOOD PLACE TO BEGIN&nbsp; · &nbsp;ANYWHERE</span>
          <a className="image-scroll" href="#experience" aria-label="Scroll to experience"><ArrowDown aria-hidden="true" /></a>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">THREE WORLDS, ONE APPROACH</span>
            <h2 id="experience-title">Different mediums.<br /><span>Same human instinct.</span></h2>
          </div>
          <p>Curiosity, care, and a belief that the best outcomes begin by listening.</p>
        </div>
        <div className="discipline-grid">
          {disciplines.map(({ number, icon: Icon, title, description, tag }) => (
            <article className="discipline-card" key={title}>
              <div className="discipline-top"><span>{number} / 03</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="discipline-tag">{tag}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section" id="education" aria-labelledby="education-title">
        <div className="education-heading">
          <div>
            <span className="section-kicker">A FOUNDATION FOR THE WORK</span>
            <h2 id="education-title">Education<span>.</span></h2>
          </div>
          <p>Marketing, storytelling, and production — a mix that shapes how I connect people and ideas.</p>
        </div>
        <div className="education-grid">
          <article className="education-card">
            <span className="education-number">01 / 02</span>
            <div>
              <h3>Bachelor of Business Administration</h3>
              <p>Marketing</p>
            </div>
            <span className="education-school">UNIVERSITY OF OKLAHOMA</span>
          </article>
          <article className="education-card">
            <span className="education-number">02 / 02</span>
            <div>
              <h3>Associate of Arts</h3>
              <p>Digital Cinema Production</p>
            </div>
            <span className="education-school">OKLAHOMA CITY COMMUNITY COLLEGE</span>
          </article>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <span className="section-kicker">THE NEXT CHAPTER STARTS HERE</span>
          <h2>Have something<br /><span>good in mind?</span></h2>
        </div>
        <div className="contact-details">
          <a className="contact-link" href="mailto:richardsbob92@gmail.com">richardsbob92@gmail.com <MoveUpRight aria-hidden="true" /></a>
          <a className="contact-link" href="tel:+14059790182">405 979 0182 <MoveUpRight aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">          <span>JERRY<span className="wordmark-dot">.</span> &nbsp;© {new Date().getFullYear()}</span>
<a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  )
}

export default PersonalCallingCard
