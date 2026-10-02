import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Clapperboard, HeartHandshake, House, MoveUpRight } from 'lucide-react'

const disciplines = [
  {
    icon: House,
    title: 'Real estate',
    description: 'Thoughtful guidance, meaningful relationships, and a people-first approach to real estate sales.',
    tag: 'PEOPLE · PLACES · POSSIBILITY',
  },
  {
    icon: HeartHandshake,
    title: 'Nonprofit storytelling',
    description: 'Communications and social media that bring missions closer to the people who care.',
    tag: 'PURPOSE · COMMUNITY · IMPACT',
  },
  {
    icon: Clapperboard,
    title: 'Film production',
    description: 'A production-minded eye for the details that make a story feel unforgettable.',
    tag: 'VISION · CRAFT · STORY',
  },
]

const workExamples = [
  {
    category: 'MUSIC VIDEO · PRODUCTION + EDITING',
    title: 'Hopeless',
    description: 'Shot and edited a music video for a local artist on a Blackmagic URSA 4K.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/7afb56eba5e22a72ac90f923bd00567e.jpg',
    imageAlt: 'Still from the Hopeless music video',
  },
  {
    category: 'SHORT FILM · WRITING + DIRECTION',
    title: 'The Mailman',
    description: 'Wrote and directed an original short film, bringing the story from script to screen.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/6e1c1b60c1b58eeb43efe2351bf73ff3.jpg',
    imageAlt: 'Still from The Mailman short film',
  },
  {
    category: 'VIDEO · EDITING',
    title: 'Scone',
    description: 'Edited a short-form video in CapCut, shaping the footage into a finished story.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/9a309a0c0523cf80b9de67192aa9cf20.jpg',
    imageAlt: 'Still from the Scone video',
  },
  {
    category: 'NONPROFIT · CAMPAIGN STORYTELLING',
    title: 'Community in action',
    description: 'Created donor-focused campaign content celebrating more than $5,000 raised over a holiday weekend.',
    image: 'https://jhportfolio15.my.canva.site/_assets/media/9abb1ab061f8a866ebacec205523c34a.jpg',
    imageAlt: 'Preview of a community fundraising campaign',
  },
  {
    category: 'CONSUMER BRAND · CONTENT STRATEGY',
    title: 'Brio Bowls',
    description: 'Built a practical social content strategy to grow engagement, consistency, and community loyalty.',
    image: 'https://jhportfolio15.my.canva.site/_assets/media/cc8ddc6130ee20dc27c1a90904774ef5.png',
    imageAlt: 'Brio Bowls content strategy work sample',
  },
  {
    category: 'REAL ESTATE · MARKETING + ANALYSIS',
    title: 'Lawton property package',
    description: 'Developed an off-market five-door property packet with supporting rental-market analysis.',
    image: 'https://jhportfolio15.my.canva.site/_assets/media/81ac7744b60ca7938a76333b2b81efc6.jpg',
    imageAlt: 'Real estate rental market analysis work sample',
  },
]

const portfolioUrl = 'https://jhportfolio15.my.canva.site/'

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
          <a href="#work">Work</a>
          <a href="#education">Education</a>
          <a className="nav-contact" href="#contact">Let&apos;s connect <ArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>

      <section className="hero" id="about" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A CREATIVE, PEOPLE-FIRST PERSPECTIVE</div>
          <h1 id="hero-title">Hello, I&apos;m<br /><span>Jerry!</span></h1>
          <p className="hero-description">I have experience in real estate sales, non - profit fundraising, and film production! I love to collaborate and create with others to tell impactful stories.</p>
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
            <h2 id="experience-title">Different industries.<br /><span>Same human connection.</span></h2>
          </div>
          <p>Curiosity, care, and a belief that the best outcomes begin by listening.</p>
        </div>
        <div className="discipline-grid">
          {disciplines.map(({ icon: Icon, title, description, tag }) => (
            <article className="discipline-card" key={title}>
              <div className="discipline-top"><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="discipline-tag">{tag}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading work-heading">
          <div>
            <span className="section-kicker">SELECTED WORK · REAL STORIES</span>
            <h2 id="work-title">A few things<br /><span>I&apos;ve brought to life.</span></h2>
          </div>
          <div className="work-intro">
            <p>From the first idea to the final edit, I love making work that connects with people.</p>
            <div className="work-highlights" aria-label="Selected results">
              <span><strong>$500K+</strong> transaction volume</span>
              <span><strong>+26%</strong> email open rates</span>
              <span><strong>+105%</strong> social following</span>
            </div>
          </div>
        </div>
        <div className="work-grid">
          {workExamples.map((project) => (
            <article className="work-card" key={project.title}>
              <a className="work-card-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} in Jerry's full portfolio`}>
                <div className="work-card-image">
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className="work-image-action"><ArrowUpRight aria-hidden="true" /></span>
                </div>
                <div className="work-card-copy">
                  <span className="work-card-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="work-view-link">View example <ArrowUpRight aria-hidden="true" /></span>
                </div>
              </a>
            </article>
          ))}
        </div>
        <a className="work-portfolio-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
          Explore the full portfolio <ArrowUpRight aria-hidden="true" />
        </a>
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
          <article className="education-card education-card--ou">
            <div>
              <h3>Bachelor of Business Administration</h3>
              <p>Marketing</p>
            </div>
            <span className="education-school">UNIVERSITY OF OKLAHOMA</span>
          </article>
          <article className="education-card education-card--occc">
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
          <a className="contact-link" href="https://www.linkedin.com/in/jerryhuerta" target="_blank" rel="noopener noreferrer">LinkedIn <MoveUpRight aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">          <span>JERRY<span className="wordmark-dot">.</span> &nbsp;© {new Date().getFullYear()}</span>
<a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  )
}

export default PersonalCallingCard
